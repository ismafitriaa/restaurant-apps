import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import AppBar from './view/components/AppBar';

const appBar = new AppBar(document.querySelector('#menu'), document.querySelector('.hero'), document.querySelector('main'), document.querySelector('#drawer'));
appBar.init();

window.addEventListener('hashchange', () => {
    app.renderPage();
  });
  
  window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
  });