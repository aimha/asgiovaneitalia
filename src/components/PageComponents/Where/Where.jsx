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
      <div id="where" className={`${styles.Container} section`}>
        <div className={`${styles.Content}`}>
          <div>
            <h2 className={`${styles.Title}`}>
              { whereDB.title }
            </h2>
            <p innerHTML={ whereDB.body } className={`${styles.Body}`}></p>
          </div>
        </div>
      </div>
		</>
	)
}

export default Where;
