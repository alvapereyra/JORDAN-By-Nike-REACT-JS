import { useState } from 'react';
import {Link} from 'react-router-dom';
import ItemCount from './ItemCount';
import { useCartContext } from '../context/CartContext';

const ItemDetail = ({product}) => {
  const [goToCart, setGoToCart] = useState(false);
  const {addProduct} = useCartContext();

  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(product, quantity);
  }
  return (
    <div className='centrado'>
        <div style={{height: 100}}></div>
        <h4>{product.nombre}</h4>
        <img src={product.img} alt=""/>
        <h6>${product.precio} USD</h6>
        <h6>{product.desc}</h6>
        <h6>Size {product.talle}</h6>
        {
          goToCart ? <div className='flex'> <Link to="/cart">Finish buy</Link> <Link to="/">Go shopping</Link> </div> : <ItemCount producto={product} onAdd={onAdd}/>
        }
        <div style={{height: 147}}></div>
    </div>
  )
}

export default ItemDetail