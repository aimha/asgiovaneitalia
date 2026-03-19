// ============================================================
// ROLE: Site footer with address, CF, RUNTS, email and PEC
// DEPENDS ON: FooterClass, Store (footer data)
// USED BY: Homepage
// LAST UPDATED: 2026-03-19 - Removed all comments (bulk cleanup)
// ============================================================
import { onMount } from 'solid-js'

import styles from './Footer.module.scss'

import FooterClass from './Footer.module'

function Footer(props) {
  const footerDB = props.db
  onMount(() => {
    const footerComponent = new FooterClass()
    footerComponent.init()
  })

  return (
    <>
      <footer id="footer" class={`${styles.Container}`}>
        <div class={`${styles.Content}`}>
          <div>
            <p class={`${styles.Title}`}>{footerDB.title}</p>
            <p innerHTML={footerDB.address} class={`${styles.Body}`} />
          </div>
          <div>
            <p class={`${styles.Body}`}>{footerDB.cf}</p>
            <p class={`${styles.Body}`}>{footerDB.runts}</p>
          </div>
          <div>
            <p class={`${styles.Body}`}>{footerDB.email}</p>
            <p class={`${styles.Body}`}>{footerDB.pec}</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
