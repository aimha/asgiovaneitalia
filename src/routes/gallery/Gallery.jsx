// ============================================================
// ROLE: Gallery route - displays gallery images from store
// DEPENDS ON: GalleryClass, Store
// USED BY: Router (VITE_ROUTER_GALLERY path)
// LAST UPDATED: 2026-03-19 - Removed all comments (bulk cleanup)
// ============================================================
import { onMount, For } from 'solid-js'

import styles from './Gallery.module.scss'

import GalleryClass from './Gallery.module'

import stateManagement from '../../data/stores/Store'

function Gallery() {
  const { state } = stateManagement
  let root

  onMount(() => {
    const gllry = new GalleryClass(root, styles)
    gllry.init()
  })

  return (
    <>
      <div ref={root}>
        Hello from Gallery Page!
        <section class={`${styles.GalleryContainer} section slide`}>
          <ul class={`${styles.Gallery}`}>
            <For each={state.gallery}>
              {item => (
                <li class={`${styles.GalleryEl}`}>
                  <div class={`${styles.Overlay}`} />
                  <img src={item.thumbnail_url} alt="" />
                  <h3>{item.title}</h3>
                </li>
              )}
            </For>
          </ul>
        </section>
      </div>
    </>
  )
}

export default Gallery
