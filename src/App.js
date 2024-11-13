import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header.js';
import ContactUsPage from './pages/contact.js'
import CriteriaPage from './pages/criteria';
import PromotePage from './pages/promote';
import HomePage from './pages/home';
import AboutPage from './pages/About/about';

function App() {
  return (
    <Router>
      <Header/>
        <Routes>
          <Route path={'/'} element={<HomePage/>}/>
          <Route path={'/about'} element={<AboutPage/>}/>
          <Route path={'/criteria'} element={<CriteriaPage/>}/>
          <Route path={'/promote-your-business'} element={<PromotePage/>}/>
          <Route path={'/contact-us'} element={<ContactUsPage/>}/>
        </Routes>
    </Router>
  );
}

export default App;
