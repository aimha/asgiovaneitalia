import { onMount } from 'solid-js';

// import style
import styles from './Footer.module.scss'

// import logic
import FooterClass from './Footer.module';

function Footer(props) {
  const footerDB = props.db;
	onMount(() => {
    const footerComponent = new FooterClass();
    footerComponent.init();
	});

	return (
		<>
      <div id="footer" class={`${styles.Container} section`}>
        <div class={`${styles.Content}`}>
          <h2>{ footerDB.title }</h2>
        </div>
      </div>
		</>
	)
}

export default Footer;
