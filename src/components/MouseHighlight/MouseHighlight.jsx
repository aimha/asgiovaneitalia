// ============================================================
// ROLE: Mouse-following highlight effect on Homepage
// DEPENDS ON: MouseHighlightClass
// USED BY: Homepage
// LAST UPDATED: 2026-03-19 - Removed all comments (bulk cleanup)
// ============================================================
import { onMount } from 'solid-js'

import styles from './MouseHighlight.module.scss'

import MouseHighlightClass from './MouseHighlight.module'

function MouseHighlight() {
  onMount(() => {
    const mouse = new MouseHighlightClass(styles.MouseContainer, styles.MouseHighlight)
    mouse.init()
  })

  return (
    <div class={styles.MouseContainer}>
      <div class={styles.MouseHighlight} />
    </div>
  )
}

export default MouseHighlight
