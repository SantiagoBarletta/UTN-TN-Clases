import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Mensaje } from "../Mensaje/Mensaje";
import './listamensajes.css';
import MOCK_MENSAJES from '../../../mensajeria.json';

function ListaMensajes({ mensaje }) {
  const { contactoID } = useParams();
  const [mensajesIniciales, setMensajesIniciales] = useState([]);

  // Carga mensajes almacenados en el JSON
  useEffect(() => {
    const contacto = MOCK_MENSAJES.find(contacto => contacto.id === parseInt(contactoID));
      setMensajesIniciales(contacto.mensajes);
  }, []);

  // Agrega el mensaje nuevo
  useEffect(() => {
    if (mensaje) {
      setMensajesIniciales(mensajesPrevios => [...mensajesPrevios, mensaje]);
    }
  }, [mensaje]);

  return (
    <div className="mensaje-container">
      {mensajesIniciales.map((msj, index) => (
        <Mensaje mensaje={msj} key={`${contactoID}.${msj.id}.${index}`} />
      ))}
    </div>
  );
}

export default ListaMensajes;
