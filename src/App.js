import './App.css';
import Barra from './components/navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Item from './components/Item/Item';
import ItemList from './components/ItemList/ItemList';



function App() {
  return (
   <>
    <Barra />
    <ItemListContainer title='Nuestros productos' />
    <Item />
    <ItemList />
   </>
  );
}

export default App;
