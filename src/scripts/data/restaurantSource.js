import API_ENDPOINT from '../global/api-endpoint';

class RestaurantSource {
  static async getResto() {
    const response = await fetch(API_ENDPOINT.RESTAURANT);
    const responseJson = await response.json();

    return responseJson.restaurants;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.RESTAURANT_DETAIL(id));
    const responseJson = await response.json();

    return responseJson.restaurant;
  }
}

export default RestaurantSource;
