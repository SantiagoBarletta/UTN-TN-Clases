// Detalle.jsx
import React from 'react';
import productos from '../../../public/productos.json'; 
import { useParams } from 'react-router-dom';

const Detalle = () => {
  const { productId } = useParams(); 
  console.log (productId);
  const producto = productos.find(prod => prod.id === parseInt(productId));

  return (
    <div>
      <h1>Detalle</h1>
      <p>Id del producto: {productId}</p>
      <h2>Nombre del Producto: {producto.titulo}</h2>
      <p>Precio: {producto.precio}</p>
      <p>Categoría: {producto.categoria}</p>
    </div>
  );
};

export default Detalle;
