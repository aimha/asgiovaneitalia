/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, Route } from "@solidjs/router";

// Routes
import Homepage from "./routes/homepage/Homepage";
import Gallery from "./routes/gallery/Gallery"

const base = import.meta.env.VITE_ROUTER_BASE;
const gallery = import.meta.env.VITE_ROUTER_GALLERY;

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
      <Route path={gallery} component={Gallery} />
    </Router>
  </div>
  , root);

// REMOVE LOADER WHEN READY
const loader = document.getElementById("loader");
if (loader) {
  loader.style.transition = "opacity 0.3s ease";
  loader.style.opacity = "0";
  setTimeout(() => loader.remove(), 1000);
}
