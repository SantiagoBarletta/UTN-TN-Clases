import React, { useState, useEffect } from "react";
import './ChatHeader.css';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, CameraVideoFill, TelephoneFill, ThreeDotsVertical } from 'react-bootstrap-icons';
import { imagenes } from "../../../Imagenes";
import obtenerContactos from '../../../Fetching/contactos.fetching'; 

function ChatHeader() {
  const { contactoID } = useParams();
  const [contacto, setContacto] = useState(null);

  useEffect(() => {
    obtenerContactos()
      .then(data => {
        const contactoEncontrado = data.find(contacto => contacto.id === parseInt(contactoID));
        if (contactoEncontrado) {
          setContacto(contactoEncontrado);
        }
      })
      .catch(error => console.error('Error al cargar contactos:', error));
  }, [contactoID]);

  if (!contacto) {
    return <div>Loading...</div>;
  }

  const imgSrc = imagenes[contacto.thumbnail];

  return (
    <div className="chat-header">
      <div className="contacto">
        <Link to="/contactos">
          <ArrowLeft className="arrow" />
        </Link>
        <img src={imgSrc} alt={contacto.nombre} />
        <div className="contact-info">
          <div className="contact-name">{contacto.nombre}</div>
          <div className="contact-status">Online</div>
        </div>
      </div>
      <div className="iconos">
        <CameraVideoFill />
        <TelephoneFill />
        <ThreeDotsVertical />
      </div>
    </div>
  );
}

export default ChatHeader;
