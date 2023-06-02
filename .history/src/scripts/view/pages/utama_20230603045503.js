import RestaurantSource from '../../data/restaurantSource';
import { createRestoItemTemplate } from '../utils/template-creator';

import '../components/resto-list';

const Explore = {
  async render() {
    return `
      <resto-list></resto-list>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.getResto();
    const restaurantsContainer = document.querySelector('#resto-list');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default Explore;
