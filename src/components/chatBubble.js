import React from 'react';

const ChatWindow = ({ messages }) => {
  return (
    <div className="chat-window">
      {messages.map((message, index) => (
        <div key={index} className={`message ${message.sender === 'me' ? 'sent' : 'received'}`}>
          <p>{message.text}</p>
        </div>
      ))}
    </div>
  );
};

export default ChatWindow;