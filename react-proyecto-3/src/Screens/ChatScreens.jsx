import React from "react"
import { ChatHeader } from "../Componets/Chat/ChatHeaderInfo/ChatHeader"
import { Chat } from "../Componets/Chat/ListaMensajes/ListaMensajes"
import { NuevoMensajeForm } from "../Componets/Chat/MensajeForm/NuevoMensajeForm"


function ChatScreens() {
    
    return (
      <>
        <ChatHeader />
        <Chat />
        <NuevoMensajeForm />
      </>
    )
  }
  export default ChatScreens