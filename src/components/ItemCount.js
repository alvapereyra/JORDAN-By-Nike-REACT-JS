import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import '../app/App.css'

const ItemCount = () => {

const [c, setC] = useState(0);
const sumador = () => {
    setC(c >= 7? c : c + 1);
};
const restador = () => {
    setC(c >= 1? c - 1 : c);
};

  return (
    <div className='flex'>
        <button className='pad1'>
            <button onClick={restador} className='botones'> - </button>
            <span style={{display:'inline-block', width:90}}>{c}</span> 
            <button onClick={sumador} className='botones'> + </button>
        </button>
        <Button variant="outline-primary" className='pad1'>Agregar al carrito</Button>
    </div>
  )
}

export default ItemCount;