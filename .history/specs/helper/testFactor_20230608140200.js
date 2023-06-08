import FavoriteButtonInitiator from '../../src/scripts/view/utils/settings/favorite-btnInitiator';
import FavoriteRestaurantDB from '../../src/scripts/data/favoriteResturantDB';

const createFavoriteButtonPresenterWithRestaurant = async (restaurant) => {
  await FavoriteButtonInitiator.init({
    favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
    favoriteRestaurants: FavoriteRestaurantDB,
    restaurant,
  });
};

export { createFavoriteButtonPresenterWithRestaurant };