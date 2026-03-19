// ============================================================
// ROLE: Hero section with title, claim and CTA button
// DEPENDS ON: HeroClass, Store (hero data)
// USED BY: Homepage
// LAST UPDATED: 2026-03-19 - Removed all comments (bulk cleanup)
// ============================================================
import { onMount } from 'solid-js'

import styles from './Hero.module.scss'

import HeroClass from './Hero.module'

function Hero(props) {
  const heroDB = props.db
  let root

  onMount(() => {
    const heroComponent = new HeroClass(root, styles)

    heroComponent.init()
  })

  return (
    <>
      <main class={`${styles.Outer}`}>
        <div ref={root} id="hero" class={`${styles.Container} slide`}>
          <div class={`${styles.Content}`}>
            <h1 class={`${styles.Title}`}>{heroDB.title}</h1>
            <p class={`${styles.Claim}`}>{heroDB.claim}</p>
            <div class={`${styles.Cta}`}>{heroDB.cta}</div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Hero
