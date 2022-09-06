import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

export const ItemDetailContainer = () => {
    const [detalles, setDetalles] = useState([]);

    const getDetalle = async () => {
    const respuesta = await fetch("https://api.jsonbin.io/v3/b/63125f4ae13e6063dc987538");
    const datos = await respuesta.json()
    return datos.record
    } 

    useEffect(()=>{
        getDetalle().then(detalle => setDetalles(detalle))
    }, [])
    console.log(detalles)

    return (
    <div>
        {detalles.filter(detalle=>detalle.id==="1").map(detalleProductoUno => (
            <ItemDetail informacion={detalleProductoUno} />
        ))}
    </div>
  )
}
