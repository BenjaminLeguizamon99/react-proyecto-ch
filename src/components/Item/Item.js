const Item = ({product}) => {
  return (
    <div>
        <img src={product.imagen} alt='Foto ilustrativa' />
        <h3>{product.titulo}</h3>
        <p>Marca: {product.marca} <br />
          Modelo: {product.modelo} <br />
          Uso: {product.uso}</p>
        <h5>{product.precio}</h5>
    </div>
  )
}

export default Item