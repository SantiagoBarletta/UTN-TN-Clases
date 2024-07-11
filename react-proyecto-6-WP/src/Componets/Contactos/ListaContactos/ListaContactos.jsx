import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Contacto } from "../../../Componets";
import './ListaContactos.css';
import obtenerContactos from '../../../Fetching/contactos.fetching'; 

function ListaContactos() {
  const { contactoID } = useParams();
  const [contactos, setContactos] = useState([]);

  useEffect(() => {
    obtenerContactos().then((contactos) => {
      setContactos(contactos);
      console.log(contactos);
    });
  }, []);

  return (
    <div className="mensaje-container">
      {contactos.map((contacto, index) => (
        <Contacto key={`${contactoID}.${contacto.id}.${index}`} contacto={contacto} />
      ))}
    </div>
  );
}

export default ListaContactos;
