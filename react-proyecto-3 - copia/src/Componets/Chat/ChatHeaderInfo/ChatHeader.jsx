import React from "react"
import './ChatHeader.css'
import { pepe } from '../../../Imagenes'
import { ArrowLeft, CameraVideoFill, TelephoneFill, ThreeDotsVertical } from 'react-bootstrap-icons';

function ChatHeader() {
  return (
    <div class="chat-header">
        <div className="contacto"><ArrowLeft />
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