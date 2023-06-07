import CONFIG from '../../global/config';

const createRestaurantItemTemplate = (restaurant) => `
<div class="post-item">
    <img class="lazyload" data-id="gambar" data-src="${restaurant.pictureId ? CONFIG.SMALL_BASE_IMAGE_URL + restaurant.pictureId : 'images/heros/hero-image_2.jpg'}" alt="${restaurant.name} ">
    <div class="post-city" data-id="post-city">${restaurant.city}</div>
    <div class="post-item__content">
    <p class="post-item__rating">
        Rating : 
        <a href="#" class="post-item__rating__value">${restaurant.rating}</a>
    </p>
    <h1 class="post-item__title" data-id="detail"><a href="./#/detail/${restaurant.id}">${restaurant.name}</a></h1>
    <div class="post-item__description" data-id="description">${restaurant.description}</div>
</div>
</div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  
<div class="detail">
  
    <h1 class="title" id="resto-title">
      ${restaurant.name}
    </h1>
    <img class="lazyload" data-src="${
  CONFIG.SMALL_BASE_IMAGE_URL + restaurant.pictureId
}" alt="${restaurant.name}" />

    <div class="info">
      <h2 class="informasi">Information</h2>
      <ul>
        <li>
          <h3>Kota</h3>
          <p>${restaurant.city}</p>
        </li>
        <li>
          <h3>Alamat</h3>
          <p>${restaurant.address}</p>
        </li>
        <li>
          <h3>Rating</h3>
          <p>${restaurant.rating}</p>
        </li>
        <li>
          <h3>Foods Menu</h3>
          <span id="food">
          <p>${restaurant.menus.foods.map((food) => food.name).join(', ')}</p>
          </span>
        </li>
        <li>
          <h3>Drinks Menu</h3>
          <span id="drink">
            <p>${restaurant.menus.drinks.map((food) => food.name).join(', ')}</p>
          </span>
        </li>
      </ul>
    </div>

    <div class="overview">
      <h2>Overview</h2>
      <p>${restaurant.description}</p>
    </div>

  </div>
`;

const createRestaurantReviewTemplate = (reviews) => `
  <div class="review">
    <p>
    <span class="name">${reviews.name}</span> &bull; <span class="date">${reviews.date}</span>
    </p>
    <p>${reviews.review}</p>
  </div>
`;

const createFavoriteButtonTemplate = () => `
  <button aria-label="favorite this restaurant" id="favoriteButton" class="favorite">
     <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createFavoritedButtonTemplate = () => `
  <button aria-label="unfavorite this restaurant" id="favoriteButton" class="favorite">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createRestaurantReviewTemplate,
  createFavoriteButtonTemplate,
  createFavoritedButtonTemplate,
};
