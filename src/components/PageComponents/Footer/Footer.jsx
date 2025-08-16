import { onMount } from 'solid-js';

// import style
import styles from './Footer.module.scss'

// import logic
import FooterClass from './Footer.module';

function Footer() {

	onMount(() => {
    const footerComponent = new FooterClass();
    footerComponent.init();
	});

	return (
		<>
      <div>Footer section</div>
		</>
	)
}

export default Footer;
