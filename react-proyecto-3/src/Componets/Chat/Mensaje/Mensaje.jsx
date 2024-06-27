import React from "react";
import './mensaje.css';
import MOOK_MENSAJES from '../../../mensajes.json';

const Mensaje = ({ mensaje }) => {
  return (
    <>
      
        {MOOK_MENSAJES.map(mensaje => (
          <div key={mensaje.id} className={`mensaje ${mensaje.estado}`}>
            <p className="mensaje-texto">{mensaje.autor}: {mensaje.texto}</p>
            <p className="mensaje-info">Hora: {mensaje.hora}</p>
          </div>
        ))}
      
    </>
  );
}

export { Mensaje };
