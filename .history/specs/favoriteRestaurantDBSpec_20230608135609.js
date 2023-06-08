// favoriteRestaurantDBSpec.js
import { itActsAsFavoriteRestaurantModel } from './contact/FavoriteRestaurantContract';
import FavoriteRestaurantDB from '../src/scripts/data/favoriteRestaurant'; // adjust this path to the correct location of your favoriteRestaurant.js file

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantDB.getAllRestaurants()).forEach(async (Restaurant) => {
      await FavoriteRestaurantDB.deleteRestaurant(Restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantDB);
});
