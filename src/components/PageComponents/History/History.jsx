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
      <div id="about" className={`${styles.Container} section`}>
        <div className={`${styles.Content}`}>
          <div>
            <h2>
              { historyDB.title }
            </h2>
            <p>
              { historyDB.body }
            </p>
          </div>
          <div className={`${styles.Dates}`}>
            <h3>BREVE CRONOLOGIA</h3>
            <ul className={`${styles.DatesList}`}>
              <For each={ historyDB.dateList }>
                {(item, index) =>
                  <li className={`${styles.DatesItem}`}>
                    <div>{ item.date }</div>
                    <div>{ item.body }</div>
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
