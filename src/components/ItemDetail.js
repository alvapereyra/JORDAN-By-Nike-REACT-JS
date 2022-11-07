import {Link} from 'react-router-dom';
import ItemCount from './ItemCount';

const ItemDetail = ({product}) => {
  return (
    <div className='centrado'>
        <br/>
        <h4>{product.nombre}</h4>
        <img src={product.img} alt=""/>
        <h6>${product.precio} USD</h6>
        <h6>{product.desc}</h6>
        <h6>Size {product.talle}</h6>
        <ItemCount producto={product}/>
    </div>
  )
}

export default ItemDetail