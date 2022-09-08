import React, {useState, useEffect} from 'react'
import Item from '../Item/Item';
import './itemList.css'


const ItemList = () => {
    const [productos, setProductos] = useState([]);

    const getData= async () =>{
      const response = await fetch("https://api.jsonbin.io/v3/b/63125f4ae13e6063dc987538");
      const data = await response.json();
      return data.record
    }    
    
    useEffect(()=>{
      getData().then((products)=> setProductos(products));
    }, [])
    
    return (
      <div className='grid-cards'>
        {productos.map(producto => (
            <Item producto={producto} key={producto.id} />
        ))}
      </div>
    );
};

export default ItemList