import foto from '../assets/img/carrito.png'
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';

const CartWidget = () => {
    const {totalProducts} = useCartContext();
return (
    <>  
        <div className='cartWidget responsive2'>
            <Link to="/Cart"><img src={foto} alt="carrito" className='carro'/></Link>
            <h6 className='cartNumber'>{totalProducts() || ""}</h6>
        </div>
    </>
);
}

export default CartWidget