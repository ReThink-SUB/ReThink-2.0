import Home from '../pages/home';
import About from '../pages/About/about';
import Contact from '../pages/ContactUs/contact';
import Criteria from '../pages/criteria';
import Promote from '../pages/promote';

const routes = [
  { path: '/', component: Home, exact: true },
  { path: '/about', component: About },
  { path: '/criteria', component: Criteria },
  { path: '/promote-your-business', component: Promote },
  { path: '/contact-us', component: Contact },
];

export default routes;
