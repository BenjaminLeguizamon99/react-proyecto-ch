import './item.css'
import { Button } from '@mui/material';

const Item = ({producto}) => {
  return (
    <div className='card'>
        <img src={producto.imagen} alt={producto.titulo} className="img-fluid" />
        <h3>{producto.titulo}</h3>
        <p>Marca: {producto.marca} <br />
          Modelo: {producto.modelo} <br />
          Uso: {producto.uso}</p>
        <h5>{producto.precio}</h5>
        <Button variant="contained">Agregar al carrito</Button>
    </div>
  );
};

export default Item