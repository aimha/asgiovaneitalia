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
            <div>
              <h3 className={`${styles.SubTitle}`}>
                { aboutDB.subtitle }
              </h3>
              <For each={ aboutDB.body }>
                  {(item, index) =>
                  <p innerHTML={ item } className={`${styles.Body}`}>
                  </p>
                  }
              </For>
            </div>
          </div>
        </div>
      </div>
		</>
	)
}

export default About;
