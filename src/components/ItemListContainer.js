import { useEffect, useState } from 'react';
import '../app/App.css'
import { getProducts } from '../services/products';
import ItemList from './ItemList';
import {useParams} from 'react-router-dom';
import UncontrolledExample from './Carousel';

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

return (
    <div>
        <div>{UncontrolledExample()}</div>
        <h1 className='greeting'>{greeting}</h1>
        <div><ItemList products={datos}/></div>
        <div style={{height: 60}}></div>
    </div>
    
);
}

export default ItemListContainer

