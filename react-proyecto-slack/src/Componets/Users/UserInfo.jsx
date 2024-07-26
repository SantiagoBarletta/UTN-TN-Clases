import React from 'react';
import { Link } from 'react-router-dom';
import { ThreeDotsVertical, ArrowLeft } from 'react-bootstrap-icons';
import { MdOutlinePhone, MdOutlineVideocam, MdSearch, MdLock, MdOutlineTimelapse } from 'react-icons/md';
import { FaRegBell, FaRegBookmark } from 'react-icons/fa';
import { AiOutlinePicture } from 'react-icons/ai';
import { PiLockLaminatedFill } from 'react-icons/pi';
import './UserInfo.css';

const UserInfo = ({ user, workspaceID, channelID }) => {
  if (!user) {
    return <div>Cargando...</div>;
  }

  return (
        <div className="infoContainer">
          <div className="infoHeader">
            <Link to={`/workspaces/${workspaceID}/${channelID}`}> <ArrowLeft className="arrow"/> </Link>
              <div className="bioInfo">
                <img src={user.profile_image || ''} alt={user.username} className="userImage" />
                    <div className="contact-info">
                      <div className="contact-name">{user.firstname} {user.lastname}</div>
                      <div className="contact-nro">{user.email}</div>
                    </div>
              </div>
            <ThreeDotsVertical className="iconos" />
          </div>
          <div className="opciones">
              <div className="icon-container"><MdOutlinePhone className="iconos" /><p>Llamar</p></div>
              <div className="icon-container"><MdOutlineVideocam className="iconos" /><p>Video</p></div>
              <div className="icon-container"><MdSearch className="iconos" /><p>Buscar</p></div>
          </div>
      <div className="decorado">
        <div className="avanzada"><FaRegBell className="iconos" /><p>Notificaciones</p></div>
        <div className="avanzada"><AiOutlinePicture className="iconos" /><p>Visibilidad de archivos multimedia<span className="sub">Desactivada</span></p></div>
        <div className="avanzada"><FaRegBookmark className="iconos" /><p>Mensajes conservados</p></div>
        <div className="avanzada"><MdLock className="iconos"/><p>Cifrado<span>Los mensajes y las llamadas están cifrados de extremo a extremo. Toca para verificarlo</span></p></div>
        <div className="avanzada"><MdOutlineTimelapse className="iconos" /><p>Mensajes temporales <span>90 días</span></p></div>
        <div className="avanzada"><PiLockLaminatedFill className="iconos" /><p>Restringir chat<span>Restringe y oculta este chat en este dispositivo</span></p></div>
      </div>
    </div >
    
  );
}

export default UserInfo;
