import './App.css';
import Barra from './components/navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemList from './components/ItemList/ItemList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
//VIEWs
import Home from './views/Home/Home';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import ProductDetail from './views/ProductDetail/ProductDetail';


function App() {
  return (
   <>
    <Router>
      <Barra />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/detail/:id' element={<ProductDetail />} />
        </Routes>
    </Router>

   </>
  );
}

export default App;
