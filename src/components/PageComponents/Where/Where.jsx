import { onMount } from 'solid-js';

// import style
import styles from './Where.module.scss'

// import logic
import WhereClass from './Where.module';

function Where(props) {
  const whereDB = props.db;

	onMount(() => {
    const whereComponent = new WhereClass();
    whereComponent.init();
	});

	return (
		<>
      <div id="where" class={`${styles.Container} section slide`}>
        <div class={`${styles.Content}`}>
          <div>
            <h2 class={`${styles.Title}`}>
              { whereDB.title }
            </h2>
            <p innerHTML={ whereDB.body } class={`${styles.Body}`}></p>
          </div>
        </div>
      </div>
		</>
	)
}

export default Where;
