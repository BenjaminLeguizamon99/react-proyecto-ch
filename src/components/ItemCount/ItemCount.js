import React, { useState } from 'react';
import './ItemCount.css'


const ItemCount = () => {
    const stock = 12;
    let [contador, setContador] = useState(0);
    
    const imprimirContador = () =>{
        console.log(`La cantidad seleccionada es: ${contador}`);
    }
    
    if(contador === 0 ){
        return(
            <div className='contador-flex'>
                <button className='contador-btn btn-bloqueado'>-</button>
                <h2>{contador}</h2>
                <button className='contador-btn' onClick = {() => setContador(++contador)}>+</button>
                <button onClick = {imprimirContador}>Confirmar</button>
            </div>
        )
    } else if (contador >= 1 && contador < stock){
        return (
            <div className='contador-flex'>
                <button className='contador-btn' onClick = {() => setContador(--contador)}>-</button>
                <h2>{contador}</h2>
                <button className='contador-btn' onClick = {()=> setContador(++contador)}>+</button>
                <button onClick = {imprimirContador}>Confirmar</button>
            </div>
        )
    } else if (contador === stock) {
        return (
            <div className='contador-flex'>
                <button className='contador-btn' onClick = {() => setContador(--contador)}>-</button>
                <h2>{contador}</h2>
                <button className='contador-btn btn-bloqueado'>+</button>
                <button onClick={imprimirContador}>Confirmar</button>
            </div>
        )
    }
   
}

export default ItemCount