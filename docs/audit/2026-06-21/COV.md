# COV — Copertura

## COV-01 — Nessuna infrastruttura di test rilevata nell'intero repository
- **Impatto:** Alto
- **Posizione:** Intero repository
- **Osservazione:** Non è stato trovato alcun file di test:
  - **Zero file `.spec.ts`** (backend/worker test pattern)
  - **Zero file `.test.js`** o `.test.jsx` (frontend test pattern)
  - Vitest non è configurato né elencato come dipendenza in `package.json` (la rubrica lo menziona ma non è installato)
  - Nessuna configurazione Jest
  - `make test`, `make test-backend`, `make test-worker`, `make test-frontend` non sono target disponibili (il Makefile ha solo `create-component` e `clean`)
- **Razionale:** La totale assenza di test significa che:
  - Non c'è verifica automatica che le animazioni funzionino (le classi `.module.js` sono il core della logica interattiva)
  - Non c'è verifica che i componenti renderizzino correttamente con i dati dallo store
  - Non c'è protezione contro regressioni durante i refactor
  - Il refactoring suggerito in ARCH-02 (da classi imperative a reattività Solid) non ha una safety net
  - Le aree a maggior rischio sono: la logica di navigazione dello Slider (calcolo offset, `setPositionByIndex`), la gestione toggle del menu Header, e il `IntersectionObserver` con dispatch di eventi custom
- **Direzione proposta:**
  1. Aggiungere Vitest come dipendenza di sviluppo e configurarlo in `vite.config.js`
  2. Iniziare con test per i moduli `src/js/` (animazioni, observer, cubicBezier) — sono i più isolati e testabili
  3. Poi test per lo store (`Store.jsx`) — verifica che i dati siano nella forma attesa
  4. Poi test di rendering per i componenti pagina (verifica che ricevendo props dallo store, renderizzino il DOM corretto)
  5. Le classi `.module.js` nel pattern attuale sono difficili da testare perché accedono direttamente al DOM; il refactoring verso direttive SolidJS (ARCH-02) le renderebbe testabili con `render()` di Solid Testing Library
