import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
    const [detalles, setDetalles] = useState([]);
    const { id } = useParams();
    
    const getData= async () =>{
        const response = await fetch("https://api.jsonbin.io/v3/b/63125f4ae13e6063dc987538");
        const data = await response.json();
        return data.record
      }    
      
      useEffect(()=>{
        getData().then(details=> setDetalles(details.find((detalles => detalles.id===id))));
      }, [])

    return (
        <>
            <ItemDetail  informacion={detalles} />
        </>
  )
}
