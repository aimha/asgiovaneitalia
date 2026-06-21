// ============================================================
// ROLE: Footer section — address, tax info, contact
// DEPENDS ON: Footer.module.scss
// USED BY: Homepage.jsx
// KEY DECISIONS: TODO
// GOTCHAS: TODO
// LAST UPDATED: 2026-06-21 — added file header
// ============================================================

// import style
import styles from './Footer.module.scss'

export function Footer(props) {
  const footerDB = props.db;

	return (
		<>
      <footer id="footer" class={`${styles.Container}`}>
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
      </footer>
		</>
	)
}

