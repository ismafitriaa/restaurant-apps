import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import AppBar from './view/components/AppBar';
import {renderPosts} from './view/utils/renderUtils'

const datas = jsonData['restaurants'];
const dataPost = renderPosts(datas);
document.querySelector('.posts').innerHTML = dataPost;

const appBar = new AppBar(document.querySelector('#menu'), document.querySelector('.hero'), document.querySelector('main'), document.querySelector('#drawer'));
appBar.init();