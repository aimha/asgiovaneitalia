import { onMount } from 'solid-js';

// import style
import styles from './Hero.module.scss'

// import logic
import HeroClass from './Hero.module';

function Hero() {

	onMount(() => {
		// initialize hero logic
		const heroComponent = new HeroClass();

		heroComponent.init();
	});

	return (
		<>
			<div id="hero" className={`${styles.Container}`}>
        <div className={`${styles.Content}`}>
          <span>Associazione Sportiva</span>
          <h1>Giovane Italia</h1>
          <p>Sport, Musica e Cultura a Parma. Dal 1927.</p>
        </div>
        <div className={`${styles.Cta}`}>
          Esplora
        </div>
      </div>
		</>
	)
}

export default Hero;
