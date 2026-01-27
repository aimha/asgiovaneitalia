import { onMount, createSignal } from 'solid-js';

// import style
import styles from './Gallery.module.scss'

// import page components
import Footer from '../../components/PageComponents/Footer/Footer';

// import logic
import GalleryClass from './Gallery.module';

// import state management store
import stateManagement from "../../data/stores/Store";

function Gallery() {
  const { state } = stateManagement;
  let root;
  const [activeIndex, setActiveIndex] = createSignal(0);

  onMount(() => {
    // initialize gallery logic
    const gllry = new GalleryClass(root, styles, setActiveIndex);
    gllry.init();
  });

  return (
    <>
      <div ref={root}>
        <section class={`${styles.GalleryContainer} section slide`}>
          <ul class={`${styles.Gallery}`}>
            <For each={state.gallery}>
              {(item, index) =>
                <li class={`${styles.GalleryEl}`} data-index={index()}>
                  <div class={`${styles.Overlay}`}></div>
                  <img src={item.thumbnail_url} alt="" />
                  <h3>{item.title}</h3>
                </li>
              }
            </For>
          </ul>
        </section>
      </div>

      <Footer db={ state.footer }/>
      
      <Portal>
        <div class={`${styles.Modal} ${styles.Modal__Hidden}`}>
          <div class={`${styles.ModalImageContainer}`}>
            <img src={state.gallery[activeIndex()].url} alt="" />
          </div>
        </div>
      </Portal>
    </>
  )
}

export default Gallery;
