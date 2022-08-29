import './App.css';
import Barra from './components/navbar/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  return (
   <>
    <Barra />
    <ItemListContainer title='Próximamente ecommerce de todo lo que necesitas para la nieve' />
    <ItemCount />
   </>
  );
}

export default App;
