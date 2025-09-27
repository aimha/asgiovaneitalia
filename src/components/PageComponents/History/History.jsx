import { onMount } from 'solid-js';

// import style
import styles from './History.module.scss'

// import logic
import HistoryClass from './History.module';

function History(props) {
  const historyDB = props.db;

	onMount(() => {
    const historyComponent = new HistoryClass();
    historyComponent.init();
	});

	return (
		<>
      <div id="history" class={`${styles.Container} section slide`}>
        <div class={`${styles.Content}`}>
          <div class={`${styles.Main}`}>
            <h2 class={`${styles.Title}`}>
              { historyDB.title }
            </h2>
            <p class={`${styles.Body}`}>
              { historyDB.body }
            </p>
          </div>
          <div class={`${styles.Dates}`}>
            <h3 class={`${styles.DatesTitle}`}>
              { historyDB.dateTitle }
            </h3>
            <ul class={`${styles.DatesList}`}>
              <For each={ historyDB.dateList }>
                {(item, index) =>
                  <li class={`${styles.DatesItem}`}>
                    <div class={`${styles.DatesDate}`}>
                      { item.date }
                    </div>
                    <div class={`${styles.DatesBody}`}>
                      { item.body }
                    </div>
                  </li>
                }
              </For>  
            </ul>
          </div>
        </div>
      </div>
		</>
	)
}

export default History;
