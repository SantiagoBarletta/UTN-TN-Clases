import React from "react";
import "./Item.css";

const Item = () => {
  return (
    <div className="item">
    <h2>Nombre</h2>
    <span>Cantidad: </span>
    <button >Eliminar</button>
  </div>
  );
};

export default Item;