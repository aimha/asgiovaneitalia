<!-- GENERATED — non modificare direttamente. Fonte: .agent-guidelines/ → npm run sync-agents -->

# CORE — Architettura, naming, restrizioni assolute

## Stack

| Layer             | Tecnologia                                                                |
| ----------------- | ------------------------------------------------------------------------- |
| Frontend          | SolidJS, Vite, SCSS modules, @ark-ui/solid, @solidjs/router               |
| Web server        | Nginx (Alpine)                                                            |
| Backend           | NestJS, TypeScript                                                        |
| Worker            | NestJS standalone (no HTTP), TypeScript                                   |
| Message broker    | RabbitMQ 3                                                                |
| ORM               | TypeORM (migrations, synchronize disabilitato)                            |
| Database          | PostgreSQL 16 Alpine                                                      |
| Log collector     | Fluent Bit                                                                |
| Package condiviso | `packages/shared` — entity, RabbitMQ module, payloads, env schema, logger |
| Orchestrazione    | Docker Compose                                                            |

## Struttura del foundation

```
foundation/
├── packages/
│   └── shared/                     # package condiviso backend + worker
│       └── src/
│           ├── config/             # baseEnvSchema Zod, createEnvValidation()
│           ├── entities/
│           │   ├── infrastructure/ # Tenant, TenantAwareEntity, User, RefreshToken, AuditLog
│           │   └── domain/         # entity di business (Todo come esempio)
│           ├── interfaces/         # PaginatedResponse<T>
│           ├── logger/             # JsonLogger — structured JSON output
│           ├── payloads/
│           │   ├── infrastructure/ # placeholder
│           │   └── domain/         # TodoCreatePayload, TodoCompletedPayload
│           ├── rabbitmq/           # RabbitmqModule, RabbitmqService, constants
│           └── index.ts            # barrel export
├── frontend/
│   ├── nginx/nginx.conf
│   └── src/
│       ├── domain/                 # ← codice di dominio (business logic)
│       │   └── todos/              # feature di esempio — da rimuovere nei fork
│       │       ├── components/
│       │       ├── routes/
│       │       └── services/
│       ├── components/
│       │   ├── shared/             # ProtectedRoute
│       │   ├── UI/                 # Buttons, Checkbox, Dialog, Input, Toast
│       │   └── utility/            # Grid overlay
│       ├── layouts/MainLayout/
│       ├── lib/                    # fetchWithRefresh, toaster, websocket
│       ├── routes/login/
│       ├── services/               # auth-service.js
│       ├── store/                  # auth.store.js
│       └── styles/                 # ITCSS 4-layer SCSS
├── backend/
│   └── src/
│       ├── audit/                  # AuditSubscriber — logga INSERT/UPDATE/SOFT_DELETE
│       ├── auth/                   # JWT, guard, strategy, AppClsStore (tenantId + userId)
│       ├── common/
│       │   ├── dto/                # PaginationQueryDto
│       │   └── helpers/            # paginate.helper.ts
│       ├── config/                 # datasource.config.ts, env.config.ts (Zod)
│       ├── domain/                 # ← codice di dominio
│       │   ├── todos/              # modulo di esempio — da rimuovere nei fork
│       │   └── domain.module.ts    # importa tutti i moduli di dominio
│       ├── events/                 # WebSocket gateway + consumer RabbitMQ
│       ├── filters/                # AllExceptionsFilter globale
│       ├── health/                 # @nestjs/terminus — DB, RabbitMQ, disco
│       ├── migrations/
│       ├── seeds/                  # seed.script.ts, seed.config.ts
│       ├── tenant/                 # TenantInterceptor, TenantSubscriber, TenantModule
│       ├── users/
│       ├── app.controller.ts       # GET /api/health — non rimuovere
│       ├── app.module.ts           # AuditSubscriber + TenantSubscriber in subscribers
│       └── main.ts                 # JsonLogger, Swagger, cookie-parser, CORS
├── worker/
│   └── src/
│       ├── cleanup/                # CleanupService — @Cron pulizia refresh token
│       ├── config/                 # env.config.ts (Zod)
│       ├── todos/                  # consumer
│       ├── app.module.ts           # ScheduleModule, CleanupModule
│       └── main.ts                 # JsonLogger
├── fluent-bit/
│   ├── Dockerfile
│   └── fluent-bit.conf
├── scripts/                        # check-fork-safety.sh
├── docs/
├── .env.example
├── docker-compose.yml
└── Makefile
```

