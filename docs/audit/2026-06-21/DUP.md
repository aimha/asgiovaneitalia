# DUP — Duplicazioni e incoerenze

## DUP-01 — Pattern di animazione all'intersezione duplicato in 5 componenti
- **Impatto:** Medio
- **Posizione:** `Hero.module.js:32-53`, `About.module.js:20-34`, `History.module.js:20-35`, `Activities.module.js:20-35`, `Membership.module.js:20-35`
- **Osservazione:** Ogni componente di pagina (tranne Footer e Where, che hanno classi vuote) replica lo stesso identico pattern:
  1. Crea un `AnimationClass` con parametri quasi identici (`duration: 500`, `easing: 'cubic-bezier(0, 0, 0.3, 1)'`)
  2. In `init()`, registra un listener su `this.root.addEventListener('intersect', ...)`
  3. Nel callback, costruisce una lista di elementi da animare con `querySelector`/`querySelectorAll`
  4. Chiama `this.tl_elements.animateElement(list, [{opacity: 0, transform: 'translateY(20px)'}, {opacity: 1, transform: 'translateY(0)'}])`
- **Razionale:** Cinque copie della stessa logica con variazioni minime (quali elementi animare, `initialDelay`, `stagger`). Ogni modifica al comportamento di animazione richiede 5 modifiche. La logica è testabile solo 5 volte. Viola il principio DRY ed è fonte di bug da deriva (es. un componente usa `initialDelay: 125`, un altro `250`).
- **Direzione proposta:** Estrarre una factory o un custom hook/directive SolidJS (`use:intersectAnimation`) che accetti una lista di selettori CSS e parametri di animazione. Il componente passerebbe solo la configurazione.

---

## DUP-02 — Duplicazione del valore `cubic-bezier(0, 0, 0.3, 1)` hardcoded vs modulo condiviso
- **Impatto:** Medio
- **Posizione:** `Hero.module.js:17,25`, `About.module.js:15`, `History.module.js:15`, `Activities.module.js:15`, `Membership.module.js:15`, `Slider.module.js:180` vs `src/js/cubicBezier.js:8` (esporta `celebratoryEaseOut`)
- **Osservazione:** Il valore `'cubic-bezier(0, 0, 0.3, 1)'` appare hardcoded in **6 file** come stringa letterale. Esiste un modulo centralizzato `src/js/cubicBezier.js` che esporta `cubicBezier.celebratoryEaseOut` con lo stesso valore. Solo `Header.module.js` e `Slider.module.js` importano effettivamente `cubicBezier` — ma `Slider.module.js` lo usa solo in `setPositionByIndex` (`celebratoryEaseInOut`, non `celebratoryEaseOut`), e in `movementMove` non usa affatto il modulo.
- **Razionale:** Se si decide di cambiare la curva di easing, bisogna modificare 6 punti invece di 1. C'è un modulo creato apposta per centralizzare le curve ma non viene usato coerentemente.
- **Direzione proposta:** Far sì che tutti i file importino da `cubicBezier.js`. Rimuovere le stringhe hardcoded.

---

## DUP-03 — Classi `.module.js` vuote o quasi vuote
- **Impatto:** Medio
- **Posizione:** `Footer.module.js`, `Where.module.js`, `Marquee.module.js`
- **Osservazione:** `Footer.module.js` e `Where.module.js` definiscono classi con costruttore e metodo `init()` entrambi vuoti (nessuna logica). `Marquee.module.js` ha solo un `console.log` in `init()`. Queste classi esistono solo per conformarsi al pattern dei triplet (`.jsx` + `.module.js` + `.module.scss`), ma non svolgono alcuna funzione.
- **Razionale:** File vuoti creano rumore, aumentano la superficie di manutenzione, e suggeriscono che il pattern "ogni componente ha una classe JS" non sia universale. Se un componente non ha logica imperativa, non dovrebbe essere costretto ad avere un file `.module.js`.
- **Direzione proposta:** Rimuovere i file `.module.js` per i componenti che non hanno logica JS. Il pattern del triplet dovrebbe essere opzionale: `.module.js` solo se serve.

---

## DUP-04 — Import pattern inconsistente negli SCSS
- **Impatto:** Basso
- **Posizione:** Tutti i `.module.scss`
- **Osservazione:** La sintassi `@use` ha spaziatura inconsistente:
  - Header: `@use'../../styles/typography.module' as ty;` (senza spazio dopo `@use`)
  - Hero/About/History/Activities/Membership/Where/Footer: `@use'../../../styles/typography.module' as ty;` (senza spazio)
  - Global: `@use'typography.module' as ty;` (senza spazio)
  - Objects: `@use'typography.module' as ty;` (senza spazio, ma con spazio prima di `as`)
  - Typography: `@use 'variables.module' as var;` (con spazio dopo `@use`) ← diverso!
- **Razionale:** Incoerenza stilistica minore ma sistematica. `_typography.module.scss` è l'unico file che mette uno spazio dopo `@use`, tutti gli altri no. Non causa bug ma è un segnale di assenza di formattatore SCSS (es. Stylelint).
- **Direzione proposta:** Uniformare con un formattatore (Prettier/ Stylelint) o manualmente.

---

## DUP-05 — Nomi delle variabili SCSS: mix di `var` e `typography` come namespace alias
- **Impatto:** Basso
- **Posizione:** Tutti i `.module.scss`
- **Osservazione:** I file usano namespace alias diversi per `typography.module`:
  - `Marquee.module.scss:3`: `@use'../../styles/typography.module' as typography;` — alias `typography`
  - Tutti gli altri: `as ty;` — alias `ty`
  - `_objects.module.scss:3`: `@use'typography.module' as ty;` — alias `ty`
- **Razionale:** `Marquee.module.scss` è l'unico file che usa l'alias `typography` invece di `ty`. Questo costringe chi legge a un doppio take mentale. Non causa errori ma è incoerente.
- **Direzione proposta:** Uniformare a `ty` ovunque.
