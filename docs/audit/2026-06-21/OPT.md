# OPT — Ottimizzazioni

## OPT-01 — MouseHighlight: mousemove senza throttling su `document`
- **Impatto:** Medio
- **Posizione:** `src/components/MouseHighlight/MouseHighlight.module.js:13-26`
- **Osservazione:** L'handler `mousemove` è registrato su `document` senza alcun throttling (`requestAnimationFrame` o debounce). Ad ogni pixel di movimento del mouse, il callback:
  1. Legge `document.querySelector('.app-container').scrollTop` (querySelector + lettura layout)
  2. Imposta `this.highLight.style.transform` (forza reflow)
  3. Condizionalmente imposta `this.highLight.style.backgroundColor`
- **Razionale:** Su un display 4K a 60fps, il mouse genera centinaia di eventi al secondo. Senza throttling, il browser esegue querySelector + style mutation ad ogni evento, potenzialmente causando jank. Su dispositivi meno potenti (mobile, anche se nascosto sotto i 1020px), l'impatto è maggiore. Il componente è comunque `display: none` sotto i 1020px, ma l'event listener rimane attivo.
- **Direzione proposta:** Wrappare la logica in `requestAnimationFrame`. Registrare il listener solo quando `window.innerWidth >= 1020`. Bonus: cache-are `document.querySelector('.app-container')` nel costruttore invece di ri-query-are a ogni evento.

---

## OPT-02 — Animazioni via Web Animations API senza `will-change` o `transform: translateZ(0)`
- **Impatto:** Medio
- **Posizione:** `src/js/animation.js:31`, `src/components/Slider/Slider.module.js:130-136`
- **Osservazione:** `element.animate()` viene usato con proprietà `opacity` e `transform`. Non viene impostato `will-change` sugli elementi prima dell'animazione, né viene rimosso dopo. Lo Slider anima `transform: translateX()` su un contenitore con molti elementi figli, potenzialmente causando repaint dell'intera lista di card.
- **Razionale:** Senza `will-change`, il browser non può preparare layer compositing in anticipo. Le animazioni potrebbero causare paint non necessari, specialmente sullo Slider con 10 card immagini.
- **Direzione proposta:** Nella classe `AnimationClass`, aggiungere `will-change` prima di `el.animate()` e rimuoverlo in `onfinish`. Per lo Slider, considerare `contain: layout style paint` sul contenitore.

---

## OPT-03 — Slider: `disableClick` flag gestito con timing arbitrario
- **Impatto:** Basso
- **Posizione:** `src/components/Slider/Slider.module.js:124,184`
- **Osservazione:** Lo Slider usa un flag `this.status.disableClick` per evitare che un click durante il drag apra il popup. Il flag viene resettato a `false` solo nel `callback` di `setPositionByIndex`, che dipende dalla fine dell'animazione (500ms). Se l'animazione viene interrotta (es. l'utente inizia un nuovo drag prima che finisca), il flag potrebbe rimanere `true` bloccando i click futuri.
- **Razionale:** Il reset del flag è accoppiato alla callback di animazione, non allo stato del componente. In scenari di interazione rapida, potrebbe verificarsi uno stato inconsistente. Non appare riproducibile nell'uso normale, ma è fragile per design.
- **Direzione proposta:** Resettare `disableClick` anche all'inizio di un nuovo `movementStart` o usare un approccio basato sulla distanza percorsa (se `Math.abs(movedBy) < threshold`, è un click).

---

## OPT-04 — Header: event listener click globale sempre attivo
- **Impatto:** Basso
- **Posizione:** `src/components/Header/Header.module.js:35`
- **Osservazione:** Il listener `click` è registrato su `document` e rimane attivo per tutta la vita della pagina. Ad ogni click ovunque nella pagina, il callback esegue 3 `classList.contains()` check sequenziali, anche quando il menu non è aperto e il click è su elementi non correlati (es. bottoni CTA, card delle attività).
- **Razionale:** Su una pagina con molti elementi interattivi, ogni click esegue codice non necessario. L'impatto è trascurabile (3 contains su classList sono O(1)), ma è un pattern non ottimale che, se replicato in altri componenti, sommerebbe overhead.
- **Direzione proposta:** Registrare il listener solo quando il menu è aperto, rimuoverlo quando si chiude. Oppure usare delega su un contenitore più specifico (l'overlay stesso).

---

## OPT-05 — `containerScroll` ricalcolato ad ogni mousemove con querySelector
- **Impatto:** Basso
- **Posizione:** `src/components/MouseHighlight/MouseHighlight.module.js:14`
- **Osservazione:** `document.querySelector('.app-container').scrollTop` viene eseguito ad ogni pixel di movimento del mouse. `querySelector` è una operazione di tree-walking, non gratis. Il valore di `.app-container` non cambia mai, quindi potrebbe essere cachato.
- **Razionale:** Anche se `querySelector` su una classe comune è veloce, eseguirlo centinaia di volte al secondo è spreco puro. Una reference cachata nel costruttore eliminerebbe completamente questo overhead.
- **Direzione proposta:** Passare il riferimento all'elemento container nel costruttore (come già fatto per `mousecontainer` e `mousehighlight`) invece di ri-query-are ogni volta.