## Separazione infrastruttura / dominio

Il codice è diviso fisicamente in due aree per rendere il template forkabile:

- **Infrastruttura** — auth, audit, tenant, events, filters, config, health, common, layouts, UI, stili, logger. Gestita dal template.
- **Dominio** — entity di business, controller, servizi, pagine, componenti specifici. Vive dentro cartelle `domain/`.

`AppModule` importa solo `DomainModule` — i junior aggiungono moduli in `domain/domain.module.ts` senza toccare `app.module.ts`.

## Multi-tenancy

- DB singolo con discriminator `tenant_id` su tutte le entity di dominio
- `TenantAwareEntity` (classe astratta in shared): aggiunge `tenant_id` + `deleted_at` (soft delete)
- `TenantInterceptor`: verifica tenant attivo, scrive `tenantId` + `userId` nel CLS
- `TenantSubscriber`: auto-inject `tenant_id` su INSERT da CLS
- Worker: niente CLS, `tenant_id` dal payload RabbitMQ, settato esplicitamente sull'entity
- Tutte le query nei service filtrano per `tenant_id` (da CLS) + `user_id` (da JWT)

## Soft delete

- `@DeleteDateColumn()` su `TenantAwareEntity` — ereditato da tutte le entity di dominio
- Usare `repository.softRemove()` invece di `repository.remove()`
- Usare `repository.recover()` per ripristinare
- `find*()` esclude automaticamente i record soft-deleted
- Per includerli: `{ withDeleted: true }`

## Audit trail

- `AuditSubscriber` intercetta automaticamente INSERT/UPDATE/SOFT_DELETE su entity tenant-aware
- Persiste nella tabella `audit_log` (NON estende TenantAwareEntity)
- Campi sensibili (`password`) filtrati automaticamente
- `userId` dal CLS (null nel worker)
- Nessuna azione richiesta nei service — è trasparente

## Logging

- `JsonLogger` (in `packages/shared/src/logger/`) emette JSON su stdout
- Usato da backend e worker in `NestFactory.create()` / `createApplicationContext()`
- Fluent Bit raccoglie i log via Docker `fluentd` log driver e li scrive su file rotati

## Entity arrays

Le entity sono organizzate in due array esportati da shared:

- `infrastructureEntities` — Tenant, User, RefreshToken, AuditLog
- `domainEntities` — Todo (esempio)

Per aggiungere una nuova entity di dominio basta aggiungerla a `domainEntities` in `entities/domain/index.ts`.

## npm Workspaces

`package.json` root dichiara `"workspaces": ["packages/*", "backend", "worker"]`.
`frontend` è **escluso** — usa Vite e non condivide dipendenze npm con backend/worker.

**Prima di buildare backend o worker in locale**, `shared` deve essere compilato:

```bash
make build-packages
```

## Naming conventions

### File e cartelle

- Componenti SolidJS: `PascalCase.jsx` con `PascalCase.module.scss` co-located
- Store frontend: `camelCase.store.js` in `src/store/`
- Backend: suffissi ammessi — `module|controller|service|guard|strategy|decorator|dto|entity|config|filter|interceptor|middleware|pipe|subscriber|indicator|spec`
- Entity: sempre in `packages/shared/src/entities/` — mai nel backend o nel worker
- Test backend/worker: `*.spec.ts` co-located
- Test frontend: `*.test.js` co-located
- Cartelle `migrations/` e `seeds/`: escluse dal naming convention check

### Branch

- `ai/<descrizione-breve-kebab-case>` — branch agenti AI
- `feature/<descrizione>` — feature developer
- `fix/<descrizione>` — bugfix developer

