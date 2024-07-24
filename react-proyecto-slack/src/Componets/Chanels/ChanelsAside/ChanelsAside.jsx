import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import "./ChanelsAside.css";
import { IoIosArrowDown } from "react-icons/io";
import { TiArrowSortedDown } from "react-icons/ti";

const ChanelsAside = () => {
  const { workspaceID , channelID } = useParams();
  const [workspace, setWorkspace] = useState(null);
  const [channels, setChannels] = useState([]);
  const [users, setUsers] = useState([]);
  const [workspaceName, setWorkspaceName] = useState('');

  useEffect(() => {
    const storedWorkspaces = localStorage.getItem('workspaces');
    
    if (storedWorkspaces) {
      const workspaces = JSON.parse(storedWorkspaces);
      const foundWorkspace = workspaces.find(ws => ws.id === workspaceID);
      if (foundWorkspace) {
        setWorkspace(foundWorkspace);
        setWorkspaceName(foundWorkspace.name);
        setChannels(foundWorkspace.channels);
        setUsers(foundWorkspace.users);
      }
    } else {
      obtenerWorkspaces()
        .then((data) => {
          if (data && Array.isArray(data.workspaces)) {
            localStorage.setItem('workspaces', JSON.stringify(data.workspaces));
            const foundWorkspace = data.workspaces.find(ws => ws.id === workspaceID);
            if (foundWorkspace) {
              setWorkspace(foundWorkspace);
              setWorkspaceName(foundWorkspace.name);
              setChannels(foundWorkspace.channels);
              setUsers(foundWorkspace.users);
            }
          }
        })
    }
  }, [workspaceID]);

  return (
    <div className="chanels-aside">
      <h2>{workspaceName} <IoIosArrowDown className='arrow'/></h2>
      
      <div className="channels">
        <h3><TiArrowSortedDown className='arrow'/>Canales</h3>
        {channels.map((channel) => (
            <Link key={channel.id} to={`/workspaces/${workspaceID}/${channel.id}`} className='link'>
            <p key={channel.id}># {channel.name}</p></Link>
          ))
        }
      </div>
      <div className="members">
        <h3><TiArrowSortedDown className='arrow'/>Miembros</h3>
        {users.length > 0 ? (
          <>
            {users.map((user, index) => (
             <Link key={index} to={`/workspaces/${workspaceID}/${user.id}`} className='link'> <img src={user.profile_image} className='member'/><p key={index}>{user.username}</p></Link>
            ))}
            <p>{users.length} miembros</p>
          </>
        ) : (
          <p>No hay miembros en este workspace</p>
        )}
      </div>
    </div>
  );
}

export default ChanelsAside;
