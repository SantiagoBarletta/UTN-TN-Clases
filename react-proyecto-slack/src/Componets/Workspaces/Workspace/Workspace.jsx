import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import "./Workspace.css";

function Workspace({ workspace }) {
  const { id, name, image , creation_date, users } = workspace;
    
    const lastMessage = creation_date[creation_date.length - 1];
    const horaUltimoMensasje = lastMessage?.hora;

  return (
    <Link className="workspaces-link" to={`/creation_date/${id}`}>
    <div key={id} className="workspace-item">
      <img src={image} alt={name} />
      <div className="datos">
        <p className="name">{name}</p>
       <p className="members"> {users.length} miembros</p>
      </div>
      <div className="flecha"><FaArrowRight /></div>
    </div>
    </Link>
  );
}

export default Workspace;
