import React, { useState, useEffect } from "react";
import { Mensaje } from "../Mensaje/Mensaje";
import './listamensajes.css';
import MOOK_MENSAJES from '../../../mensajes.json';

function Chat({ mensajes }) {
  const [mensajesIniciales, setMensajesIniciales] = useState([]);

  useEffect(() => {
    setMensajesIniciales(MOOK_MENSAJES);
  }, []);

  return (
    <div className="mensaje-container">
      {[...mensajesIniciales, ...mensajes].map((msj) => (
        <Mensaje key={msj.id} mensaje={msj} />
      ))}
    </div>
  );
}

export default Chat;
