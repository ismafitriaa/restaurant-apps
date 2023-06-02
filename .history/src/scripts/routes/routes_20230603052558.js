import Utama from '../view/pages/utama';
import Favorite from '../view/pages/favorite';
// import Detail from '../view/pages/detail';

const routes = {
  '/': Utama,
  '/utama': Utama,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
