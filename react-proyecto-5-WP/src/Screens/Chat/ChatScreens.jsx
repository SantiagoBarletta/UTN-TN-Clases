import React, { useState } from "react";
import { Chat, ChatHeader, NuevoMensajeForm } from '../../Componets';
import "./ChatScreens.css";

function ChatScreens({ contactoID }) {
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
  };

  return (
    <div className="chat-screens">
      <ChatHeader />
      <Chat contactoID={contactoID} mensajes={mensajes} />
      <NuevoMensajeForm handleSubmitNuevoMsj={handleNuevoMsj} />
    </div>
  );
}

export default ChatScreens;
