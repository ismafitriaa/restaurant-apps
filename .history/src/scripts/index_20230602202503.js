import 'regenerator-runtime'; /* for async await transpile */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import '../styles/main.css';
import {swRegister} from './helper';
import {getElement} from './helper';
import '../styles/responsive.css';
import AppBar from './view/components/AppBar';

window.addEventListener('load', () => {
    app.renderContent();
    swRegister();
  });
  
  window.addEventListener('hashchange', () => {
    app.renderContent();
  });

const appBar = new AppBar(
    document.querySelector('#menu'),
     document.querySelector('.hero'),
      document.querySelector('main'), document.querySelector('#drawer'));
appBar.init();
