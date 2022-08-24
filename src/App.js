import './App.css';
import Barra from './components/navbar/Navbar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
   <>
    <Barra />
    <ItemListContainer title='Próximamente ecommerce de todo lo que necesitas para la nieve' />
   </>
  );
}

export default App;
