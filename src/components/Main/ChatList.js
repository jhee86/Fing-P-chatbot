import React from 'react';
import ChatItem from './ChatItem';
import './ChatList.css';

const ChatList = ({ chatItems, onAddChat, onSelectChat }) => {
  return (
    <div className="sidebar">
      <div className="logo">Fing-P CHATBOT</div>
      <div className="chat-list">
        {chatItems.map((item, index) => (
          <ChatItem 
            key={index} 
            name={item.name} 
            mode={item.mode} 
            modeClass={item.modeClass} 
            onClick={() => onSelectChat(index)} 
          />
        ))}
      </div>
      <button className="add-question" onClick={onAddChat}>Add Question</button>
      <button className="sign-out">Sign Out</button>
    </div>
  );
};

export default ChatList;
