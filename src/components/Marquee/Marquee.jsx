// ============================================================
// ROLE: Scrolling text marquee (placeholder content)
// DEPENDS ON: MarqueeClass
// USED BY: None (not rendered anywhere)
// LAST UPDATED: 2026-03-19 - Removed all comments (bulk cleanup)
// ============================================================
import { onMount } from 'solid-js'

import styles from './Marquee.module.scss'

import MarqueeClass from './Marquee.module'

function Marquee() {
  onMount(() => {
    const marquee = new MarqueeClass()
    marquee.init()
  })

  return (
    <>
      <div class={styles.Wrapper}>
        <ul class={styles.Track}>
          <li>lorem ipsum</li>
          <li>dolor sit amet</li>
          <li>consectetur adipisicing elit</li>
          <li>Ipsum possimus aspernatur</li>
          <li>nesciunt pariatur doloribus</li>
          <li>eligendi numquam corrupti</li>
          <li>lorem ipsum</li>
          <li>dolor sit amet</li>
          <li>consectetur adipisicing elit</li>
          <li>Ipsum possimus aspernatur</li>
          <li>nesciunt pariatur doloribus</li>
          <li>eligendi numquam corrupti</li>
        </ul>
      </div>
    </>
  )
}

export default Marquee
