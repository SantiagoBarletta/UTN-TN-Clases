import React, { useState, useEffect } from "react";
import { Workspace } from "../..";
import "./WorkspacesList.css";
import obtenerWorkspaces from "../../../Fetching/workspaces.fetching";

function WorkspacesList() {
  const [workspaces, setWorkspaces] = useState([]);

  useEffect(() => {
    obtenerWorkspaces()
      .then((data) => {
        console.log("workspaces", data);
        // Verificar si la propiedad workspaces es un arreglo
        if (data && Array.isArray(data.workspaces)) {
          setWorkspaces(data.workspaces);
        } else {
          console.error("Datos no son un arreglo:", data);
          setWorkspaces([]);
        }
      })
      .catch((error) => {
        console.error("Error al obtener workspaces:", error);
        setWorkspaces([]); // Manejar el error asignando un arreglo vacío
      });
  }, []);

  return (
    <div className="workspace-list">
      <div className="title"><h4>Espacios de trabajo</h4></div>
      {workspaces.length > 0 ? (
        workspaces.map((workspace) => (
          <Workspace key={workspace.id} workspace={workspace} />
        ))
      ) : (
        <p>No hay workspaces disponibles.</p>
      )}
    </div>
  );
}

export default WorkspacesList;
