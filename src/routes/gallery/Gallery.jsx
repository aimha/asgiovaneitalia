import { onMount } from 'solid-js';

// import style
import styles from './Gallery.module.scss'

// import logic
import GalleryClass from './Gallery.module';

// import state management store
import stateManagement from "../../data/stores/Store";

function Gallery() {
  const { state } = stateManagement;

  onMount(() => {
    // initialize gallery logic
    const gllry = new GalleryClass();
    gllry.init();
  });

  return (
	<>
    <div>
      Hello from Gallery Page!
    </div>
    </>
  )
}

export default Gallery;
