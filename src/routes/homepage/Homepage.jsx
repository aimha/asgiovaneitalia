import { onMount } from 'solid-js';

// import components
import Grid from '../../components/Grid/Grid';
import Slider from '../../components/Slider/Slider';

// import style
import styles from './Homepage.module.scss';

// import logic
import HomepageClass from './Homepage.module';

// import state management store
import stateManagement from "../../data/stores/Store";

function App() {
  const { state } = stateManagement;
  
  onMount(() => {
    // initialize homepage logic
    const hp = new HomepageClass(styles.Title, styles.Paragraph);

    hp.init();
  })

  return (
    <>
      {/* UTILITY */}
      <Grid />

      {/* PAGE CONTENT */}
      <div className={`${styles.Container}`}>
        <h1 className={`${styles.Title}`}>
          Hello { state.username } from { state.location }!
        </h1>
        <p className={`${styles.Paragraph}`}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet deleniti perferendis animi deserunt magnam cupiditate nisi ab! Aperiam commodi autem nesciunt odio reiciendis enim impedit pariatur. Enim obcaecati beatae accusamus eum. Nihil excepturi facere accusantium assumenda sapiente minima beatae eius laborum natus dicta? Nulla fuga facere aliquam magni tempora. Ipsum nobis neque vitae repellat, laborum inventore deserunt tempore incidunt omnis? Libero incidunt rem perferendis et deleniti nam exercitationem iusto inventore animi ipsam mollitia expedita, officiis debitis laudantium sunt blanditiis quia?
        </p>

      <Slider />

      </div>
    </>
  );
}

export default App;
