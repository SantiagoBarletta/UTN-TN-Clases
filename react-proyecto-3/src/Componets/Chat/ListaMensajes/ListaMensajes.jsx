import React from "react"
import { Mensaje } from "../Mensaje/Mensaje"
import './listamensajes.css'

function Chat() {
    return (
      <div className="mensaje-container">
        <Mensaje />
      </div>
    )
  }
  export default Chat;