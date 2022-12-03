import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom";
import {useEffect, useState} from 'react';
// import {getProduct} from '../services/products';
import {getFirestore, doc, getDoc} from "firebase/firestore";

const ItemDetailContainer = () => {
    const { id } = useParams();

    const [producto, setProducto] = useState ({})

    useEffect(() => {
      const querydb = getFirestore();
      const queryDoc = doc(querydb, "products", id);
      getDoc(queryDoc)
        .then(res => setProducto({id: res.id, ...res.data()}))
    }, [])

    // useEffect( () => {
    //     getProduct(id).then(data => {
    //         setProducto(data)
    //     })
    // }, [])

  return (
    <div>
        <ItemDetail product={producto}/>
        {/* {producto ? <ItemDetail product={producto}/> : ""} */}
    </div>
  )
}

export default ItemDetailContainer