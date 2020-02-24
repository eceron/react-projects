import React from 'react';
import './Carrito.css';
import Producto from './Producto';

const Carrito = ({carrito, setCarrito}) => {
    return (
      <div className="carrito">
        <h1>Listado de productos añadidos al carrito</h1>
        {carrito.map(producto=>(
          <Producto
            key={producto.id}
            producto = {producto}
            carrito = {carrito}
            setCarrito = {setCarrito}
          />
        ))}
      </div>
    );
}

export default Carrito;
