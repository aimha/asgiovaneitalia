import { onMount } from 'solid-js';

// import style
import styles from './Gallery.module.scss'

// import logic
import GalleryClass from './Gallery.module';

// import state management store
import stateManagement from "../../data/stores/Store";

function Gallery() {
  const { state } = stateManagement;
  let root;

  onMount(() => {
    // initialize gallery logic
    const gllry = new GalleryClass(root, styles);
    gllry.init();
  });

  return (
    <>
      <div ref={root}>
        Hello from Gallery Page!
        <section class={`${styles.GalleryContainer} section slide`}>
          <ul class={`${styles.Gallery}`}>
            <For each={state.gallery}>
              {(item, index) =>
                <li class={`${styles.GalleryEl}`}>
                  <div class={`${styles.Overlay}`}></div>
                  <img src={item.thumbnail_url} alt="" />
                  <h3>{item.title}</h3>
                </li>
              }
            </For>
          </ul>
        </section>
      </div>
    </>
  )
}

export default Gallery;
