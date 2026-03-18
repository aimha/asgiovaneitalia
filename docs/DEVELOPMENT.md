# Guida allo Sviluppo

Questo documento contiene le istruzioni per lo sviluppo del progetto, inclusi i comandi disponibili, la configurazione di linting e formatting, e le best practices.

## Comandi Disponibili

### Sviluppo

- `npm run dev` / `npm start`: Avvia il server di sviluppo Vite su http://localhost:3000
- `npm run build`: Crea la build per staging (base path: `/asgiovaneitalia/`)
- `npm run buildProd`: Crea la build per produzione (base path: `./`)
- `npm run serve`: Anteprima della build compilata

### Testing

- `npm run test`: Esegue i test in modalità watch
- `npm run test:run`: Esegue i test una volta (modalità CI)
- `npm run coverage`: Genera il report di copertura dei test

### Linting e Formatting

- `npm run lint`: Esegue ESLint e verifica il formatting con Prettier
- `npm run lint:fix`: Corregge automaticamente gli errori ESLint e formatta i file
- `npm run format`: Formatta tutti i file con Prettier
- `npm run format:check`: Verifica che tutti i file siano formattati correttamente

## Configurazione Linting

### ESLint

Il progetto utilizza ESLint v9 con Flat Config. La configurazione si trova in `eslint.config.js`.

**Regole principali:**

- Estende `eslint:recommended` e `solid/configs['flat/recommended']`
- Integra Prettier tramite `eslint-plugin-prettier`
- Regole specifiche per SolidJS:
  - `solid/prefer-show`: error
  - `solid/no-innerhtml`: warn (legacy code)
  - `solid/jsx-no-duplicate-props`: off (legacy code)

**Globali disponibili:**

- Browser: `window`, `document`, `console`, `setTimeout`, `fetch`, ecc.
- Node.js: `process`, `__dirname`, `module`, `exports`, ecc.

### Prettier

Il progetto utilizza Prettier per il formatting automatico. La configurazione si trova in `prettier.config.js`.

**Configurazione:**

- `singleQuote: true`: Usa single quotes
- `trailingComma: 'es5'`: Trailing commas in ES5
- `tabWidth: 2`: Indentazione di 2 spazi
- `semi: false`: Nessun punto e virgola
- `printWidth: 100`: Max 100 caratteri per riga
- `bracketSpacing: true`: Spazi tra parentesi
- `arrowParens: 'avoid'`: Nessuna parentesi per arrow functions con un parametro
- `endOfLine: 'lf'`: Line feed (Unix)

**File ignorati (`.prettierignore`):**

- `dist/`, `coverage/`: Cartelle di build e copertura
- `node_modules/`: Dipendenze
- `*.min.js`, `*.min.css`: File minificati
- `.vscode/`, `.idea/`: Configurazioni IDE
- `.DS_Store`, `Thumbs.db`: File di sistema
- `*.log`, `logs/`: File di log

## Pre-commit Hooks

Il progetto utilizza Husky e lint-staged per eseguire controlli automatici prima di ogni commit.

**Configurazione:**

- Husky gestisce i git hooks
- lint-staged esegue controlli solo sui file modificati
- Hook pre-commit: esegue ESLint e Prettier sui file JavaScript/JSX

**Flusso di lavoro:**

1. Modifica i file nel progetto
2. Esegui `git add` sui file modificati
3. Esegui `git commit`
4. Husky esegue automaticamente lint-staged
5. Se ci sono errori, il commit viene bloccato e vengono mostrati i problemi
6. Correggi gli errori e riprova

## Test

Il progetto utilizza Vitest con @solidjs/testing-library per i test.

**Struttura dei test:**

- I test si trovano in file `.test.jsx` accanto ai componenti
- I componenti con classi di logica vengono mockati
- Lo store SolidJS viene mockato per i test delle route

**Esempi:**

- `src/components/Header/Header.test.jsx`: Test per il componente Header
- `src/routes/homepage/Homepage.test.jsx`: Test per la pagina Homepage

## Best Practices

### Codice

- Usa `single quotes` per le stringhe (eccetto quando contengono single quotes)
- Ometti i punti e virgola
- Indenta con 2 spazi
- Usa `class` invece di `className` per gli elementi SolidJS
- Importa `For` e `Show` da `solid-js` per i loop e le condizioni

### Test

- Mock le classi di logica per evitare errori di istanziazione
- Usa `data-testid` o selettori specifici per selezionare elementi
- Verifica sia il rendering che la logica dei componenti

### Linting

- Esegui `npm run lint` prima di commitare
- Correggi tutti gli errori ESLint
- Assicurati che il codice sia formattato correttamente

## Risorse

- [SolidJS Documentation](https://solidjs.com)
- [Vitest Documentation](https://vitest.dev)
- [ESLint Documentation](https://eslint.org)
- [Prettier Documentation](https://prettier.io)
- [Husky Documentation](https://typicode.github.io/husky)
