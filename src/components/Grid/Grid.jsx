// ============================================================
// ROLE: Debug grid overlay component — toggle with "g" key
// DEPENDS ON: Grid.module.scss, ./Grid.module
// USED BY: Homepage.jsx (commented out)
// KEY DECISIONS: TODO
// GOTCHAS: TODO
// LAST UPDATED: 2026-06-21 — added file header
// ============================================================

import { onMount } from 'solid-js';

// import style
import styles from './Grid.module.scss'

// import logic
import { GridClass } from './Grid.module';

export function Grid() {

  onMount(() => {
    // initialize grid logic
    const grd = new GridClass();
    grd.init();
  });

  return (
    <div id='grid' class='hidden'>
      <div class={ styles.TypoGridY }></div>
      <div class={ styles.TypoGridX }></div>
    </div>
  )
}

