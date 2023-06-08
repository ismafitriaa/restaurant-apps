import { itActsAsFavoriteRestaurantModel } from './contact/FavoriteRestaurantContract';
import FavoriteRestaurantDB from '../src/scripts/data/restaurantSource';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantDB.getAllRestaurants()).forEach(async (Restaurant) => {
      await FavoriteRestaurantDB.deleteRestaurant(Restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantDB);
});