## Lingua

- **Commenti nel codice:** inglese
- **Documentazione** (README, docs/): italiano

## File header obbligatorio

Ogni file TS/JS deve iniziare con questo blocco:

```
// ============================================================
// ROLE: [cosa fa questo file, 1 riga]
// DEPENDS ON: [file/moduli da cui dipende]
// USED BY: [chi usa questo modulo]
// KEY DECISIONS: [perché alcune scelte non ovvie]
// GOTCHAS: [trappole, edge case, comportamenti inattesi]
// LAST UPDATED: [data ISO + breve descrizione]
// ============================================================
```

## Regole ESLint

- `explicit-function-return-type`, `no-floating-promises`, `complexity` max 10, `max-lines-per-function` 50, `no-console`, `no-explicit-any`
- Override per `**/*.spec.ts`: disabilita `explicit-function-return-type`, `max-lines-per-function`, `no-unsafe-*`, `unbound-method`

## Commit

- Conventional Commits con commitlint
- `subject-case: lower-case` — nomi di librerie vanno lowercased nel subject
- Pre-commit hook con Husky + lint-staged

## Regole generali

- Non duplicare logica già esistente: cercare prima
- Prima di modificare un file esistente, leggerlo interamente
- Al termine di ogni modifica, elencare i file toccati
- Problemi fuori scope: segnalare nel summary senza sistemare autonomamente

## Gestione dipendenze

Nessuna nuova dipendenza senza approvazione esplicita. Segnalare nel summary come domanda aperta.

## Gestione ambiguità

Se un requisito è ambiguo, l'agente si ferma e formula la domanda specifica nel summary. Nessuna implementazione basata su assunzioni non dichiarate.

## File protetti — mai toccati dagli agenti

```
vite.config.*
package.json        (root e ogni sub-package)
package-lock.json
.env*               (eccetto .env.example)
docker-compose.yml
fluent-bit/
.github/workflows/*
Makefile
```

---

# WORKFLOW — Plan-first, branch, sessioni, summary

## Sequenza per ogni task

1. **Planning** con Claude o ChatGPT prima di aprire la sessione agente
2. **Worktree** dedicato su branch `ai/<descrizione>`
3. **Plan mode** prima di qualsiasi modifica (`/plan` o equivalente)
4. **Summary** obbligatorio al termine in `docs/summaries/ai/<descrizione>.md`
5. **Pull request** verso il branch feature da cui è stato creato il ramo `ai/*`

## Worktree — isolamento fisico

```bash
# 1. Creare il worktree (da un branch feature/*, mai da main)
git worktree add ../worktrees/ai-nome-task -b ai/nome-task

# 2. Entrare nella cartella e installare le dipendenze
cd ../worktrees/ai-nome-task
npm install

# 3. Aprire l'agente sulla cartella del worktree (non sulla root del repo)
opencode .
# oppure: code .

# 4. A task completato e PR mergeata, rimuovere
git worktree remove ../worktrees/ai-nome-task
git branch -d ai/nome-task
```

Il worktree impedisce per design git lo switch di branch: non è bypassabile con flag o configurazioni.

## Sessioni

- Una sessione = un task ben delimitato
- Nuovo obiettivo = nuova sessione
- Chiudere la sessione orientativamente al 70-80% della context window
- Ideale: non superare il 40-50% per performance ottimali

### Segnali di degrado da monitorare
- L'agente ignora vincoli espliciti nelle guidelines
- Produce file non richiesti o modifica file fuori scope
- Il codice prodotto non rispetta le convenzioni di naming o struttura
- Le risposte diventano più generiche e meno specifiche al progetto

## Summary obbligatorio

Al termine di ogni task creare `docs/summaries/ai/<nome-task>.md`.
Il path deve corrispondere esattamente al nome del branch (senza il prefisso `ai/` iniziale).

Esempio: branch `ai/fix-header-mobile` → file `docs/summaries/ai/fix-header-mobile.md`

