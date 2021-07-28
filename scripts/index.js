import '../styles/main.css';
import './lib/hmr';
import { component } from 'picoapp';
import { bind } from './lib/lazim';
import app from './app';

window.app = app;
window.component = component;

bind();
app.on('mount', () => bind());
