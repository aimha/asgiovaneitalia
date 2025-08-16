import { onMount, splitProps } from 'solid-js';

// import style
import styles from './About.module.scss'

// import logic
import AboutClass from './About.module';

function About(props) {
  const aboutDB = props.db;

	onMount(() => {
    const aboutComponent = new AboutClass();
    aboutComponent.init();
	});

	return (
		<>
      <div id="about" className={`${styles.Container} section`}>
        <div className={`${styles.Content}`}>
          <h2 className={`${styles.Title}`}>
            { aboutDB.title }
          </h2>
          <div className={`${styles.Paragraph}`}>
            <h3>
              { aboutDB.subtitle }
            </h3>
            <For each={ aboutDB.body }>
                {(item, index) =>
                <p innerHTML={ item }>
                </p>
                }
            </For>
          </div>
        </div>
      </div>
		</>
	)
}

export default About;
