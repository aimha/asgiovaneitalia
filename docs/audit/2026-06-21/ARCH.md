# ARCH — Architettura

## ARCH-01 — AGENTS.md descrive un'architettura che non esiste nel repo
- **Impatto:** Alto
- **Posizione:** `AGENTS.md:1-643`, `.agent-guidelines/CORE.md`, root del repo
- **Osservazione:** L'AGENTS.md (e CLAUDE.md, e i file `.cursor/rules/`) descrivono un monorepo `foundation/` con backend NestJS (`backend/`), worker standalone (`worker/`), package condiviso (`packages/shared/`), PostgreSQL, TypeORM, RabbitMQ, Fluent Bit, Docker Compose. **Nessuna** di queste directory o tecnologie esiste nel repo. Il repo è un frontend SolidJS standalone con `package.json` che si chiama `vite-template-solid`.
- **Razionale:** La rubrica è disallineata al 95%. Le guidelines per backend, worker, entity, multi-tenancy, audit trail, soft delete, RabbitMQ sono completamente inapplicabili. Questo rende l'intero set di regole non fruibile per agenti e sviluppatori. Anche le regole applicabili (componenti SolidJS, SCSS, store) contengono riferimenti a pattern inesistenti (es. `@ark-ui/solid`, path alias `@components/@services/@lib/@domain`, struttura ITCSS, `fetchWithRefresh`).
- **Direzione proposta:** Eseguire una fork delle `.agent-guidelines/` rimuovendo tutto ciò che riguarda backend/worker/package condiviso, e adattare la sezione frontend alla struttura reale del progetto. Poi rieseguire `npm run sync-agents`.
- **Cross-link:** CONV-01 (header mancanti consequenziale), DUP-01 (pattern di animazione)

---

## ARCH-02 — Modello ibrido SolidJS dichiarativo + classi imperative vanilla JS
- **Impatto:** Alto
- **Posizione:** Tutti i `.module.js` (Header.module.js, Hero.module.js, About.module.js, History.module.js, Activities.module.js, Membership.module.js, Slider.module.js) e i rispettivi `.jsx`
- **Osservazione:** Il pattern architetturale dominante è: il componente SolidJS (`Component.jsx`) importa una classe vanilla JS (`Component.module.js`) e in `onMount` la istanzia, passandole `root` (ref DOM) e `styles` (CSS module class names). La classe JS accede direttamente al DOM (`document.querySelector`, `classList.add/remove`, `element.style.transform`), gestisce eventi con `document.addEventListener`, e usa `element.animate()` per le animazioni. SolidJS viene usato solo per il rendering iniziale e il data binding, mentre tutta la logica interattiva bypassa il modello reattivo di Solid.
- **Razionale:** Questo pattern viola il principio fondamentale di SolidJS (e dei framework reattivi in generale): la UI dovrebbe essere una funzione dello stato, non mutata imperativamente. Usare SolidJS solo come template engine vanifica i benefici di reattività, testabilità, e coerenza del modello mentale. Le classi JS non hanno accesso allo stato reattivo, costringono a querySelector su classi CSS module (accoppiamento fragile), e rendono impossibile il testing unitario della logica UI.
- **Direzione proposta:** Rifattorizzare gradualmente le classi `.module.js` in primitive Solid: signals, effects, directives (`use:`) per le animazioni, e store per lo stato condiviso. Le animazioni via `element.animate()` potrebbero essere incapsulate in custom directives Solid.
- **Cross-link:** COV-01 (non testabile con questo pattern), DUP-01 (duplicazione aggrava il problema)

---

## ARCH-03 — Store collocato in posizione non standard rispetto alla rubrica
- **Impatto:** Medio
- **Posizione:** `src/data/stores/Store.jsx`
- **Osservazione:** Lo store globale risiede in `src/data/stores/Store.jsx`, non in `src/store/` come prescritto dalla rubrica. Il naming è `Store.jsx` (PascalCase con estensione `.jsx`) invece di `camelCase.store.js`. Inoltre il file esporta il risultato di `createRoot(createStateManagement)` — un pattern atipico che mescola `createRoot` (per contesti fuori dal rendering) con `createStore`.
- **Razionale:** La posizione non canonica rende più difficile per nuovi sviluppatori trovare lo store. L'uso di `createRoot` + `createStore` esportato come default è corretto per SolidJS (serve a creare un reactive root fuori dall'albero dei componenti), ma il nome del file non segue la convenzione.
- **Direzione proposta:** Rinominare e spostare in `src/store/app.store.js`. Valutare se `createRoot` sia necessario o se basti esportare la factory function `createStateManagement`.

---

