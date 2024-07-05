import React, { useState, useEffect } from "react";
import { Mensaje } from "../Mensaje/Mensaje";
import './listamensajes.css';
import MOOK_MENSAJES from '../../../mensajeria.json';

function Chat({ mensaje }) {
  const [mensajesIniciales, setMensajesIniciales] = useState([]);

  useEffect(() => {
    setMensajesIniciales(...MOOK_MENSAJES, mensaje);
  }, []);
  console.log ("nuevoMsj", mensajesIniciales.mensajes, mensaje);
  return (
    <div className="mensaje-container">
      
      <Mensaje mensaje={mensajesIniciales} key={mensajesIniciales.id}/>
    </div>
  );
}

export default Chat;
