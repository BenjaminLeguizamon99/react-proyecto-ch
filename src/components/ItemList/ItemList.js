import React, {useState, useEffect} from 'react'
import Item from '../Item/Item';

const ItemList = () => {
    const [productos, setProductos] = useState([]);

    const getData = async () =>{
        const respuesta = await fetch("productos.json");
        const data = await respuesta.json();
        return data;
    }

    useEffect(()=>{
        getData().then((products)=>setProductos(products))
    }, [])
    
    console.log(productos)
    
    return (
        <div>
          {productos.map((product) => (
            <Item key={product.id} product={product} />
          ))}
          ItemListContainer
        </div>
      );
}

export default ItemList