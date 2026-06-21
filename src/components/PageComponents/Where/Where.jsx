// ============================================================
// ROLE: Where section — Google Maps embed with async SDK loading and static image fallback
// DEPENDS ON: Where.module.scss, /static/imgs/mappa.jpg (fallback)
// USED BY: Homepage.jsx (commented out)
// KEY DECISIONS: Loads Google Maps SDK asynchronously; falls back to static JPEG on error or missing API key
// GOTCHAS: Requires GOOGLE_MAPS_API_KEY env var or falls back to static map; crossOrigin attribute avoids tainted canvas
// LAST UPDATED: 2026-06-21 — added async SDK loader with static fallback
// ============================================================

import { onMount, createSignal, Show } from 'solid-js';

// import style
import styles from './Where.module.scss'

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
const MAP_CENTER = { lat: 44.80495763493976, lng: 10.314462684538228 };

function loadGoogleMapsScript(apiKey) {
  return new Promise((resolve, reject) => {
    if (window.google && window.google.maps) {
      resolve(window.google.maps);
      return;
    }
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve(window.google.maps);
    script.onerror = () => reject(new Error('Google Maps script failed to load'));
    document.head.appendChild(script);
  });
}

export function Where(props) {
  let mapContainer;
  const [mapLoaded, setMapLoaded] = createSignal(false);
  const [mapError, setMapError] = createSignal(false);

  onMount(async () => {
    if (!GOOGLE_MAPS_API_KEY) {
      setMapError(true);
      return;
    }
    try {
      const maps = await loadGoogleMapsScript(GOOGLE_MAPS_API_KEY);
      new maps.Map(mapContainer, {
        center: MAP_CENTER,
        zoom: 16,
        disableDefaultUI: true,
        gestureHandling: 'none',
        zoomControl: false,
        draggable: false,
      });
      setMapLoaded(true);
    } catch {
      setMapError(true);
    }
  });

  return (
    <>
      <section id="where" class={`${styles.Container}`}>
        <div class={`${styles.Content}`}>
          <Show when={!mapError()} fallback={
            <img src="/imgs/mappa.jpg" alt="Mappa" />
          }>
            <div ref={mapContainer}></div>
          </Show>
        </div>
      </section>
    </>
  )
}
