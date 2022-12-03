import React from 'react'
import { useCartContext } from '../context/CartContext';

const ItemCart = ({product}) => {
    const {removeProduct} = useCartContext();
  return (
    <div className='centrado'>
        <div style={{height: 30}}></div>
        <h4>{product.nombre}</h4>
        <img src={product.img} alt=""/>
        <h6>${product.precio} USD</h6>
        <h6>Quantity: {product.quantity}</h6>
        <p>Subtotal: ${product.quantity * product.precio}</p>
        <button onClick={() => removeProduct(product.id)}>Remove</button>
    </div>
  )
}

export default ItemCart