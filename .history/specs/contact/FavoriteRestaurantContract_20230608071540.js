const itActsAsFavoriteRestaurantModel = (favoriteRestaurants) => {
    const addRestaurants = async (restaurants) => {
      for (let restaurant of restaurants) {
        await favoriteRestaurants.putRestaurant(restaurant);
      }
    };
  
    const testRestaurantEquality = async (id, expected) => {
      expect(await favoriteRestaurants.getRestaurant(id))
        .toEqual(expected);
    };
  
    const testAllRestaurantsEquality = async (expected) => {
      expect(await favoriteRestaurants.getAllRestaurants())
        .toEqual(expected);
    };
  
    it('should return the Restaurant that has been added', async () => {
      await addRestaurants([{ id: 1 }, { id: 2 }]);
  
      await testRestaurantEquality(1, { id: 1 });
      await testRestaurantEquality(2, { id: 2 });
      await testRestaurantEquality(3, undefined);
    });
  
    
  };
  
  export { itActsAsFavoriteRestaurantModel };