// ============================================================
// ROLE: Typographic grid overlay (currently disabled in Homepage)
// DEPENDS ON: GridClass
// USED BY: Homepage (commented out)
// LAST UPDATED: 2026-03-19 - Removed all comments (bulk cleanup)
// ============================================================
import { onMount } from 'solid-js'

import styles from './Grid.module.scss'

import GridClass from './Grid.module'

function Grid() {
  onMount(() => {
    const grd = new GridClass()
    grd.init()
  })

  return (
    <div id="grid" class="hidden">
      <div class={styles.TypoGridY} />
      <div class={styles.TypoGridX} />
    </div>
  )
}

export default Grid
