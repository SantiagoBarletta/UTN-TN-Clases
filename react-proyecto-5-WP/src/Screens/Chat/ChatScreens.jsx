import React, { useState } from "react";
import { ChatHeader, ListaMensajes, NuevoMensajeForm } from "../../Componets";
import "./ChatScreens.css";

function ChatScreens({ contactoID }) {
  const [mensajes, setMensajes] = useState([]);

  const handleNuevoMsj = (nuevoMsj) => {
    const nuevoMensaje = {
      id: mensajes.length + 1,
      texto: nuevoMsj,
      autor: "yo",
      estado: "entregado",
      dia: "hoy",
      hora: new Date().toLocaleTimeString(),
    };
    setMensajes([...mensajes, nuevoMensaje]);
  };

  return (
    <div className="chat-screens">
      <ChatHeader />
      <ListaMensajes contactoID={contactoID} mensaje={mensajes[mensajes.length - 1]} />
      <NuevoMensajeForm handleSubmitNuevoMsj={handleNuevoMsj} />
    </div>
  );
}

export default ChatScreens;