## ARCH-04 — Assenza di separazione infrastruttura/dominio nel frontend
- **Impatto:** Medio
- **Posizione:** `src/components/`, `src/routes/`
- **Osservazione:** La rubrica prescrive una cartella `src/domain/` per il codice di business e `src/components/` per UI generici. Il repo non ha `src/domain/`; tutto il codice è in `src/components/` (con sottocartella `PageComponents/` per le sezioni della pagina) e `src/routes/`. Non c'è distinzione tra componenti di infrastruttura e di dominio.
- **Razionale:** In un progetto di questa scala (landing page monopagina) la separazione infrastruttura/dominio potrebbe essere eccessiva. Tuttavia, se il progetto cresce con più pagine, l'assenza di una convenzione chiara porterà a disordine.
- **Direzione proposta:** Per ora: documentare esplicitamente la struttura attuale come variante semplificata. Se il progetto cresce, introdurre `src/domain/` per isolare le feature.

---

## ARCH-05 — Componente Where con dipendenza hardcoded da Google Maps senza loader
- **Impatto:** Medio
- **Posizione:** `src/components/PageComponents/Where/Where.jsx:11`
- **Osservazione:** Il componente `Where` fa riferimento a `google.maps.Map` globale, ma non c'è alcuno script tag o loader asincrono per il Google Maps SDK nell'`index.html` o nel componente stesso. Se l'SDK non è stato caricato (es. script mancante nel deploy), il componente fallisce silenziosamente con `ReferenceError`.
- **Razionale:** Dipendenza esterna non dichiarata né gestita. Il componente non ha fallback né gestione dell'errore. È un rischio di rottura a runtime che dipende da una configurazione esterna (presenza dello script Google Maps nel server di produzione).
- **Direzione proposta:** Aggiungere un caricamento asincrono condizionale dell'SDK Google Maps (o un fallback statico con l'immagine `mappa.jpg` già presente in `static/imgs/`). Poiché il componente `Where` è commentato nell'Homepage (`{/* <Where db={ state.where }/> */}`), questo è mitigato ma va risolto prima di riattivarlo.

---

## ARCH-06 — Struttura CSS piatta invece di ITCSS 4-layer
- **Impatto:** Medio
- **Posizione:** `src/styles/`
- **Osservazione:** La rubrica prescrive ITCSS 4-layer (`01-abstractions/`, `02-theme/`, `03-base/`, `04-utilities/`). Il repo ha file SCSS parziali piatti: `_variables.module.scss`, `_functions.module.scss`, `_fonts.module.scss`, `_typography.module.scss`, `_objects.module.scss`, `global.scss`. Nessuna sottocartella per layer.
- **Razionale:** La struttura piatta funziona per un progetto piccolo ma non scala bene. La rubrica codificata non corrisponde alla realtà. I partial `_variables.module.scss` e `_functions.module.scss` corrispondono al layer `01-abstractions`, `_typography.module.scss` e `_fonts.module.scss` al `03-base`, ma mancano `02-theme/` (token semantici) e `04-utilities/`.
- **Direzione proposta:** Allineare la rubrica alla struttura reale (documentare la struttura piatta come scelta consapevole per progetto piccolo) oppure migrare alla struttura ITCSS. Per ora il disallineamento documentale è il problema maggiore.

---

## ARCH-07 — Path alias assenti
- **Impatto:** Basso
- **Posizione:** `vite.config.js`, tutti i file JSX
- **Osservazione:** La rubrica dichiara path alias `@components`, `@services`, `@styles`, `@lib`, `@domain`. Nessuno è configurato in `vite.config.js`. Tutti gli import usano path relativi (`../../components/Header/Header`).
- **Razionale:** I path relativi profondi sono fragili durante i refactor e meno leggibili. L'assenza degli alias rende più difficile spostare i file.
- **Direzione proposta:** Configurare gli alias in `vite.config.js` e in `jsconfig.json` (per il supporto IDE).

---

## ARCH-08 — `@ark-ui/solid` dichiarato nella rubrica ma non usato né installato
- **Impatto:** Basso
- **Posizione:** `package.json`, `src/components/UI/`
- **Osservazione:** La rubrica richiede di wrappare `@ark-ui/solid` in componenti UI ed esportarli da `components/UI/index.js`. Né la dipendenza esiste nel `package.json`, né la cartella `components/UI/` esiste. Tutta l'UI usa HTML nativo + SCSS.
- **Razionale:** Per un progetto di questo tipo (landing page) non usare una libreria di componenti è una scelta ragionevole. Il disallineamento è nella rubrica, non nel codice.
- **Direzione proposta:** Rimuovere il riferimento ad `@ark-ui/solid` dalle `.agent-guidelines/` per questo fork.

---

## ARCH-09 — `Router` configurato con una sola route
- **Impatto:** Basso
- **Posizione:** `src/index.jsx:23-27`
- **Osservazione:** `@solidjs/router` è installato e configurato, ma esiste una sola route (`<Route path={base} component={Homepage} />`). L'intera app è una single-page con sezioni ancorate via `scrollIntoView`.
- **Razionale:** Per ora è sufficiente, ma se il sito cresce (es. pagina eventi, pagina contatti) il router dovrà gestire più rotte. La struttura attuale non ha una convenzione per organizzare nuove pagine.
- **Direzione proposta:** Se non sono previste nuove pagine, va bene così. Altrimenti, creare la convenzione `src/routes/<nome-pagina>/`.
