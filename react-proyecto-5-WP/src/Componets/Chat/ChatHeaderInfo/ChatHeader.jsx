import React from "react"
import './ChatHeader.css'
import { Link } from 'react-router-dom'
import { ArrowLeft, CameraVideoFill, TelephoneFill, ThreeDotsVertical } from 'react-bootstrap-icons';
import { useParams } from "react-router-dom";
import contactos from "../../../mensajeria.json";
import { imagenes } from "../../../Imagenes";

function ChatHeader() {
  

  const { contactoID } = useParams();
  const contacto = contactos.find((contacto) => contacto.id === parseInt(contactoID));
  const imgSrc = imagenes[contacto.thumbnail];

  return (
    <div className="chat-header">
        <div className="contacto"><Link to="/contactos"><ArrowLeft className="arrow"/></Link>
          <img src={imgSrc}/>
        <div className="contact-info">
          <div className="contact-name">{contacto.nombre}</div>
          <div className="contact-status">Online</div>
        </div></div> 
        <div className="iconos"><CameraVideoFill /><TelephoneFill /><ThreeDotsVertical /></div>
    </div>

  )
}
export default ChatHeader;