La PR non passa la CI senza questo file.

```markdown
# <nome task>

## Cosa è stato modificato
- ...

## Cosa non è stato modificato
- ...

## Domande aperte e suggerimenti
- ...
```

## Test — sessioni separate

I test vengono scritti in una sessione separata **prima** dell'implementazione, committati, e l'agente che implementa non li modifica.

| Sessione   | Contenuto                                               |
| ---------- | ------------------------------------------------------- |
| Sessione 1 | analisi comportamento atteso, scrittura test, commit    |
| Sessione 2 | implementazione fino al verde dei test                  |

## Al termine di ogni sessione

Eseguire `/user:update-context` per aggiornare gli header dei file modificati e, se necessario, l'`AGENTS.md` del modulo.

## Azioni vietate agli agenti

- Switch di branch durante una sessione
- Amend su commit già pushati
- Push diretti su branch protetti (`main`, `develop`)
- Operazioni di merge o rebase
- Modifica di file protetti (lista in CORE.md)

---

# PATTERNS — Pattern specifici dello stack

## Componenti SolidJS

### Struttura cartella

Ogni componente risiede nella propria cartella con questi file co-located:

```
src/components/
└── MyComponent/
    ├── MyComponent.jsx
    └── MyComponent.module.scss
```

### Regole componente

- Esportare una singola funzione **named** — nessun `default export`
- Non superare le **150 righe** — se più lungo, suddividere in sotto-componenti
- Non importare direttamente da cartelle di componenti fratelli
- Le props devono avere tipo esplicito o essere destrutturate con valori di default chiari
- Niente logica di business nel componente — delegare a store o service

### Signals e reattività

```jsx
// ✓ Signal locale al componente
const [count, setCount] = createSignal(0);

// ✓ Effetto con cleanup esplicito
createEffect(() => {
  const timer = setInterval(() => setCount((c) => c + 1), 1000);
  onCleanup(() => clearInterval(timer));
});

// ✗ Non usare signals per stato derivabile
const [doubled, setDoubled] = createSignal(0); // sbagliato
const doubled = createMemo(() => count() * 2); // corretto
```

### Conditional rendering

```jsx
// ✓ <Show> per boolean
<Show when={isLoading()} fallback={<Content />}>
  <Spinner />
</Show>

// ✓ <For> per liste — mai .map() nel JSX
<For each={items()}>{(item) => <Item {...item} />}</For>

// ✓ <Switch>/<Match> per casi multipli
<Switch fallback={<NotFound />}>
  <Match when={status() === 'loading'}><Spinner /></Match>
  <Match when={status() === 'error'}><Error /></Match>
</Switch>
```

### Path alias frontend

```javascript
'@components' → src/components
'@services'   → src/services
'@styles'     → src/styles
'@lib'        → src/lib
'@domain'     → src/domain
```

## Store e Signals

### Struttura

Gli store globali risiedono in `src/store/` con naming `camelCase.store.js`.

### Pattern store

```javascript
// ✓ createStore per stato complesso (oggetti/array)
import { createStore } from 'solid-js/store';

const [cart, setCart] = createStore({ items: [], total: 0 });

export function addItem(item) {
  setCart('items', (items) => [...items, item]);
  setCart('total', (t) => t + item.price);
}
export { cart };
```

### Regole store

- Uno store per dominio — non creare store omnibus
- Non esporre setter direttamente: wrappare in funzioni named con semantica di dominio
- Derivazioni di stato: sempre `createMemo`, mai ricalcolare nel componente
- Niente side effect nei setter — usare `createEffect` nel punto di utilizzo

## SCSS e stili

### Architettura ITCSS 4-layer

```
src/styles/
├── 01-abstractions/    # variabili, funzioni, placeholder
├── 02-theme/           # token semantici (_map.scss)
├── 03-base/            # reset, elementi HTML
└── 04-utilities/       # classi utility
```

`02-theme/_map.scss` è iniettato globalmente via `vite.config.js` — disponibile senza import nei `.module.scss`.

### Regole SCSS

