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
      <div id="history" className={`${styles.Container} section`}>
        <div className={`${styles.Content}`}>
          <div className={`${styles.Main}`}>
            <h2 className={`${styles.Title}`}>
              { historyDB.title }
            </h2>
            <p className={`${styles.Body}`}>
              { historyDB.body }
            </p>
          </div>
          <div className={`${styles.Dates}`}>
            <h3 className={`${styles.DatesTitle}`}>
              { historyDB.dateTitle }
            </h3>
            <ul className={`${styles.DatesList}`}>
              <For each={ historyDB.dateList }>
                {(item, index) =>
                  <li className={`${styles.DatesItem}`}>
                    <div className={`${styles.DatesDate}`}>
                      { item.date }
                    </div>
                    <div className={`${styles.DatesBody}`}>
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
