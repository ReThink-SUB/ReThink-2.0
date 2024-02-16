import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header.js';

function App() {
  return (
    <Router>
      <Header></Header>
    </Router>
  );
}

export default App;
