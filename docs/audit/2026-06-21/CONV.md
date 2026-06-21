# CONV — Conformità

## CONV-01 — Header di file obbligatorio assente su tutti i file sorgente
- **Impatto:** Alto
- **Posizione:** Tutti i file in `src/` (51 file), eccetto `scripts/sync-agents.js`
- **Osservazione:** La rubrica richiede che ogni file TS/JS inizi con un blocco header standardizzato (ROLE, DEPENDS ON, USED BY, KEY DECISIONS, GOTCHAS, LAST UPDATED). Solo `scripts/sync-agents.js` lo rispetta. **Nessun altro file** nel progetto ha questo header — né i `.jsx`, né i `.module.js`, né gli SCSS.
- **Razionale:** L'header fornisce contesto immediato sul ruolo di ogni file, le sue dipendenze e le decisioni non ovvie. In un progetto con 51 file, la sua assenza sistematica rende più difficile l'onboarding e la manutenzione, specialmente per agenti AI che si basano su queste annotazioni per operare correttamente.
- **Direzione proposta:** Aggiungere l'header a tutti i file. Priorità: `.module.js` (contengono la logica più complessa), poi `.jsx`, poi SCSS.

---

## CONV-02 — Uso sistematico di `export default` invece di named export
- **Impatto:** Medio
- **Posizione:** Tutti i `.jsx` e `.module.js`
- **Osservazione:** La rubrica prescrive "Esportare una singola funzione **named** — nessun `default export`". Ogni componente JSX usa `export default ComponentName`. Ogni classe `.module.js` usa `export default ClassName`. Lo store usa `export default createRoot(createStateManagement)`. I moduli in `src/js/` usano `export default`.
- **Razionale:** I named export facilitano il refactoring (l'IDE rinomina automaticamente), il tree-shaking, e rendono esplicita l'interfaccia pubblica del modulo. Con 51 file, l'uso uniforme di default export rende più difficile tracciare le dipendenze e rinominare in modo sicuro.
- **Direzione proposta:** Convertire tutti i default export in named export. Per i componenti: `export function ComponentName()`. Per le classi: `export class ClassName`. Per lo store: esportare funzioni named.

---

## CONV-03 — `console.log` nel codice di produzione
- **Impatto:** Medio
- **Posizione:** `src/components/Grid/Grid.module.js:8`, `src/components/Marquee/Marquee.module.js:8`, `src/components/Slider/Slider.module.js:87`
- **Osservazione:** La rubrica vieta esplicitamente i `console.log` (regola ESLint `no-console`). Tre file contengono `console.log`:
  - `Grid.module.js:8`: `console.log('bang')` — log di debug
  - `Marquee.module.js:8`: `console.log('init marquee')` — placeholder
  - `Slider.module.js:87`: `console.log('open popup')` — placeholder per funzionalità futura
- **Razionale:** I log di debug in produzione inquinano la console, possono esporre dettagli interni, e violano una regola ESLint esplicita. Inoltre, la presenza di placeholder (`'open popup'`) indica funzionalità non implementate lasciate nel codice.
- **Direzione proposta:** Rimuovere i `console.log`. Sostituire i placeholder con commenti `// TODO:` se necessario.

---

## CONV-04 — Commenti in italiano nel codice
- **Impatto:** Medio
- **Posizione:** `src/styles/_functions.module.scss:1`, `src/styles/_typography.module.scss:1`, `src/styles/_objects.module.scss:7`, `src/styles/_fonts.module.scss:3`
- **Osservazione:** La rubrica specifica "Commenti nel codice: inglese". I file SCSS contengono commenti in italiano:
  - `_functions.module.scss:1`: `// funzioni di utilità`
  - `_typography.module.scss:1`: `// IMPORTS` (ok), ma `:7` `// baseline grid mixin` (ok), `:49` da verificare...
  - `_objects.module.scss:7`: `// OBJECTS MIXINS`
- Il mix di italiano e inglese è incoerente anche internamente.
- **Razionale:** La regola esiste per garantire che tutto il codice sia accessibile a sviluppatori internazionali e agenti AI. La violazione è superficiale (commenti, non logica) ma sistematica nei file SCSS.
- **Direzione proposta:** Uniformare tutti i commenti in inglese.

---

## CONV-05 — `splitProps` importato ma non utilizzato
- **Impatto:** Medio
- **Posizione:** `src/components/PageComponents/About/About.jsx:1`
- **Osservazione:** `import { onMount, splitProps } from 'solid-js'` — `splitProps` è importato ma mai usato nel componente. È un'import inutilizzata.
- **Razionale:** Le import non utilizzate aumentano la dimensione del bundle (anche se minimamente con tree-shaking), creano rumore, e possono confondere chi legge il codice facendo pensare che `splitProps` venga usato da qualche parte.
- **Direzione proposta:** Rimuovere `splitProps` dall'import.

---

## CONV-06 — `className` vs `class` inconsistente nei JSX
- **Impatto:** Basso
- **Posizione:** Vari file `.jsx`
- **Osservazione:** La maggior parte dei componenti usa `class={`...`}` (JSX di SolidJS permette entrambi `class` e `className`), ma alcuni usano `className`:
  - `Homepage.jsx`: `className` non usato, usa `class`
  - `Marquee.jsx:19`: `<div className={styles.Wrapper}>` (unico uso di `className`)
  - Tutti gli altri usano `class`
- **Razionale:** Incoerenza stilistica. SolidJS supporta entrambi, ma usare un solo stile evita confusione. Il pattern dominante è `class`, quindi `className` in Marquee.jsx è l'outlier.
- **Direzione proposta:** Uniformare a `class` in tutto il progetto, allineandosi al resto del codice.

---

## CONV-07 — `rel="nofollow"` su link interni non necessario
- **Impatto:** Basso
- **Posizione:** `src/data/stores/Store.jsx:18`
- **Osservazione:** Il link a `https://www.damatparma.it` ha `rel="nofollow"`, che è corretto per link esterni. Tuttavia il `rel="nofollow"` è usato anche su link che potrebbero essere considerati partner (il ristorante che gestisce la sede). La scelta SEO è legittima ma opaca — non c'è commento che spieghi perché.
- **Razionale:** Non è una violazione della rubrica, ma una nota di contesto: `nofollow` su link a partner può essere intenzionale (per evitare di passare PageRank) o accidentale.
- **Direzione proposta:** Nessuna azione richiesta. Nota informativa.
