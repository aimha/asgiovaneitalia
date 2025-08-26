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
			<div id="hero" className={`${styles.Container}`}>
        <div className={`${styles.Content}`}>
          {/* <div className={`${styles.Logo}`}>
            <img src="./icons/logo_asgiovaneitalia.png" alt="" />
          </div> */}
          <div className={`${styles.Over}`}>
            { heroDB.over }
          </div>
          <h1 className={`${styles.Title}`}>
            { heroDB.title }
          </h1>
          <p className={`${styles.Claim}`}>
            { heroDB.claim }
          </p>
          <div className={`${styles.Cta}`}>
            { heroDB.cta }
          </div>
        </div>
      </div>
		</>
	)
}

export default Hero;
