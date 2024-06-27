import React from "react"
import { ChatHeader, Chat, NuevoCorreoForm } from "../Componets"
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