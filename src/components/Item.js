import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"


const Item = ({product}) => {
  return (
    <div className="centrado">
        <br/>
        <h4>{product.nombre}</h4>
        <img src={product.img} alt=""/>
        <h6>${product.precio} USD</h6>
        <Link to={"/item/"+product.id}><button variant="outline-primary" className='pad1'>See detail</button></Link>
        <ItemCount producto={product}/>
    </div>
  )
}

export default Item