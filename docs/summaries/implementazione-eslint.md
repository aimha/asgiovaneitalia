# Implementazione ESLint nel progetto

## Cosa è stato cambiato

1. **Aggiunta dipendenze**: Installato `eslint`, `eslint-plugin-solid`, `eslint-config-prettier`, e `eslint-plugin-prettier` come devDependencies.
2. **Configurazione ESLint**: Creato `eslint.config.js` (Flat Config per ESLint v9) con:
   - Estensione di `eslint:recommended` e `solid/configs['flat/recommended']`
   - Regole personalizzate per SolidJS
   - Globali per browser e Node.js
   - Ignorare cartelle `dist/`, `coverage/`, `node_modules/`
3. **Script package.json**: Aggiunti script `lint` e `lint:fix`.
4. **Correzioni al codice**:
   - Aggiunto import mancante di `Portal` in `Header.jsx`
   - Aggiunto import mancante di `For` in vari componenti
   - Corretto utilizzo di variabili non usate (`props`, `index`, `setState`)
   - Corretto escape character non necessario in `Store.jsx`
   - Disabilitato regole problematiche per `innerHTML` (legacy code)

## Verifica eseguita

- ESLint passa senza errori (solo warning): `npm run lint`
- Tutti i test passano ancora: `npm run test:run`
- Il build staging funziona senza errori: `npm run build`

## Note

- **Warning rimanenti**: Ci sono 44 warning, principalmente relativi a:
  - Uso di `className` invece di `class` (prop React legacy)
  - Componenti vuoti che potrebbero essere self-closing
  - Uso di `innerHTML` (pericoloso per sicurezza)
  - Variabili reattive non usate in tracking scope
- **Configurazione Flat Config**: ESLint v9 usa un nuovo formato di configurazione basato su file JavaScript invece di `.eslintrc.*`
- **Regole disabilitate**: `solid/jsx-no-duplicate-props` è disabilitato a causa dell'uso esistente di `innerHTML`

## Prossimi passi suggeriti

1. **Introduci Prettier**: Configurare Prettier per il formatting automatico
2. **Correggi warning**: Risolvere i warning rimanenti dove possibile
3. **Aggiungi pre-commit hooks**: Configurare Husky per eseguire ESLint prima del commit
4. **Documentazione**: Aggiungere una sezione su ESLint nel README del progetto
