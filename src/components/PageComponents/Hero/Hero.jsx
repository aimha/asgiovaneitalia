import { onMount } from 'solid-js';

// import style
import styles from './Hero.module.scss'

// import logic
import HeroClass from './Hero.module';

function Hero(props) {
  const heroDB = props.db;
  let root;

	onMount(() => {
		// initialize hero logic
		const heroComponent = new HeroClass(root, styles);

		heroComponent.init();
	});

	return (
		<>
			<div ref={root} id="hero" class={`${styles.Container} slide`}>
        <div class={`${styles.Content}`}>
          <h1 class={`${styles.Title}`}>
            { heroDB.title }
          </h1>
          <p class={`${styles.Claim}`}>
            { heroDB.claim }
          </p>
          <div class={`${styles.Cta}`}>
            { heroDB.cta }
          </div>
        </div>
      </div>
		</>
	)
}

export default Hero;
