import './item.css'
import { Button } from '@mui/material';
import {Link} from 'react-router-dom'

const Item = ({producto}) => {
  return (
    <div className='card'>
        <img src={producto.imagen} alt={producto.titulo} className="img-fluid" />
        <h3>{producto.titulo}</h3>
        <p>Marca: {producto.marca} <br />
          Modelo: {producto.modelo} <br />
          Uso: {producto.uso}</p>
        <h5>{producto.precio}</h5>
        <Link to={`/detail/${producto.id}`} className='estilo-link mt-2'>
          <Button variant="contained">Más información</Button>
        </Link>
    </div>
  );
};

export default Item