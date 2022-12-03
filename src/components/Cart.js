import React from 'react'
import { useCartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import ItemCart from './ItemCart';
import {addDoc, collection, getFirestore} from "firebase/firestore";
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Cart = () => {
    const {cart, totalPrice, clearCart} = useCartContext();

    const order = {
        buyer: {
            name: "Alvaro",
            email: "alvaropereyragamez@gmail.com",
            phone: "2615337365",
            address: "Mendoza, Lujan De Cuyo, Chacras De Coria"
        },
        items: cart.map(product => ({ id: product.id, nombre: product.nombre, precio: product.precio, quantity: product.quantity})),
        total: totalPrice(),
    }

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection (db, "orders");
        addDoc(ordersCollection, order)
        .then(({ id }) => console.log(id))
    }

    if (cart.length === 0) {
        return(
            <>  
                <div style={{height: 325}}></div>
                <div className='centrado'>
                    <p>There are no items in the cart</p>
                    <Link to="/">Go shopping</Link>
                </div>
                <div style={{height: 300}}></div>
            </>
        );
    }

    const exito = () => {
        Swal.fire({
            title: 'Are you sure you want to buy?',
            text: `You will buy everything in the cart`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Enviar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                handleClick();
                Swal.fire(
                    'Bought!',
                    'Your purchase was successful',
                    'success'
                )
                toast('✅ Purchase made!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
            }
        })}

  return (
    <>
        {
            cart.map(product => <ItemCart key={product.id} product={product} />)
        }
        <div style={{height: 60}}></div>
        <h3 className='centrado'>
            Total: ${totalPrice()}
        </h3>
        <div  className='centrado flex'>
            <button onClick={() => clearCart()}>Remove all</button>
            <br/>
            <button onClick={exito}>Finalize purchase</button>
            <ToastContainer />
        </div>
        <div style={{height: 60}}></div>
    </>
  )
}

export default Cart