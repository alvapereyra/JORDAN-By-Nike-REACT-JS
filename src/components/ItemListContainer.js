import { useEffect, useState } from 'react';
import '../app/App.css'
import { getProducts } from '../services/products';
import ItemList from './ItemList';
import {useParams} from 'react-router-dom';

const ItemListContainer = ({greeting}) => {
    const { categoryId } = useParams();
    const [datos, setDatos] = useState ([])

    useEffect( () => {
        if (categoryId) {
            getProducts().then(data => setDatos(data.filter(product => product.category === categoryId)));
        } else {
            getProducts().then(data => setDatos(data));
        }
    }, [categoryId])

    // useEffect( () => {
    //     getProducts().then(data => {
    //         setDatos(data)
    //     })
    // }, [])

return (
    <div>
        <h1 className='greeting'>{greeting}</h1>
        <ItemList products={datos}/>
    </div>
    
);
}

export default ItemListContainer

