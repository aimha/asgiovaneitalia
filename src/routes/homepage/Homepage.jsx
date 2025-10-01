import { onMount } from 'solid-js';

// libraries

import { NativeScroller } from '@smoovy/scroller/native';

// import utility components
import Grid from '../../components/Grid/Grid';
import MouseHighlight from '../../components/MouseHighlight/MouseHighlight';

// import page components
import Hero from '../../components/PageComponents/Hero/Hero';
import About from '../../components/PageComponents/About/About';
import History from '../../components/PageComponents/History/History';
import Activities from '../../components/PageComponents/Activities/Activities';
import Membership from '../../components/PageComponents/Membership/Membership';
import Where from '../../components/PageComponents/Where/Where';
import Footer from '../../components/PageComponents/Footer/Footer';

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
      {/* <MouseHighlight /> */}

      <div>
        {/* PAGE CONTENT */}
        <Hero db={ state.hero }/>
        <About db={ state.about }/>
        <History db={ state.history }/>
        <Activities db={ state.activities }/>
        <Membership db={ state.membership }/>
        {/* <Where db={ state.where }/> */}
        <Footer db={ state.footer }/>
      </div>
    </>
  );
}

export default App;
