import { itActsAsFavoriteRestaurantModel } from './contact/FavoriteRestaurantContract';
import FavoriteRestaurantIdb from '../src/scripts/data/favoriteresturant-db';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantIdb.getAllRestaurants()).forEach(async (restaurant) => {
      await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantIdb);
});
