import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {

    const fechaActual : number = new Date().getFullYear();

    const [productos, setProductos] = useState([
      { id: 1, nombre: 'Camisa ReactJS', precio : 100},
      { id: 2, nombre: 'Camisa VueJS', precio : 100},
      { id: 3, nombre: 'Camisa Node', precio : 100},
      { id: 4, nombre: 'Camisa Angular', precio : 100}
    ]);

    const [carrito, setCarrito] = useState([]);

    return (
      <Fragment>
        <Header
          titulo = 'Hola Eduardo'
        />
        <h1>Lista de productos</h1>
        {productos.map(producto => (
          <Producto
            key={producto.id}
            producto = {producto}
            productos = {productos}
            carrito = {carrito}
            setCarrito = {setCarrito}
          />
        ))}

        <Carrito
          carrito = {carrito}
          setCarrito = {setCarrito}
        />
        <Footer
          fechaActual = {fechaActual}
        />
      </Fragment>
    );
}

export default App;
