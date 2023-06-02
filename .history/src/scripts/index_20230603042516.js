import 'regenerator-runtime'; /* for async await transpile */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import '../styles/main.css';
// import {swRegister} from './helper';
// import {getElement} from './helper';
import '../styles/responsive.css';
import AppBar from './view/AppBar';

import './view/components/app-bar'
import './view/components/app-footer'

const appBar = new AppBar(
    document.querySelector('#menu'),
     document.querySelector('.hero'),
      document.querySelector('main'), document.querySelector('#drawer'));
appBar.init();

window.addEventListener('load', () => {
    appBar.renderContent();
  });
  
  window.addEventListener('hashchange', () => {
    appBar.renderContent();
    swRegister();
  });


