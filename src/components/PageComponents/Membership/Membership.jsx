// ============================================================
// ROLE: Membership CTA section with external link to tesseramento
// DEPENDS ON: MembershipClass, Store (membership data)
// USED BY: Homepage
// LAST UPDATED: 2026-03-19 - Removed all comments (bulk cleanup)
// ============================================================
import { onMount, For } from 'solid-js'

import styles from './Membership.module.scss'

import MembershipClass from './Membership.module'

function Membership(props) {
  const memDB = props.db
  let root

  onMount(() => {
    const membershipComponent = new MembershipClass(root, styles)
    membershipComponent.init()
  })

  return (
    <>
      <section ref={root} id="membership" class={`${styles.Container} section slide`}>
        <div class={`${styles.Content}`}>
          <div class={`${styles.LeftSide}`}>
            <h2 class={`${styles.Title}`}>{memDB.title}</h2>
          </div>
          <div class={`${styles.RightSide}`}>
            <h3 class={`${styles.SubTitle}`}>{memDB.subtitle}</h3>
            <For each={memDB.body}>{item => <p innerHTML={item} class={`${styles.Body}`} />}</For>
            <a href={memDB.link} target="_blank" rel="nofollow">
              <div class={`${styles.Cta}`}>{memDB.cta}</div>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Membership
