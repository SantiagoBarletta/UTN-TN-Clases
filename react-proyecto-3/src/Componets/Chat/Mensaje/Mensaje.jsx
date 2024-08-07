import React from "react";
import './mensaje.css';
import { visto, entregado, noEntregado } from '../../../Imagenes';

const Mensaje = ({ mensaje }) => {
  return (
    <div key={mensaje.id} className={`mensaje ${mensaje.autor}`}>
      <p className="mensaje-texto"><strong>{mensaje.autor}</strong></p>
      <p className="mensaje-texto">{mensaje.texto}</p>
      <div className="mensaje-info">
        {mensaje.hora} 
        <img 
          className="estado" 
          src={mensaje.estado === 'visto' ? visto : mensaje.estado === 'entregado' ? entregado : noEntregado} 
          alt={mensaje.estado}
        />
      </div> 
    </div>
  );
}

export { Mensaje };
