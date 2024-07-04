import React from 'react';
import { Link } from 'react-router-dom';
import productosData from '../../assets/productos.json';

const Home = () => {
  const productos = productosData;

  return (
    <div>
      <h1>HOME</h1>
      <div>
        {productos.map(producto => (
          <div key={producto.id}>
            <h2>{producto.titulo}</h2>
            <p>Precio: {producto.precio}</p>
            <p>Categoría: {producto.categoria}</p>
            <Link to={`/detalle/${producto.id}`}>Ir al detalle</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
