import '../styles/main.css';
import './lib/lazysizes';
import { component } from 'picoapp';
import app from './app';
import { fetchCart } from './lib/cart';

window.app = app;
window.component = component;

Promise.all([fetchCart()]).then(([cart]) => {
  app.hydrate({ cart });
  app.mount();
});
