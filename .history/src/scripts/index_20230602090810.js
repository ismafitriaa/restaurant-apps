import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import AppBar from './view/components/AppBar';
import {renderPosts} from './view/utils/renderUtils'

const loadData = async () => {
    try {
      const response = await fetch('../DATA.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const jsonData = await response.json();
      const datas = jsonData['restaurants'];
      const dataPost = renderPosts(datas);
      document.querySelector('.posts').innerHTML = dataPost;

const appBar = new AppBar(document.querySelector('#menu'), document.querySelector('.hero'), document.querySelector('main'), document.querySelector('#drawer'));
appBar.init();