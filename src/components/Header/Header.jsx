import { onMount } from 'solid-js';

// import style
import styles from './Header.module.scss'

// import logic
import HeaderClass from './Header.module';

function Header() {
  let root;

	onMount(() => {
		// initialize grid logic
		const hc = new HeaderClass(root, styles);
		hc.init();
	});

	return (
		<>
			<header ref={root} id="header" class={`${styles.Header}`}>
				<div class={`${styles.Toggle}`}>
					<img src="./icons/menu-burger.svg" alt="" class={`${styles.ToggleIcon}`}/>
				</div>
			</header>

			<Portal>
        <div class={`${styles.MenuOverlay} ${styles.MenuOverlay__hidden}`}>
					<div class={`${styles.MenuClose}`}>
						<img src="./icons/close-circle.svg" alt="" class={`${styles.MenuCloseIcon}`}/>
					</div>
					<ul class={`${styles.MenuList}`}>
        		<li class={`${styles.MenuEl}`} data-target="about">
							Chi Siamo
						</li>
						<li class={`${styles.MenuEl}`} data-target="history">
							La Nostra Storia
						</li>
						<li class={`${styles.MenuEl}`} data-target="activities">
							La Nostre Attività
						</li>
						<li class={`${styles.MenuEl}`} data-target="membership">
							Tesseramento
						</li>
					</ul>
        </div>
      </Portal>
		</>
	)
}

export default Header;
