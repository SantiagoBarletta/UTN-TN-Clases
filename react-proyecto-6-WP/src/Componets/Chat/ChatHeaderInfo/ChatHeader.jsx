import React, { useState, useEffect } from "react";
import './ChatHeader.css';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, CameraVideoFill, TelephoneFill, ThreeDotsVertical } from 'react-bootstrap-icons';
import { imagenes } from "../../../Imagenes";
import obtenerContactos from '../../../Fetching/contactos.fetching'; 

function ChatHeader() {
  const { contactoID } = useParams([]);
  const [contacto, setContacto] = useState([]);

  useEffect(() => {
    obtenerContactos()
      .then(data => {
        const contactoEncontrado = data.find(contacto => contacto.id === parseInt(contactoID));
        if (contactoEncontrado) {
          setContacto(contactoEncontrado);
        }
      })
  }, [contactoID]);

  const imgSrc = imagenes[contacto.thumbnail];

  return (
    <div className="chat-header">
      <Link to="/contactos">
          <ArrowLeft className="arrow" />
        </Link>
      <Link to={`/contactoInfo/${contacto.id}`} className="contacto">
        <img src={imgSrc} alt={contacto.nombre} />
        <div className="contact-info">
          <div className="contact-name">{contacto.nombre}</div>
          <div className="contact-status">Online</div>
        </div>
      </Link>
      <div className="iconos">
        <CameraVideoFill />
        <TelephoneFill />
        <ThreeDotsVertical />
      </div>
    </div>
  );
}

export default ChatHeader;
