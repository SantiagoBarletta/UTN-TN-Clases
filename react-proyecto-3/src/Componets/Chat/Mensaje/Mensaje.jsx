import React from "react";
import './mensaje.css';
import MOOK_MENSAJES from '../../../mensajes.json';

const Mensaje = ({ mensaje }) => {
  return (
    <>
      
        {MOOK_MENSAJES.map(mensaje => (
          <div key={mensaje.id} className={`mensaje ${mensaje.autor}`}>
            <p className="mensaje-texto"><strong>{mensaje.autor}</strong></p>
            <p > {mensaje.texto}</p>
            <p className="mensaje-info">Hora: {mensaje.hora}</p>
          </div>
        ))}
      
    </>
  );
}

export { Mensaje };
