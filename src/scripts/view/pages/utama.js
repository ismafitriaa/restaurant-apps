import RestaurantSource from '../../data/restaurantSource';
import { createRestaurantItemTemplate } from '../utils/template-creator';

import '../components/resto-list';

const Utama = {
  async render() {
    return `
      <resto-list></resto-list>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.getResto();
    const restaurantsContainer = document.querySelector('#resto-list');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Utama;
