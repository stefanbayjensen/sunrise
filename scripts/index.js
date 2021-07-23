import '../styles/main.css';
import './lib/lazysizes';
import { component } from 'picoapp';
import app from './app';
import { fetchCart } from './lib/cart';

window.app = app;
window.component = component;

const eventSource = new EventSource('/hot-reload');

eventSource.onmessage = () => {
  setTimeout(() => {
    app.mount();
  }, 600);
};

Promise.all([fetchCart()]).then(([cart]) => {
  app.hydrate({ cart });
  app.mount();
});
