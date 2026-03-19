// ============================================================
// ROLE: Homepage route - main landing page with all sections
// DEPENDS ON: All PageComponents, HomepageClass, Store
// USED BY: Router (VITE_ROUTER_BASE path)
// KEY DECISIONS: Sections rendered in fixed order; Where and Grid commented out
// LAST UPDATED: 2026-03-19 - Removed all comments and unused imports
// ============================================================
import { onMount } from 'solid-js'

import MouseHighlight from '../../components/MouseHighlight/MouseHighlight'

import Header from '../../components/Header/Header'
import Hero from '../../components/PageComponents/Hero/Hero'
import About from '../../components/PageComponents/About/About'
import History from '../../components/PageComponents/History/History'
import Activities from '../../components/PageComponents/Activities/Activities'
import Membership from '../../components/PageComponents/Membership/Membership'
import Footer from '../../components/PageComponents/Footer/Footer'

import HomepageClass from './Homepage.module'

import stateManagement from '../../data/stores/Store'

function App() {
  const { state } = stateManagement

  onMount(() => {
    const hp = new HomepageClass()
    hp.init()
  })

  return (
    <>
      <MouseHighlight />
      <Header />

      <div>
        <Hero db={state.hero} />
        <About db={state.about} />
        <History db={state.history} />
        <Activities db={state.activities} />
        <Membership db={state.membership} />
        <Footer db={state.footer} />
      </div>
    </>
  )
}

export default App
