import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header.js';
import ContactUsPage from './pages/ContactUs/contact.js'
// import CriteriaPage from './pages/criteria';
import PromotePage from './pages/Promote/promote';
import HomePage from './pages/home';
import AboutPage from './pages/About/about';
import Footer from './components/Footer/Footer2.js';

function App() {
  return (
    <Router>
      <Header/>
        <Routes>
          <Route path={'/'} element={<HomePage/>}/>
          <Route path={'/about'} element={<AboutPage/>}/>
          {/* <Route path={'/criteria'} element={<CriteriaPage/>}/> */}
          <Route path={'/promote-your-business'} element={<PromotePage/>}/>
          <Route path={'/contact-us'} element={<ContactUsPage/>}/>
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
