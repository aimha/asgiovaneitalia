// ============================================================
// ROLE: Scrolling marquee component — lorem ipsum placeholder
// DEPENDS ON: Marquee.module.scss
// USED BY: Homepage.jsx (currently unused)
// KEY DECISIONS: TODO
// GOTCHAS: TODO
// LAST UPDATED: 2026-06-21 — added file header
// ============================================================

// import style
import styles from './Marquee.module.scss'

export function Marquee() {

  return (
    <>
    <div class={styles.Wrapper}>
      <ul class={styles.Track}>
        <li>
          lorem ipsum
        </li>
        <li>
          dolor sit amet
        </li>
        <li>
        consectetur adipisicing elit
        </li>
        <li>
        Ipsum possimus aspernatur
        </li>
        <li>
        nesciunt pariatur doloribus
        </li>
        <li>
          eligendi numquam corrupti
        </li>
        <li>
          lorem ipsum
        </li>
        <li>
          dolor sit amet
        </li>
        <li>
        consectetur adipisicing elit
        </li>
        <li>
        Ipsum possimus aspernatur
        </li>
        <li>
        nesciunt pariatur doloribus
        </li>
        <li>
          eligendi numquam corrupti
        </li>
      </ul>
    </div>
    </>
  )
}

