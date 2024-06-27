import React from "react"
import { ChatHeader, Chat, NuevoMensajeForm } from "../Componets"
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