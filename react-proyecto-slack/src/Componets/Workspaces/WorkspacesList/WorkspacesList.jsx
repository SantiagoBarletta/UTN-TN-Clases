import React, { useState, useEffect } from "react";
import { Workspace } from "../..";
import "./WorkspacesList.css";
import obtenerWorkspaces from "../../../Fetching/workspaces.fetching";
import { Link } from "react-router-dom";

function WorkspacesList() {
  const [workspaces, setWorkspaces] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedWorkspaces = localStorage.getItem('workspaces');
    if (storedWorkspaces) {
      setWorkspaces(JSON.parse(storedWorkspaces));
      console.log("workspaces desde localStorage", JSON.parse(storedWorkspaces));
    } else {
      obtenerWorkspaces()
        .then((data) => {
          console.log("workspaces desde fetch", data);
          if (data && Array.isArray(data.workspaces)) {
            setWorkspaces(data.workspaces);
            localStorage.setItem('workspaces', JSON.stringify(data.workspaces));
          }
        })
    }
  }, []);

  return (
    <>
      <div className="workspace-list">
        <div className="title"><h4>Espacios de trabajo</h4></div>
        {error ? (
          <p className="error">{error}</p>
        ) : (
          workspaces.length > 0 ? (
            workspaces.map((workspace) => (
              <Workspace key={workspace.id} workspace={workspace} />
            ))
          ) : (
            <p>No hay workspaces disponibles.</p>
          )
        )}
      </div>
      <div className="workspaces-add">
        <img src="Imagenes/jasonicon.png" alt="logo" />
        <p>¿Quieres usar Slasher con otro equipo?</p>
        <Link to="/workspaces/new"><button>Crear otro espacio de trabajo</button></Link>
      </div>
    </>
  );
}

export default WorkspacesList;
