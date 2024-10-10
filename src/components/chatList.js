import React from 'react';

const ChatList = ({ users, selectUser }) => {
  return (
    <div className="chat-list">
      <h3>Active Users</h3>
      <ul>
        {users.map((user, index) => (
          <li key={index} onClick={() => selectUser(user)}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
