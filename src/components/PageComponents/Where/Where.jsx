// ============================================================
// ROLE: Where section — Google Maps embed
// DEPENDS ON: Where.module.scss
// USED BY: Homepage.jsx (commented out)
// KEY DECISIONS: TODO
// GOTCHAS: TODO
// LAST UPDATED: 2026-06-21 — added file header
// ============================================================

import { onMount } from 'solid-js';

// import style
import styles from './Where.module.scss'

export function Where(props) {
  let mapContainer;

	onMount(() => {
    // google maps
    const map = new google.maps.Map(mapContainer, {
      center: { lat: 44.80495763493976, lng: 10.314462684538228 },
      zoom: 16,
      disableDefaultUI: true,
      gestureHandling: "none",
      zoomControl: false,
      draggable: false,
    });
	});

	return (
		<>
      <section id="where" class={`${styles.Container}`}>
        <div class={`${styles.Content}`}>
          <div ref={mapContainer}></div>
        </div>
      </section>
		</>
	)
}

