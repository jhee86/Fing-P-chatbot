import React from 'react';
import './ChatWindow.css';

const ChatWindow = () => {
  return (
    <div className="chat-window">
      <div className="chat-header">
        <h2>Welcome To Fing-P Chatbot</h2>
        <p>핑프챗봇은 학교 생활에 대한 여러 정보를 알고 있습니다! 무엇이든 물어봐주세요.</p>
      </div>
      <div className="chat-input-container">
        <input type="text" placeholder="질문을 입력하세요" />
        <button className="send-button">→</button>
      </div>
    </div>
  );
};

export default ChatWindow;
