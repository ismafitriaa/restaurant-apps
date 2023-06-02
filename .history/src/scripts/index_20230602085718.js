import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import AppBar from './view/components/AppBar';
import { loadData } from './view/utils/loadData';


const renderPostItems = (datas) => {
    let dataPost = '';
    datas.forEach(function (data) {
      dataPost += `
        <div class="post-item">
            <img class="post-item__thumbnail" src="${data.pictureId}" alt="${data.name}" title="${data.name}">
            <div class="post-city">${data.city}</div>
            <div class="post-item__content">
                <p class="post-item__rating">
                    Rating : 
                    <a href="#" class="post-item__rating__value">${data.rating}</a>
                </p>
                <h1 class="post-item__title"><a href="#">${data.name}</a></h1>
                <div class="post-item__description">${data.description.slice(0, 150)}...</div>
            </div>
        </div>
      `;
    });
    document.querySelector('.posts').innerHTML = dataPost;
  };

  loadData('../DATA.json')
  .then((jsonData) => {
    const datas = jsonData.restaurants;
    renderPostItems(datas);
  })
  .catch((error) => {
    console.error('Error loading data:', error);
  });


const appBar = new AppBar(
  document.querySelector('#menu'),
  document.querySelector('.hero'),
  document.querySelector('main'),
  document.querySelector('#drawer')
);
appBar.init();