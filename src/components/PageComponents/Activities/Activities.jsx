import { onMount } from 'solid-js';

// import style
import styles from './Activities.module.scss'

// import logic
import ActivitiesClass from './Activities.module';

function Activities() {

	onMount(() => {
    const activitiesComponent = new ActivitiesClass();
    activitiesComponent.init();
	});

	return (
		<>
      <div>Activities Section</div>
		</>
	)
}

export default Activities;
