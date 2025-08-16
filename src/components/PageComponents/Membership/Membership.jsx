import { onMount } from 'solid-js';

// import style
import styles from './Membership.module.scss'

// import logic
import MembershipClass from './Membership.module';

function Membership(props) {
  const memDB = props.db;

	onMount(() => {
    const membershipComponent = new MembershipClass();
    membershipComponent.init();
	});

	return (
		<>
      <div id="membership" className={`${styles.Container} section`}>
        <div className={`${styles.Content}`}>
          <div>
            <h2>{ memDB.title }</h2>
          </div>
          <div>
            <h3>{ memDB.subtitle }</h3>
            <For each={ memDB.body }>
              {(item, index) =>
                <p>{ item }</p>
              }
            </For>
            <div>{ memDB.cta }</div>
          </div>
        </div>
      </div>
		</>
	)
}

export default Membership;
