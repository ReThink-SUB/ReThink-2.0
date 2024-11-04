import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import ContactUsPage from './pages/contact.js'
import CriteriaPage from './pages/criteria';
import PromotePage from './pages/promote';
import HomePage from './pages/home';
import AboutPage from './pages/about';

function App() {
  return (
    <Router>
      <div className="app-container">
          <Header />
          <div className="content">
              <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/criteria" element={<CriteriaPage />} />
                  <Route path="/promote-your-business" element={<PromotePage />} />
                  <Route path="/contact-us" element={<ContactUsPage />} />
              </Routes>
          </div>
          <Footer />
      </div>
    </Router>
  );
}


export default App;
