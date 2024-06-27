import React from "react"
import './ChatHeader.css'
import pepe from '../../../Componets/Contactos/Pepe_2018.jpg'

function ChatHeader() {
  return (
    <div class="chat-header">
      <img src={pepe} alt="Contact Picture"/>
        <div class="contact-info">
          <div class="contact-name">Pepe</div>
          <div class="contact-status">Online</div>
        </div>
    </div>

  )
}
export { ChatHeader }