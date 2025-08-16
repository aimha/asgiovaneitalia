import { onMount } from 'solid-js';

// import utility components
import Grid from '../../components/Grid/Grid';

// import page components
import Hero from '../../components/PageComponents/Hero/Hero';
import About from '../../components/PageComponents/About/About';
import History from '../../components/PageComponents/History/History';
import Activities from '../../components/PageComponents/Activities/Activities';
import Membership from '../../components/PageComponents/Membership/Membership';
import Where from '../../components/PageComponents/Where/Where';
import Footer from '../../components/PageComponents/Footer/Footer';

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
    const hp = new HomepageClass();
    hp.init();
  })

  return (
    <>
      {/* UTILITY */}
      {/* <Grid /> */}

      {/* PAGE CONTENT */}
      <Hero db={ state.hero }/>
      <About db={ state.about }/>
      <History db={ state.history }/>
      <Activities />
      <Membership />
      <Where />
      <Footer />
    </>
  );
}

export default App;
