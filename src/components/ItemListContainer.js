import { useEffect, useState } from 'react';
import '../app/App.css'
// import { getProducts } from '../services/products';
import ItemList from './ItemList';
import {useParams} from 'react-router-dom';
import UncontrolledExample from './Carousel';
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';

const ItemListContainer = ({greeting}) => {
    const { categoryId } = useParams();
    const [datos, setDatos] = useState ([])

    useEffect( () => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, "products");
        
        if (categoryId) {
            const queryFilter = query(queryCollection, where ("category", "==", categoryId))
            getDocs(queryFilter)
                .then(res => setDatos(res.docs.map(product => ({id: product.id, ...product.data()}) )))
        } else {
            getDocs(queryCollection)
                .then(res => setDatos(res.docs.map(product => ({id: product.id, ...product.data()}) )))
        }    

        // if (categoryId) {
        //     getProducts().then(data => setDatos(data.filter(product => product.category === categoryId)));
        // } else {
        //     getProducts().then(data => setDatos(data));
        // }
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

