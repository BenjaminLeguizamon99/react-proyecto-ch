import React from 'react'
import { Button } from '@mui/material'
import './itemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({informacion}) => {
  return (
    <div className='row container mt-5'>
        <div className='col-md-6 contenedor-imagen'>
            <img src={informacion.imagen} alt={informacion.titulo} className='img-detalle' />
        </div>
        <div className='col-md-6 contenedor-detalle'>
            <h3>{informacion.titulo}</h3>
            <h4>{informacion.precio}</h4>
            <p>{informacion.descripcion}</p>
            <ul>
                <li>MARCA: {informacion.marca}</li>
                <li>MODELO: {informacion.modelo}</li>
                <li>USO: {informacion.uso}</li>
            </ul>
            <div className='btn-contador'>
                <ItemCount />
                <Button variant="contained" className='btn-agregar'>Añadir al carrito</Button>
            </div> 
        </div>
    </div>
  )
}

export default ItemDetail