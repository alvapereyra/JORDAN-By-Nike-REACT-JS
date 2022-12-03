import React from 'react'
import { useCartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import ItemCart from './ItemCart';


const Cart = () => {
    const {cart, totalPrice, clearCart} = useCartContext();

    if (cart.length === 0) {
        return(
            <>  
                <div className='centrado'>
                    <p>There are no items in the cart</p>
                    <Link to="/">Go shopping</Link>
                </div>
            </>
        );
    }

  return (
    <>
        {
            cart.map(product => <ItemCart key={product.id} product={product} />)
        }
        <div style={{height: 60}}></div>
        <h3 className='centrado'>
            Total: ${totalPrice()}
        </h3>
        <div  className='centrado'>
            <button onClick={() => clearCart()}>Remove all</button>
        </div>
        <div style={{height: 60}}></div>
    </>
  )
}

export default Cart