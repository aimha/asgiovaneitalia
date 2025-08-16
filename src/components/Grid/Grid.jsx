import { onMount } from 'solid-js';

// import style
import styles from './Grid.module.scss'

// import logic
import GridClass from './Grid.module';

function Grid() {

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

export default Grid;
