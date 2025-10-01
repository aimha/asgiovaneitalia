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
      <div id="footer" class={`${styles.Container}`}>
        <div class={`${styles.Content}`}>
          <div>
            <p class={`${styles.Title}`}>{ footerDB.title }</p>
            <p innerHTML={footerDB.address} class={`${styles.Body}`}></p>
          </div>
          <div>
            <p class={`${styles.Body}`}>{ footerDB.cf }</p>
            <p class={`${styles.Body}`}>{ footerDB.runts }</p>
          </div>
          <div>
            <p class={`${styles.Body}`}>{ footerDB.email }</p>
            <p class={`${styles.Body}`}>{ footerDB.pec }</p>
          </div>
        </div>
      </div>
		</>
	)
}

export default Footer;
