import './App.css';
import Barra from './components/navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import ItemList from './components/ItemList/ItemList';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';





function App() {
  return (
   <>
    <Barra />
    <ItemListContainer title='Nuestros productos' />
    <ItemList />
    <ItemDetailContainer />
   </>
  );
}

export default App;
