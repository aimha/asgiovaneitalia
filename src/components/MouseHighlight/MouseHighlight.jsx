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

