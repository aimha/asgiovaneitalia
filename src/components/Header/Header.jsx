import { onMount } from 'solid-js';

// import style
import styles from './Header.module.scss'

// import logic
import HeaderClass from './Header.module';

function Header() {

	onMount(() => {
		// initialize grid logic
		const hc = new HeaderClass(root, styles);
		hc.init();
	});

	return (
		<>
			<header ref={root} id="header" class={`${styles.Header}`}>
				<div class={`${styles.Toggle}`}>
					MENU
				</div>
			</header>
		</>
	)
}

export default Header;
