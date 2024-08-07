import React from "react";
import './mensaje.css';
import { useParams } from "react-router-dom";
import contactos from "../../../mensajeria.json";
import { imagenes } from "../../../Imagenes";

const Mensaje = ({ mensaje }) => {
  const { contactoID } = useParams();
  const contacto = contactos.find((contacto) => contacto.id === parseInt(contactoID));

  return (
    <>
      <div className={`mensaje ${mensaje.autor}`}>
        <p className="mensaje-texto"><strong>{mensaje.autor}</strong></p>
        <p className="mensaje-texto">{mensaje.texto}</p>
        <div className="mensaje-info">
          {mensaje.hora} 
          <img 
            className="estado" 
            src={mensaje.estado === 'visto' ? imagenes.visto : mensaje.estado === 'entregado' ? imagenes.entregado : imagenes.noEntregado} 
            alt={mensaje.estado}
          />
        </div> 
      </div>
    </>
  );
}

export { Mensaje };
