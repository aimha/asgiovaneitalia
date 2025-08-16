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
      <div id="activities" className={`${styles.Container} section`}>
        <div className={`${styles.Content}`}>
          <h2>{ actDB.title }</h2>
          <ul className={`${styles.CardList}`}>
            <For each={ actDB.cards }>
              {(item, index) =>
                <li className={`${styles.Card}`}>
                  <h3>{ item.title }</h3>
                  <p>{ item.body }</p>
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
