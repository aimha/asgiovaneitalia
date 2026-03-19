// ============================================================
// ROLE: Application entry point and router configuration
// DEPENDS ON: solid-js/web, @solidjs/router
// USED BY: Browser (index.html)
// KEY DECISIONS: Routes configured via VITE_ROUTER_BASE and VITE_ROUTER_GALLERY env vars
// LAST UPDATED: 2026-03-19 - Removed all comments (bulk cleanup)
// ============================================================
import { render } from 'solid-js/web'
import { Router, Route } from '@solidjs/router'

import Homepage from './routes/homepage/Homepage'
import Gallery from './routes/gallery/Gallery'

const base = import.meta.env.VITE_ROUTER_BASE
const gallery = import.meta.env.VITE_ROUTER_GALLERY

import './styles/global.scss'

const root = document.getElementById('root')

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?'
  )
}

render(
  () => (
    <div class="app-container">
      <Router>
        <Route path={base} component={Homepage} />
        <Route path={gallery} component={Gallery} />
      </Router>
    </div>
  ),
  root
)

const loader = document.getElementById('loader')
if (loader) {
  loader.style.transition = 'opacity 0.3s ease'
  loader.style.opacity = '0'
  setTimeout(() => loader.remove(), 1000)
}
