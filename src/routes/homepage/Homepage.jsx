// ============================================================
// ROLE: Homepage route component — composes all page sections and wires store data
// DEPENDS ON: ../../components/Grid/Grid, ../../components/MouseHighlight/MouseHighlight, ../../components/Header/Header, ../../components/PageComponents/Hero/Hero, ../../components/PageComponents/About/About, ../../components/PageComponents/History/History, ../../components/PageComponents/Activities/Activities, ../../components/PageComponents/Membership/Membership, ../../components/PageComponents/Where/Where, ../../components/PageComponents/Footer/Footer, ./Homepage.module, ../../store/app.store
// USED BY: index.jsx (Router)
// KEY DECISIONS: TODO
// GOTCHAS: TODO
// LAST UPDATED: 2026-06-21 — added file header
// ============================================================

import { onMount } from 'solid-js';

// libraries

import { NativeScroller } from '@smoovy/scroller/native';

// import utility components
import { Grid } from '../../components/Grid/Grid';
import { MouseHighlight } from '../../components/MouseHighlight/MouseHighlight';

// import page components
import { Header } from '../../components/Header/Header';
import { Hero } from '../../components/PageComponents/Hero/Hero';
import { About } from '../../components/PageComponents/About/About';
import { History } from '../../components/PageComponents/History/History';
import { Activities } from '../../components/PageComponents/Activities/Activities';
import { Membership } from '../../components/PageComponents/Membership/Membership';
import { Where } from '../../components/PageComponents/Where/Where';
import { Footer } from '../../components/PageComponents/Footer/Footer';

// import logic
import { HomepageClass } from './Homepage.module';

// import state management store
import { store } from '../../store/app.store';

export function Homepage() {
  const { state } = store;

  onMount(() => {
    // initialize homepage logic
    const hp = new HomepageClass();
    hp.init();
  })

  return (
    <>
      {/* UTILITY */}
      {/* <Grid /> */}
      <MouseHighlight />
      <Header />

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

