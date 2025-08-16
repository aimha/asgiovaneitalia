import { onMount } from 'solid-js';

// import style
import styles from './History.module.scss'

// import logic
import HistoryClass from './History.module';

function History() {

	onMount(() => {
    const historyComponent = new HistoryClass();
    historyComponent.init();
	});

	return (
		<>
      <div>History Section</div>
		</>
	)
}

export default History;
