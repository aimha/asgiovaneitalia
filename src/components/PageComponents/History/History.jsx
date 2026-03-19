// ============================================================
// ROLE: History section with timeline of key dates
// DEPENDS ON: HistoryClass, Store (history data)
// USED BY: Homepage
// LAST UPDATED: 2026-03-19 - Removed all comments (bulk cleanup)
// ============================================================
import { onMount, For } from 'solid-js'

import styles from './History.module.scss'

import HistoryClass from './History.module'

function History(props) {
  const historyDB = props.db
  let root

  onMount(() => {
    const historyComponent = new HistoryClass(root, styles)
    historyComponent.init()
  })

  return (
    <>
      <section ref={root} id="history" class={`${styles.Container} section slide`}>
        <div class={`${styles.Content}`}>
          <div class={`${styles.Main}`}>
            <h2 class={`${styles.Title}`}>{historyDB.title}</h2>
            <p innerHTML={historyDB.body} class={`${styles.Body}`} />
          </div>
          <div class={`${styles.Dates}`}>
            <h3 class={`${styles.DatesTitle}`}>{historyDB.dateTitle}</h3>
            <ul class={`${styles.DatesList}`}>
              <For each={historyDB.dateList}>
                {item => (
                  <li class={`${styles.DatesItem}`}>
                    <div class={`${styles.DatesDate}`}>{item.date}</div>
                    <div class={`${styles.DatesBody}`}>{item.body}</div>
                  </li>
                )}
              </For>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default History
