import React from "react"
import { ChatHeader } from "../Componets/Chat/ChatHeaderInfo/ChatHeader"
import { Chat } from "../Componets/Chat/ListaMensajes/ListaMensajes"
import { NuevoMensajeForm } from "../Componets/Chat/MensajeForm/NuevoMensajeForm"
import "./ChatScreens.css"


function ChatScreens() {
    
    return (
      <div className="chat-screens">
        <ChatHeader />
        <Chat />
        <NuevoMensajeForm />
      </div>
    )
  }
  export default ChatScreens