import { onMount } from 'solid-js';

// import style
import styles from './Where.module.scss'

// import logic
import WhereClass from './Where.module';

function Where() {

	onMount(() => {
    const whereComponent = new WhereClass();
    whereComponent.init();
	});

	return (
		<>
      <div>Where Section</div>
		</>
	)
}

export default Where;
