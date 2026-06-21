// ============================================================
// ROLE: Activities cards section — sport, culture, music, dining
// DEPENDS ON: Activities.module.scss, ./Activities.module
// USED BY: Homepage.jsx
// KEY DECISIONS: TODO
// GOTCHAS: TODO
// LAST UPDATED: 2026-06-21 — added file header
// ============================================================

import { onMount } from 'solid-js';

// import style
import styles from './Activities.module.scss'

// import logic
import { ActivitiesClass } from './Activities.module';

export function Activities(props) {
  const actDB = props.db;
  let root;

	onMount(() => {
    const activitiesComponent = new ActivitiesClass(root, styles);
    activitiesComponent.init();
	});

	return (
		<>
      <section ref={root} id="activities" class={`${styles.Container} section slide`}>
        <div class={`${styles.Content}`}>
          <h2 class={`${styles.Title}`}>
            { actDB.title }
          </h2>

          <ul class={`${styles.CardList}`}>
            <For each={ actDB.cards }>
              {(item, index) =>

                <li class={`${styles.Card}`}>
                  <div class={`${styles.CardIcon}`}>
                    <img src={ item.img } alt="" />
                  </div>

                  <h3 class={`${styles.CardTitle}`}>
                    { item.title }
                  </h3>
                  <p innerHTML={ item.body } class={`${styles.CardBody}`}>
                  </p>
                </li>

              }
            </For>
          </ul>

        </div>
      </section>
		</>
	)
}

