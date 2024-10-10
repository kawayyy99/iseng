// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import HeadInject from './components/headInject';
import ChatList from './components/chatList';
import ChatBubble from './components/chatBubble';
import TextInput from './components/textInput';
import { socket } from './socket';  // Import socket instance

const App = () => {
  const [users, setUsers] = useState([]);        // List of active users
  const [messages, setMessages] = useState([]);  // Messages in current conversation
  const [selectedUser, setSelectedUser] = useState(null);  // Currently selected user

  useEffect(() => {
    // Fetch active users (you can replace this with API call)
    setUsers([
      { name: 'Alice' },
      { name: 'Bob' }
    ]);

    // Listen for incoming messages
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Cleanup socket listener on component unmount
    return () => socket.off('message');
  }, []);

  const sendMessage = (message) => {
    const newMessage = {
      text: message,
      sender: 'me',
      recipient: selectedUser.name,
    };

    // Emit message to server via socket
    socket.emit('sendMessage', newMessage);

    // Add the message to local state
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const selectUser = (user) => {
    setSelectedUser(user);
    setMessages([]);  // Clear previous messages when switching users
  };
  return (
    <>
    <HeadInject />
    <Header />
    <div className="app">
      <div className="sidebar">
        <ChatList users={users} selectUser={selectUser} />
      </div>
      <div className="main-chat">
        {selectedUser ? (
          <>
            <ChatBubble messages={messages} />
            <TextInput sendMessage={sendMessage} />
          </>
        ) : (
          <p>Select a user to start chatting</p>
        )}
      </div>
    </div>
    </>
  );
};

export default App;
