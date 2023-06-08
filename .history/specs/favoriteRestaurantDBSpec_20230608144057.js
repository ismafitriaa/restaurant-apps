import { itActsAsFavoriteRestaurantModel } from './contact/FavoriteRestaurantContract';
import FavoriteRestaurantDB from '../src/scripts/data/favoriteresturant-db';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantDB.getAllRestaurants()).forEach(async (restaurant) => {
      await FavoriteRestaurantDB.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantDB);
});