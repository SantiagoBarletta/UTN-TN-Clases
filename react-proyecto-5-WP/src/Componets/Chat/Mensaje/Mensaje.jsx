import React from "react";
import './mensaje.css';
import { useParams } from "react-router-dom";
import contactos from "../../../mensajeria.json";
import { imagenes } from "../../../Imagenes";



const Mensaje = () => {
  const { contactoID } = useParams();
  const contacto = contactos.find((contacto) => contacto.id === parseInt(contactoID));

  return (
    <div className="mensaje-container">
      {contacto.mensajes.map((msj) => (
        <div key={msj.id} className={`mensaje ${msj.autor}`}>
          <p className="mensaje-texto"><strong>{msj.autor}</strong></p>
          <p className="mensaje-texto">{msj.texto}</p>
          <div className="mensaje-info">
            {msj.hora} 
            <img 
              className="estado" 
              src={msj.estado === 'visto' ? imagenes.visto : msj.estado === 'entregado' ? imagenes.entregado : imagenes.noEntregado} 
              alt={msj.est}
            />
          </div> 
        </div>
      ))}
    </div>
  );
}

export { Mensaje };