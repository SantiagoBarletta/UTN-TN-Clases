import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Chanels.css';
import { IoIosArrowDown } from "react-icons/io";
import { FaTrash } from "react-icons/fa";
import NuevoMensajeForm from '../MensajeForm/NuevoMensajeForm';

const ChannelMessages = () => {
  const { workspaceID, channelID } = useParams();
  const [messages, setMessages] = useState([]);
  const [channelName, setChannelName] = useState('');

  useEffect(() => {
    const storedWorkspaces = localStorage.getItem('workspaces');

    if (storedWorkspaces) {
      const workspaces = JSON.parse(storedWorkspaces);
      const foundWorkspace = workspaces.find(ws => ws.id === workspaceID);
      if (foundWorkspace) {
        const foundChannel = foundWorkspace.channels.find(ch => ch.id === channelID);
        if (foundChannel) {
          setMessages(foundChannel.messages || []);
          setChannelName(foundChannel.name);
        }
      }
    } else {
      obtenerWorkspaces()
        .then((data) => {
          if (data && Array.isArray(data.workspaces)) {
            localStorage.setItem('workspaces', JSON.stringify(data.workspaces));
            const foundWorkspace = data.workspaces.find(ws => ws.id === workspaceID);
            if (foundWorkspace) {
              const foundChannel = foundWorkspace.channels.find(ch => ch.id === channelID);
              if (foundChannel) {
                setMessages(foundChannel.messages || []);
                setChannelName(foundChannel.name);
              }
            }
          }
        })
        .catch((error) => console.error('Error fetching workspaces:', error));
    }
  }, [workspaceID, channelID]);

  const handleNewMessage = (newMessage) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const handleDeleteMessage = (messageId) => {
    const storedWorkspaces = JSON.parse(localStorage.getItem('workspaces'));
    const foundWorkspace = storedWorkspaces.find(ws => ws.id === workspaceID);
    if (foundWorkspace) {
      const foundChannel = foundWorkspace.channels.find(ch => ch.id === channelID);
      if (foundChannel) {
        const updatedMessages = foundChannel.messages.filter(message => message.id !== messageId);
        foundChannel.messages = updatedMessages;
        localStorage.setItem('workspaces', JSON.stringify(storedWorkspaces));
        setMessages(updatedMessages);
      }
    }
  };

  return (
    <div className='channel'>
      <div className='messages-header'>
        <h2># {channelName} <IoIosArrowDown className='arrow' /></h2>
      </div>
      <div className="messages">
        {messages.length > 0 ? (
          messages.map((message) => (
            <div key={message.id} className="message">
              <img src={message.author_image} alt={message.author} className='avatar' />
              <div className="message-content">
                <p><strong>{message.author}</strong> <span className="message-date">{new Date(message.date).toLocaleString()}</span></p>
                <p className="message-text">{message.text}</p>
              </div>
              <button onClick={() => handleDeleteMessage(message.id)} className="delete-button">
                <FaTrash />
              </button>
            </div>
          ))
        ) : (
          <p className="no-messages">No hay mensajes en este canal</p>
        )}
      </div>
      <NuevoMensajeForm onNewMessage={handleNewMessage} />
    </div>
  );
};

export default ChannelMessages;
