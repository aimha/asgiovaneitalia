# Introduzione di Vitest nel progetto

## Cosa è stato cambiato

1. **Aggiunta dipendenze**: Installato `vitest`, `@solidjs/testing-library`, `@testing-library/jest-dom`, `jsdom`, e `@vitest/coverage-v8` come devDependencies.
2. **Configurazione Vite**: Aggiunta la sezione `test` in `vite.config.js` con:
   - `environment: 'jsdom'`
   - `globals: true`
   - `setupFiles: ['./src/setupTests.js']`
   - Configurazione copertura con provider `v8`.
3. **File di setup**: Creato `src/setupTests.js` per importare `@testing-library/jest-dom/vitest`.
4. **Script package.json**: Aggiunti script `test`, `test:run`, e `coverage`.
5. **Esempi di test** (14 file di test creati):
   - `src/components/Grid/Grid.test.jsx`: Test per il componente Grid.
   - `src/components/Marquee/Marquee.test.jsx`: Test per il componente Marquee.
   - `src/components/Header/Header.test.jsx`: Test per il componente Header.
   - `src/components/Slider/Slider.test.jsx`: Test per il componente Slider.
   - `src/components/MouseHighlight/MouseHighlight.test.jsx`: Test per il componente MouseHighlight.
   - `src/components/PageComponents/Hero/Hero.test.jsx`: Test per il componente Hero.
   - `src/components/PageComponents/Activities/Activities.test.jsx`: Test per il componente Activities.
   - `src/components/PageComponents/Footer/Footer.test.jsx`: Test per il componente Footer.
   - `src/components/PageComponents/Where/Where.test.jsx`: Test per il componente Where (con mock di Google Maps).
   - `src/components/PageComponents/History/History.test.jsx`: Test per il componente History.
   - `src/components/PageComponents/Membership/Membership.test.jsx`: Test per il componente Membership.
   - `src/components/PageComponents/About/About.test.jsx`: Test per il componente About.
   - `src/routes/homepage/Homepage.test.jsx`: Test per la pagina Homepage (con mock dello store).
   - `src/routes/gallery/Gallery.test.jsx`: Test per la pagina Gallery (con mock dello store).

## Cosa non è stato cambiato

- Nessuna modifica alla logica applicativa esistente.
- Nessun alias personalizzato aggiunto (il progetto non ne usa attualmente).
- Nessuna modifica ai file di ambiente (`.env`, `.env.staging`, `.env.production`).

## Verifica eseguita

- Tutti i test passano (`npm run test:run`): **37 test in 14 file**.
- Il report di copertura genera correttamente (`npm run coverage`): **100% statements, 72.5% branch, 100% functions, 100% lines**.
- Il build staging (`npm run build`) funziona senza errori.

## Note

- Il componente `Header` è stato corretto dichiarando la variabile `root` (ref non dichiarato precedentemente).
- Per i componenti con `onMount` e classi di logica, è necessario mockare la classe di logica per evitare errori di istanziazione.

## Prossimi passi suggeriti

1. Configurare ESLint + Prettier se richiesto.
2. Aggiungere test per le pagine (routes) se necessario.
