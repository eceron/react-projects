import React from 'react';

const Producto = ({producto, productos, carrito, setCarrito}) =>{

  const seleccionarProducto = (id) =>{
    const producto = productos.filter(producto=> producto.id === id);
    setCarrito([
      ...carrito,
      producto[0]
    ]);
  }

  const eliminar = (id) =>{
    const producto = carrito.filter(producto=> producto.id !== id);
    setCarrito(producto);

  }

  return(
        <div>
          <h1>Nombre: {producto.nombre}</h1>
          <p>Precio : {producto.precio}</p>

          {productos
          ?
            (<button
              type="button"
              onClick={() => seleccionarProducto(producto.id)}
              >
              Agregar al carrito
              </button>
            )
          :
            (<button
              type="button"
              onClick={()=>eliminar(producto.id)}
              >
              Eliminar
              </button>
            )}

        </div>
         );
}

export default Producto;
