/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, Route } from "@solidjs/router";

// Routes
import Homepage from "./routes/homepage/Homepage";

const base = import.meta.env.VITE_ROUTER_BASE;

// Styles
import './styles/global.scss';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => 
  <div class="app-container">
    <Router>
      <Route path={base} component={Homepage} />
    </Router>
  </div>
  , root);

// quando Solid ha montato, togli il loader
const loader = document.getElementById("loader");
if (loader) {
  // fade-out per non sembrare un’abrasione chirurgica
  loader.style.transition = "opacity 0.3s ease";
  loader.style.opacity = "0";
  setTimeout(() => loader.remove(), 100000);
}
