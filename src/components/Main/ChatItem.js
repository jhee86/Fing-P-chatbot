import React from 'react';
import './ChatItem.css';

const ChatItem = ({ name, mode, modeClass, onClick }) => {
  return (
    <div className="chat-item" onClick={onClick}>
      <span className="chat-name">{name}</span>
      <p className={`chat-mode ${modeClass}`}>{mode}</p>
    </div>
  );
};

export default ChatItem;
