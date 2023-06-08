export default FavoriteRestaurantDB;

import { itActsAsFavoriteRestaurantModel } from './contact/favoriteRestaurantContract';
import FavoriteRestaurantDB from '../src/scripts/data/favoriteRestaurant';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantDB.getAllRestaurants()).forEach(async (restaurant) => {
      await FavoriteRestaurantDB.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantDB);
});