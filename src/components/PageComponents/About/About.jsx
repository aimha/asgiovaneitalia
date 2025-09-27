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
      <div id="about" class={`${styles.Container} section`}>
        <div class={`${styles.Content}`}>
          <h2 class={`${styles.Title}`}>
            { aboutDB.title }
          </h2>
          <div class={`${styles.Paragraph}`}>
            <div>
              <h3 class={`${styles.SubTitle}`}>
                { aboutDB.subtitle }
              </h3>
              <For each={ aboutDB.body }>
                  {(item, index) =>
                  <p innerHTML={ item } class={`${styles.Body}`}>
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
