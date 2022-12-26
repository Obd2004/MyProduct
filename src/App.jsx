import { Routes , Route} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Customers from './pages/Customers/Customers';
import Home from './pages/Home/Home';
import Pricing from './pages/Pricing/Pricing';
import Resources from './pages/Resources/Resources';

function App() {
  return (
    <div className="container">
      <Header/>
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/pricing'  element={<Pricing/>}/>
        <Route path='/customers'  element={<Customers/>}/>
        <Route path='/resources'  element={<Resources/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
