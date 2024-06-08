import React, { useState } from 'react';
import ChatList from './ChatList';
import ChatWindow from './ChatWindow';
import './MainPage.css';

const MainPage = () => {
  const [chats, setChats] = useState([
    { name: 'Chat 1', mode: 'Live Mode', modeClass: 'live', messages: [], isToggleOn: true }
  ]);
  const [currentChatIndex, setCurrentChatIndex] = useState(0);

  const handleSendMessage = (message) => {
    const newChats = [...chats];
    newChats[currentChatIndex].messages.push({ text: message, sender: 'user' });
    setChats(newChats);
    setTimeout(() => {
      newChats[currentChatIndex].messages.push({ text: `Received: ${message}`, sender: 'bot' });
      setChats([...newChats]);
    }, 1000); // 1초 후에 봇의 응답 추가
  };

  const handleAddChat = () => {
    const newChatName = `Chat ${chats.length + 1}`;
    const newChat = { name: newChatName, mode: 'Live Mode', modeClass: 'live', messages: [], isToggleOn: true };
    setChats([...chats, newChat]);
    setCurrentChatIndex(chats.length); // 새 채팅으로 전환
  };

  const handleModeToggle = () => {
    const newChats = [...chats];
    newChats[currentChatIndex].isToggleOn = !newChats[currentChatIndex].isToggleOn;
    newChats[currentChatIndex].mode = newChats[currentChatIndex].isToggleOn ? 'Live Mode' : 'FAQ Mode';
    newChats[currentChatIndex].modeClass = newChats[currentChatIndex].isToggleOn ? 'live' : 'faq';
    setChats(newChats);
  };

  const handleSelectChat = (index) => {
    setCurrentChatIndex(index);
  };

  return (
    <div className="chatbot-container">
      <ChatList chatItems={chats} onAddChat={handleAddChat} onSelectChat={handleSelectChat} />
      <ChatWindow 
        messages={chats[currentChatIndex].messages} 
        onSendMessage={handleSendMessage} 
        currentMode={chats[currentChatIndex].mode} 
        isToggleOn={chats[currentChatIndex].isToggleOn} 
        onModeToggle={handleModeToggle} 
      />
    </div>
  );
};

export default MainPage;
