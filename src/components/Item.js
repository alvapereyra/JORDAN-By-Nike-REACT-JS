
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';


const Item = ({product}) => {
  return (
    <div className="centrado">
        <br/>
        <h4>{product.nombre}</h4>
        <img src={product.img} alt=""/>
        <h6>${product.precio} USD</h6>
        <Link to={"/item/"+product.id}><Button variant="outline-dark" className='pad1'>See detail</Button></Link>
    </div>
  )
}

export default Item