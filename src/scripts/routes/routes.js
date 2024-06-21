import Dashboard from '../views/pages/dashboard';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': Dashboard, // default page
  '/dashboard': Dashboard,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
