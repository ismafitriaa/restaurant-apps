import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurantSource';
import { createRestoDetailTemplate, createRestoReviewTemplate } from '../utils/template-creator';
import FavoriteButtonInitiator from '../../utils/favorite-btn-initiator';
import FavoriteRestaurantDB from '../../data/favoriteResturant';

import '../components/resto-detail';
import '../components/resto-review';

const Detail = {
  async render() {
    return `
      <resto-detail></resto-detail>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detail = await RestaurantSource.detailResto(url.id);
    const restoContainer = document.querySelector('#resto-detail');
    restoContainer.innerHTML = createRestaurantDetailTemplate(detail);

    restoContainer.innerHTML += `
      <resto-review></resto-review>
    `;

    const restoReview = document.querySelector('#resto-review');
    detail.customerReviews.forEach((review) => {
      restoReview.innerHTML += createRestaurantReviewTemplate(review);
    });

    FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantDB,
      restaurant: {
        id: detail.id,
        name: detail.name,
        city: detail.city,
        description: detail.description,
        pictureId: detail.pictureId,
        rating: detail.rating,
      },
    });
  },

};

export default Detail;