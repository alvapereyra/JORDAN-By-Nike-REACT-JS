import { useEffect, useState } from 'react';
import '../app/App.css'
import { getProducts } from '../services/products';
import ItemList from './ItemList';

const ItemListContainer = ({greeting}) => {

    const [datos, setDatos] = useState ([])

    useEffect( () => {
        getProducts().then(data => {
            setDatos(data)
        })
    }, [])

return (
    <div>
        <h1 className='greeting'>{greeting}</h1>
        <ItemList products={datos}/>
    </div>
    
);
}

export default ItemListContainer