- Usare **SCSS modules** per tutti gli stili dei componenti, niente inline style
- Il file `.module.scss` si chiama come il componente
- Niente classi globali dal modulo di un componente — tutto scoped
- **Mai `border` su elementi con `border-radius`** — usare `box-shadow: inset 0 0 0 <width> <color>`

## Chiamate API — frontend

- Usare sempre `fetchWithRefresh` da `src/lib/fetchWithRefresh.js` — mai `fetch` diretto
- Sempre `credentials: 'include'` in ogni chiamata
- Usare path relativi — mai hostname hardcoded
- `POST /api/todos` risponde `202 Accepted`: il todo arriva via WebSocket, non nella risposta HTTP
- Endpoint `202` e `204`: non chiamare `.json()` — non hanno body

## Componenti UI (Ark UI)

- I componenti UI wrappano Ark UI — import per-component: `import { Field } from '@ark-ui/solid/field'`
- Esportati con barrel export da `components/UI/index.js`
- Non importare `@ark-ui/solid` direttamente nelle feature — passare sempre dai wrapper UI
- Styling con CSS modules e data attributes Ark (`data-scope`, `data-part`, `data-type`)

## Backend NestJS

### Struttura modulo di dominio

Ogni feature va in `backend/src/domain/<nome-modulo>/`:

```
backend/src/domain/
└── calls/
    ├── calls.module.ts
    ├── calls.controller.ts
    ├── calls.service.ts
    ├── calls.service.spec.ts
    └── dto/
        ├── create-call.dto.ts
        └── update-call.dto.ts
```

Registrare in `domain/domain.module.ts` — non toccare `app.module.ts`.

**Le entity non stanno nel backend** — vivono in `packages/shared/src/entities/domain/`. Importare sempre da `@foundation/shared`.

### Regole backend

- Tutta la logica di business nel **service**, mai nel controller
- Validazione input con DTO e `class-validator`
- `ValidationPipe` globale: `whitelist: true`, `forbidNonWhitelisted: true`, `transform: true`
- Return type espliciti obbligatori su tutti i metodi (regola ESLint)
- Usare `HttpException` o eccezioni NestJS standard — niente `throw new Error` grezzo

### Proteggere una route

```typescript
@UseGuards(JwtGuard)
@Controller('/nome')
export class NomeController {
  @Get('/')
  findAll(
    @CurrentUser() user: JwtPayload,
    @Query() query: PaginationQueryDto
  ): Promise<PaginatedResponse<MyEntity>> {
    return this.service.findAll(user.id, query.page, query.pageSize);
  }
}
```

### Filtrare per tenant nei service

```typescript
@Injectable()
export class NomeService {
  constructor(
    @InjectRepository(Entita)
    private readonly repo: Repository<Entita>,
    private readonly cls: ClsService<AppClsStore>
  ) {}

  private get tenantId(): string {
    return this.cls.get('tenantId');
  }

  // Tutte le query filtrano SEMPRE per tenant_id + user_id
  findAll(
    userId: string,
    page: number,
    pageSize: number
  ): Promise<PaginatedResponse<Entita>> {
    return paginate(
      this.repo,
      { where: { user_id: userId, tenant_id: this.tenantId } },
      page,
      pageSize
    );
  }

  // Soft delete — mai remove() fisico
  async remove(id: string, userId: string): Promise<void> {
    const entity = await this.findOne(id, userId);
    await this.repo.softRemove(entity);
  }

  // Restore — richiede withDeleted: true
  async restore(id: string, userId: string): Promise<Entita> {
    const entity = await this.repo.findOne({
      where: { id, user_id: userId, tenant_id: this.tenantId },
      withDeleted: true,
    });
    if (!entity) throw new NotFoundException();
    if (!entity.deleted_at) throw new NotFoundException('Non è eliminato');
    return this.repo.recover(entity);
  }
}
```

### DTO

- `create-nome.dto.ts` per POST
- `update-nome.dto.ts` estende `PartialType(CreateNomeDto)` per PATCH
- I DTO restano nel backend — sono contratti HTTP, non di dominio

