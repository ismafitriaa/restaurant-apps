import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';

import ('../DATA.json').then(({default: jsonData}) => {
    console.log(jsonData)
    let datas = jsonData['restaurants']
    let dataPost = '';
    datas.forEach(function(data) {
        dataPost +=`
        <div class="post-item">
            <img class="post-item__thumbnail" src="${data['pictureId']}" alt="${data['name']}" title="${data['name']}">
            <div class="post-city">${data['city']}</div>
            <div class="post-item__content">
                <p class="post-item__rating">
                    Rating : 
                    <a href="#" class="post-item__rating__value">${data['rating']}</a>
                </p>
                <h1 class="post-item__title"><a href="#">${data['name']}</a></h1>
                <div class="post-item__description">${data['description'].slice(0, 150)}...</div>
            </div>
        </div>
        `;
    });
    document.querySelector('.posts').innerHTML = dataPost;  
});

// Menu
const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', function (event) {
    drawer.classList.toggle('open');
    event.stopPropagation();
});

hero.addEventListener('click', function () {
    drawer.classList.remove('open');
});

main.addEventListener('click', function () {
    drawer.classList.remove('open');
});