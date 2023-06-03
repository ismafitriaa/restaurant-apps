import 'regenerator-runtime'; /* for async await transpile */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import '../styles/main.css';
import {swRegister} from './helper';
// import {getElement} from './helper';
import '../styles/responsive.css';
import AppBar from './view/AppBar';

import './view/components/app-bar'
import './view/components/app-footer'

const appBar = new AppBar({
    menu: document.querySelector('#menu'),
    hero: document.querySelector('.hero'),
    main: document.querySelector('main'), 
    drawer: document.querySelector('#drawer'),
    content: document.querySelector('#content')});


window.addEventListener('load', () => {
    appBar.renderContent();
  });
  
  window.addEventListener('hashchange', () => {
    appBar.renderContent();
    swRegister();
  });


