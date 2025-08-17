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
          <div className={`${styles.LeftSide}`}>
            <h2 className={`${styles.Title}`}>
              { memDB.title }
            </h2>
          </div>
          <div className={`${styles.RightSide}`}>
            <h3 className={`${styles.SubTitle}`}>
              { memDB.subtitle }
            </h3>
            <For each={ memDB.body }>
              {(item, index) =>
                <p className={`${styles.Body}`}>
                  { item }
                </p>
              }
            </For>
            <div className={`${styles.Cta}`}>
              { memDB.cta }
            </div>
          </div>
        </div>
      </div>
		</>
	)
}

export default Membership;
