import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import AppBar from './view/components/AppBar';

window.addEventListener('load', () => {
    app.renderContent();
    swRegister();
  });
  
  window.addEventListener('hashchange', () => {
    app.renderContent();
  });
  
const appBar = new AppBar(document.querySelector('#menu'), document.querySelector('.hero'), document.querySelector('main'), document.querySelector('#drawer'));
appBar.init();
