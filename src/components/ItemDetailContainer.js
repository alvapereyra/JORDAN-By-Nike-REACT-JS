import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom";
import {useEffect, useState} from 'react';
import {getProduct} from '../services/products';


const ItemDetailContainer = () => {
    const { id } = useParams();

    const [producto, setProducto] = useState (null)

    useEffect( () => {
        getProduct(id).then(data => {
            setProducto(data)
        })
    }, [])

  return (
    <div>
        {producto ? <ItemDetail product={producto}/> : ""}
    </div>
  )
}

export default ItemDetailContainer