import React from 'react';
import './ProductCard.css';
function ProductCard() {
    return (
      <><div className="producto">
      <h3 className="producto-titulo">Titulo Producto</h3>
      <p className="producto-precio">Precio</p>
      <p className="producto-descripcion">
        Descripción: Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis deleniti tempore voluptatem aliquid dolor dolorum molestias vero. Placeat nostrum quidem perspiciatis, est dolores doloremque deserunt magnam blanditiis voluptatem ipsum nisi.
      </p>
      <button className="producto-boton">Añadir al carrito</button>
    </div>
  
      </>
    )
  }
  
  export default ProductCard;