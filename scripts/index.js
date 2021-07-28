import '../styles/main.css';
import './lib/hmr';
import { component } from 'picoapp';
import snorlax from './lib/snorlax';
import app from './app';

window.app = app;
window.component = component;

snorlax();
app.on('mount', () => snorlax());
