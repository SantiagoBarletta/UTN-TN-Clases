import React, { useState } from "react";
import { ChatHeader, Chat, NuevoMensajeForm } from '../../Componets';
import "./ChatScreens.css";

function ChatScreens() {
  const [mensajes, setMensajes] = useState([]);

  const handleNuevoMsj = (nuevoMsj) => {
    setMensajes([...mensajes, { 
      id: mensajes.length + 1, 
      texto: nuevoMsj, 
      autor: "yo", 
      estado: "entregado", 
      dia: "hoy", 
      hora: new Date().toLocaleTimeString() 
    }]);
    setMensajes([...mensajes, nuevoMensaje]);
  };

  return (
    <div className="chat-screens">
      <ChatHeader />
      <Chat mensajes={mensajes} />
      <NuevoMensajeForm handleSubmitNuevoMsj={handleNuevoMsj} />
    </div>
  );
}

export default ChatScreens;
