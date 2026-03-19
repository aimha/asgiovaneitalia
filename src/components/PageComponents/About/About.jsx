// ============================================================
// ROLE: About section with subtitle and body paragraphs
// DEPENDS ON: AboutClass, Store (about data)
// USED BY: Homepage
// LAST UPDATED: 2026-03-19 - Removed all comments (bulk cleanup)
// ============================================================
import { onMount, For } from 'solid-js'

import styles from './About.module.scss'

import AboutClass from './About.module'

function About(props) {
  const aboutDB = props.db
  let root

  onMount(() => {
    const aboutComponent = new AboutClass(root, styles)
    aboutComponent.init()
  })

  return (
    <>
      <section ref={root} id="about" class={`${styles.Container} section slide`}>
        <div class={`${styles.Content}`}>
          <h2 class={`${styles.Title}`}>{aboutDB.title}</h2>
          <div class={`${styles.Paragraph}`}>
            <div>
              <h3 class={`${styles.SubTitle}`}>{aboutDB.subtitle}</h3>
              <For each={aboutDB.body}>
                {item => <p innerHTML={item} class={`${styles.Body}`} />}
              </For>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
