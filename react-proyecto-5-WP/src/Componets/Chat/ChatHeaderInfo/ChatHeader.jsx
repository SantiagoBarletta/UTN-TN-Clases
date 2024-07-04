import React from "react"
import './ChatHeader.css'
import { Link } from 'react-router-dom'
import { pepe } from '../../../Imagenes'
import { ArrowLeft, CameraVideoFill, TelephoneFill, ThreeDotsVertical } from 'react-bootstrap-icons';

function ChatHeader() {
  return (
    <div className="chat-header">
        <div className="contacto"><Link to="/contactos"><ArrowLeft /></Link>
          <img src={pepe} alt="Contact Picture"/>
        <div class="contact-info">
          <div class="contact-name">Pepe</div>
          <div class="contact-status">Online</div>
        </div></div> 
        <div className="iconos"><CameraVideoFill /><TelephoneFill /><ThreeDotsVertical /></div>
    </div>

  )
}
export default ChatHeader;