import React, { useState, useEffect } from "react";
import './ChatHeader.css';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, CameraVideoFill, TelephoneFill, ThreeDotsVertical } from 'react-bootstrap-icons';
import { imagenes } from "../../../Imagenes";
import obtenerContactos from '../../../Fetching/contactos.fetching'; 

function ChatHeader() {
  const { contactoID } = useParams();
  const [contacto, setContacto] = useState({});
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    obtenerContactos()
      .then(data => {
        const contactoEncontrado = data.find(contacto => contacto.id === parseInt(contactoID));
        if (contactoEncontrado) {
          setContacto(contactoEncontrado);
        }
      });
  }, [contactoID]);

  const imgSrc = imagenes[contacto.thumbnail];

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

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
        <ThreeDotsVertical onClick={toggleMenu} />
        {menuVisible && (
          <div className="context-menu">
            <div className="menu-item">Opción 1</div>
            <div className="menu-item">Opción 2</div>
            <div className="menu-item">Opción 3</div>
            <div className="menu-item">Opción 4</div>
            <div className="menu-item">Opción 5</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatHeader;
