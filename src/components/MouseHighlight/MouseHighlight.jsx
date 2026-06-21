// ============================================================
// ROLE: Mouse cursor highlight/glow effect component
// DEPENDS ON: MouseHighlight.module.scss, ./MouseHighlight.module
// USED BY: Homepage.jsx
// KEY DECISIONS: TODO
// GOTCHAS: TODO
// LAST UPDATED: 2026-06-21 — added file header
// ============================================================

import { onMount } from 'solid-js';

// import style
import styles from './MouseHighlight.module.scss'

// import logic
import { MouseHighlightClass } from './MouseHighlight.module';

export function MouseHighlight() {

  onMount(() => {
    // initialize grid logic
    const mouse = new MouseHighlightClass(styles.MouseContainer, styles.MouseHighlight);
    mouse.init();
  });

  return (
    <div class={styles.MouseContainer}>
      <div class={styles.MouseHighlight}></div>
    </div>
  )
}