### Rate limiting

- `@SkipThrottle()` per endpoint ad alta frequenza (refresh, me, health)
- `@Throttle({ default: { ttl: 60000, limit: N } })` per override per-route

## Entity — packages/shared

- Vivono **esclusivamente** in `packages/shared/src/entities/`
- Entity di dominio in `entities/domain/`, infrastrutturali in `entities/infrastructure/`
- Entity di dominio **devono** estendere `TenantAwareEntity` (eredita `tenant_id` + `deleted_at` + audit trail)
- `@PrimaryGeneratedColumn('uuid')` su tutti gli id
- Sempre `@CreateDateColumn()` e `@UpdateDateColumn()`
- Usare `!` (definite assignment) su tutte le proprietà
- Aggiungere all'array `domainEntities` in `entities/domain/index.ts`
- Dopo ogni modifica: `make build-packages` → generare migration

**Aggiungere una nuova entity di dominio:**

1. Creare il file in `packages/shared/src/entities/domain/`, estendere `TenantAwareEntity`
2. Aggiungerla all'array `domainEntities` e all'export in `entities/domain/index.ts`
3. `make build-packages`
4. `DB_HOST=localhost npm run migration:generate --workspace=backend -- src/migrations/NomeMigration`

## Worker NestJS

- Nessun HTTP server — `NestFactory.createApplicationContext(AppModule, { logger: new JsonLogger() })`
- `synchronize: false` in TypeORM — non gestisce lo schema
- `ScheduleModule.forRoot()` per job periodici (`@nestjs/schedule`)
- Ogni consumer implementa `OnModuleInit` e chiama `createConsumerChannel` in `onModuleInit()`

### Pattern consumer

```typescript
export class MyConsumer implements OnModuleInit {
  constructor(
    private readonly rabbitmqService: RabbitmqService,
    @InjectRepository(MyEntity)
    private readonly repo: Repository<MyEntity>
  ) {}

  async onModuleInit(): Promise<void> {
    await this.rabbitmqService.createConsumerChannel(
      QUEUES.MY_ACTION,
      ROUTING_KEYS.MY_ACTION,
      this.handleAction.bind(this)
    );
  }

  private async handleAction(msg: ConsumeMessage): Promise<void> {
    const payload = JSON.parse(msg.content.toString()) as MyActionPayload;

    // SEMPRE settare tenant_id dal payload — il worker non ha CLS
    const entity = this.repo.create({
      ...data,
      tenant_id: payload.tenantId,
    });
    await this.repo.save(entity);

    // Pubblicare completed con tenantId per notifica WebSocket
    await this.rabbitmqService.publish(ROUTING_KEYS.MY_COMPLETED, {
      userId: payload.userId,
      tenantId: payload.tenantId,
      entity,
    });
  }
}
```

## RabbitMQ

### Aggiungere una nuova queue

1. Aggiungere costante in `packages/shared/src/rabbitmq/rabbitmq.constants.ts` (sia `QUEUES` che `ROUTING_KEYS`)
2. Aggiungere il payload in `packages/shared/src/payloads/domain/` — includere sempre `tenantId: string`
3. Pubblicare dal backend tramite `RabbitmqService.publish()`
4. Creare consumer nel worker
5. `make build-packages`
6. Nel backend, aggiungere handler in `EventsConsumer` per la queue `*.completed`

### Comportamento su errore

`nack(msg, false, false)` — va al DLX senza requeue. Ispezionabile su `http://localhost:15672`.

## Testing

- Backend: Jest + `@nestjs/testing`. File `.spec.ts` co-located.
- Worker: Jest + `@nestjs/testing`. File `.spec.ts` co-located.
- Frontend: Vitest integrato in `vite.config.js`. File `.test.js` co-located.
- Pattern: mock repository con `getRepositoryToken()`, mock CLS con `useValue`, `jest.mock()` per funzioni importate
- Comandi: `make test` (tutti), `make test-backend`, `make test-worker`, `make test-frontend`
