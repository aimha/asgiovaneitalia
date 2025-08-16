import { onMount } from 'solid-js';

// import style
import styles from './Hero.module.scss'

// import logic
import HeroClass from './Hero.module';

function Hero(props) {
  const heroDB = props.db;

	onMount(() => {
		// initialize hero logic
		const heroComponent = new HeroClass();

		heroComponent.init();
	});

	return (
		<>
			<div id="hero" className={`${styles.Container} section`}>
        <div className={`${styles.Content}`}>
          <div>{ heroDB.over }</div>
          <h1>{ heroDB.title }</h1>
          <p>{ heroDB.claim }</p>
        </div>
        <div className={`${styles.Cta}`}>
          { heroDB.cta }
        </div>
      </div>
		</>
	)
}

export default Hero;
