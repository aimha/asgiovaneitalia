import { onMount } from 'solid-js';

// import style
import styles from './Where.module.scss'

function Where(props) {
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
      <div id="where" class={`${styles.Container}`}>
        <div class={`${styles.Content}`}>
          <div ref={mapContainer}></div>
        </div>
      </div>
		</>
	)
}

export default Where;
