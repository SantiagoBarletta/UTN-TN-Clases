import React from "react";
import './mensaje.css';
import { visto, entregado, noEntregado } from '../../../Imagenes';
import MOOK_MENSAJES from '../../../mensajes.json';

const Mensaje = ({ mensaje }) => {
  return (
    <>
      
        {MOOK_MENSAJES.map(mensaje => (
          <div key={mensaje.id} className={`mensaje ${mensaje.autor}`}>
            <p className="mensaje-texto"><strong>{mensaje.autor}</strong></p>
            <p className="mensaje-texto"> {mensaje.texto}</p>
            <div className="mensaje-info"> {mensaje.hora} <img className="estado" src={mensaje.estado === 'visto' ? visto : mensaje.estado === 'entregado' ? entregado : noEntregado}  /></div> 
          </div>
        ))}
      
    </>
  );
}

export { Mensaje };
