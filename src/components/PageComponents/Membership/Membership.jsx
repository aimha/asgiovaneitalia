import { onMount } from 'solid-js';

// import style
import styles from './Membership.module.scss'

// import logic
import MembershipClass from './Membership.module';

function Membership(props) {
  const memDB = props.db;
  let root;

	onMount(() => {
    const membershipComponent = new MembershipClass(root, styles);
    membershipComponent.init();
	});

	return (
		<>
      <div ref={root} id="membership" class={`${styles.Container} section slide`}>
        <div class={`${styles.Content}`}>
          <div class={`${styles.LeftSide}`}>
            <h2 class={`${styles.Title}`}>
              { memDB.title }
            </h2>
          </div>
          <div class={`${styles.RightSide}`}>
            <h3 class={`${styles.SubTitle}`}>
              { memDB.subtitle }
            </h3>
            <For each={ memDB.body }>
              {(item, index) =>
                <p class={`${styles.Body}`}>
                  { item }
                </p>
              }
            </For>
            <div class={`${styles.Cta}`}>
              { memDB.cta }
            </div>
          </div>
        </div>
      </div>
		</>
	)
}

export default Membership;
