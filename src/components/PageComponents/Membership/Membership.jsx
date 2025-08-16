import { onMount } from 'solid-js';

// import style
import styles from './Membership.module.scss'

// import logic
import MembershipClass from './Membership.module';

function Membership() {

	onMount(() => {
    const membershipComponent = new MembershipClass();
    membershipComponent.init();
	});

	return (
		<>
      <div>Membership Section</div>
		</>
	)
}

export default Membership;
