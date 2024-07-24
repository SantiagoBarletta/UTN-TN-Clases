import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Chanels.css';

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

  return (
    <div className='channel'>
      <h2>{channelName}</h2>
      <div className="messages">
        {messages.length > 0 ? (
          messages.map((message) => (
            <div key={message.id} className="message">
              <img src={message.author_image} alt={message.author} />
              <div>
                <p><strong>{message.author}</strong> <span>{new Date(message.date).toLocaleString()}</span></p>
                <p>{message.text}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No hay mensajes en este canal</p>
        )}
      </div>
    </div>
  );
};

export default ChannelMessages;
