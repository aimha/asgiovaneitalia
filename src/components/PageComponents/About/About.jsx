import { onMount, splitProps } from 'solid-js';

// import style
import styles from './About.module.scss'

// import logic
import AboutClass from './About.module';

function About(props) {
  const aboutDB = props.db;
  let root;

	onMount(() => {
    const aboutComponent = new AboutClass(root, styles);
    aboutComponent.init();
	});

	return (
		<>
      <div ref={root} id="about" class={`${styles.Container} section slide`}>
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
