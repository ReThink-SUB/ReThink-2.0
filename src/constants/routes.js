import Home from '../pages/home/home';
import About from '../pages/About/about';
import Contact from '../pages/ContactUs/contact';
// import Criteria from '../pages/criteria';
import Promote from '../pages/Promote/promote';

const routes = [
  { path: '/', component: Home, exact: true },
  { path: '/about', component: About },
  // { path: '/criteria', component: Criteria },
  { path: '/promote-your-business', component: Promote },
  { path: '/contact-us', component: Contact },
];

export default routes;
