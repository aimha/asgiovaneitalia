// ============================================================
// ROLE: Google Maps embed showing location (currently disabled/commented out)
// DEPENDS ON: google.maps API (loaded externally)
// USED BY: Homepage (commented out)
// GOTCHAS: map variable assigned but unused; /* global google */ required for lint
// LAST UPDATED: 2026-03-19 - Removed all comments (bulk cleanup)
// ============================================================
/* global google */
import { onMount } from 'solid-js'

import styles from './Where.module.scss'

function Where() {
  let mapContainer

  onMount(() => {
    const map = new google.maps.Map(mapContainer, {
      center: { lat: 44.80495763493976, lng: 10.314462684538228 },
      zoom: 16,
      disableDefaultUI: true,
      gestureHandling: 'none',
      zoomControl: false,
      draggable: false,
    })
  })

  return (
    <>
      <section id="where" class={`${styles.Container}`}>
        <div class={`${styles.Content}`}>
          <div ref={mapContainer} />
        </div>
      </section>
    </>
  )
}

export default Where
