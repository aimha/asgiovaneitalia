import { onMount } from 'solid-js';

// import style
import styles from './Activities.module.scss'

// import logic
import ActivitiesClass from './Activities.module';

function Activities(props) {
  const actDB = props.db;

	onMount(() => {
    const activitiesComponent = new ActivitiesClass();
    activitiesComponent.init();
	});

	return (
		<>
      <div id="activities" class={`${styles.Container} section slide`}>
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
                  <p class={`${styles.CardBody}`}>
                    { item.body }
                  </p>
                </li>

              }
            </For>
          </ul>

        </div>
      </div>
		</>
	)
}

export default Activities;
