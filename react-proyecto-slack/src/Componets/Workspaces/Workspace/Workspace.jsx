import React from "react";
import { imagenes } from "../../../../public/Imagenes";
import { Link } from "react-router-dom";
import "./Workspace.css";

function Workspace({ workspace }) {
  const { id, name, image , creation_date, users } = workspace;
    
    const lastMessage = creation_date[creation_date.length - 1];
    const horaUltimoMensasje = lastMessage?.hora;
    const statusUltimoMensasje = lastMessage?.estado;

  return (
    <Link className="workspaces-link" to={`/creation_date/${id}`}>
    <div key={id} className="workspace-item">
      <img src={image} alt={name} />
      <div className="datos">
        <p className="name">
          <strong>{name}</strong>
        </p>
       <p className="preview"> <img 
          className="estado" 
          src={statusUltimoMensasje=== 'visto' ? imagenes.visto : statusUltimoMensasje === 'entregado' ? imagenes.entregado : imagenes.noEntregado} 
          alt={statusUltimoMensasje}
        />{lastMessage?.texto}</p>
      </div>
      <div className="hora">{horaUltimoMensasje}</div>
    </div>
    </Link>
  );
}

export default Workspace;
