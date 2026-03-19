// ============================================================
// ROLE: Image slider with gesture/touch support and navigation controls
// DEPENDS ON: SliderClass
// USED BY: None (placeholder - not rendered anywhere)
// KEY DECISIONS: Module-level slider variable for cleanup access
// LAST UPDATED: 2026-03-19 - Removed all comments (bulk cleanup)
// ============================================================
import { onCleanup, onMount } from 'solid-js'

import styles from './Slider.module.scss'

import SliderClass from './Slider.module'
let slider

function Slider() {
  onMount(() => {
    slider = new SliderClass(
      styles.Slider,
      styles.Card,
      styles.SideNavPrev,
      styles.SideNavNext,
      styles.SideNavStart,
      styles.SideNavEnd
    )
  })

  onCleanup(() => {
    slider.cleanUp()
  })

  return (
    <>
      <div class={`${styles.SliderContainer}`}>
        <ul class={`${styles.Slider}`}>
          <li class={`${styles.Card}`} data-index="0">
            <img src="https://placehold.co/300x480" draggable="false" />
          </li>
          <li class={`${styles.Card}`} data-index="1">
            <img src="https://placehold.co/300x480" draggable="false" />
          </li>
          <li class={`${styles.Card}`} data-index="2">
            <img src="https://placehold.co/300x480" draggable="false" />
          </li>
          <li class={`${styles.Card}`} data-index="3">
            <img src="https://placehold.co/300x480" draggable="false" />
          </li>
          <li class={`${styles.Card}`} data-index="4">
            <img src="https://placehold.co/300x480" draggable="false" />
          </li>
          <li class={`${styles.Card}`} data-index="5">
            <img src="https://placehold.co/300x480" draggable="false" />
          </li>
          <li class={`${styles.Card}`} data-index="6">
            <img src="https://placehold.co/300x480" draggable="false" />
          </li>
          <li class={`${styles.Card}`} data-index="7">
            <img src="https://placehold.co/300x480" draggable="false" />
          </li>
          <li class={`${styles.Card}`} data-index="8">
            <img src="https://placehold.co/300x480" draggable="false" />
          </li>
          <li class={`${styles.Card}`} data-index="9">
            <img src="https://placehold.co/300x480" draggable="false" />
          </li>
        </ul>
      </div>

      <ul class={`${styles.SideNavContainer}`}>
        <li class={`${styles.SideNavStart}`}>Start</li>
        <li class={`${styles.SideNavPrev}`}>Previous</li>
        <li class={`${styles.SideNavNext}`}>Next</li>
        <li class={`${styles.SideNavEnd}`}>End</li>
      </ul>
    </>
  )
}

export default Slider
