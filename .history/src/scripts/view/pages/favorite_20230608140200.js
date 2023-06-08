import FavoriteRestaurantDB from '../../data/favoriteResturantDB';
import FavoriteRestaurantSearchView from './templateFavorite/favoritesearch';
import FavoriteRestaurantShowPresenter from './templateFavorite/favoriteshow';
import FavoriteRestaurantSearchPresenter from './templateFavorite/favoritepresenter';

const view = new FavoriteRestaurantSearchView();

const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavoriteRestaurantDB });
    new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurants: FavoriteRestaurantDB });
  },
};

export default Favorite;
