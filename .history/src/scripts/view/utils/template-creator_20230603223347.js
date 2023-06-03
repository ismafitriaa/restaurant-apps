import CONFIG from "../../global/config";

const createRestaurantItemTemplate = (restaurant) => `
<div class="post-item">
    <img class="lazyload" data-src="${restaurant.pictureId ? CONFIG.SMALL_BASE_IMAGE_URL + restaurant.pictureId : 'images/heros/hero-image_2.jpg'}" alt="${restaurant.name} ">
    <div class="post-city">${restaurant.city}</div>
    <div class="post-item__content">
    <p class="post-item__rating">
        Rating : 
        <a href="#" class="post-item__rating__value">${restaurant.rating}</a>
    </p>
    <h1 class="post-item__title"><a href="#">${restaurant.name}</a></h1>
    <div class="post-item__description">${restaurant.description}</div>
</div>
</div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="detail">
  
    <h1 class="title" id="resto-title">
      ${resto.name}
    </h1>
    <img class="lazyload" data-src="${
      CONFIG.SMALL_BASE_IMAGE_URL + resto.pictureId
    }" alt="${resto.name}" />

    <div class="info">
      <h2>Information</h2>
      <ul>
        <li>
          <h3>Kota</h3>
          <p>${resto.city}</p>
        </li>
        <li>
          <h3>Alamat</h3>
          <p>${resto.address}</p>
        </li>
        <li>
          <h3>Rating</h3>
          <p>${resto.rating}</p>
        </li>
        <li>
          <h3>Foods Menu</h3>
          <span id="food">
          <p>${resto.menus.foods.map((food) => food.name).join(", ")}</p>
          </span>
        </li>
        <li>
          <h3>Drinks Menu</h3>
          <span id="drink">
            <p>${resto.menus.drinks.map((food) => food.name).join(", ")}</p>
          </span>
        </li>
      </ul>
    </div>

    <div class="overview">
      <h2>Overview</h2>
      <p>${resto.description}</p>
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
