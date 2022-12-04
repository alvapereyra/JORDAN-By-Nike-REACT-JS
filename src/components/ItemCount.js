import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import '../app/App.css'

const ItemCount = ({producto, onAdd}) => {

const [c, setC] = useState(1);
const sumador = () => {
    setC(c >= producto.cantidad? c : c + 1);
};
const restador = () => {
    setC(c >= 2? c - 1 : c);
};

  return (
    <div className='flex'>
        <div className='pad1'>
            <button onClick={restador} className='botones'> - </button>
            <span style={{display:'inline-block', width:90}}>{c}</span> 
            <button onClick={sumador} className='botones'> + </button>
        </div>
        <div><Button variant="outline-primary" className='pad1' onClick={() => onAdd(c)}>Add to cart</Button></div>
    </div>
  )
}

export default ItemCount;