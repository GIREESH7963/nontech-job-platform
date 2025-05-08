import React, { useState } from 'react';

const ChatBox = ({ professionalName }) => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleSendMessage = () => {
    setChatHistory([...chatHistory, { sender: 'Client', message }]);
    setMessage('');
  };

  return (
    <div className="mt-3">
      <h5>Chat with {professionalName}</h5>
      <div className="chat-box" style={{ height: '200px', overflowY: 'auto', backgroundColor: '#fff' }}>
        {chatHistory.map((chat, index) => (
          <div key={index} className={`chat-message ${chat.sender === 'Client' ? 'client' : 'professional'}`}>
            <strong>{chat.sender}: </strong>{chat.message}
          </div>
        ))}
      </div>
      <input
        type="text"
        className="form-control mt-2"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
      />
      <button className="btn btn-primary mt-2" onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default ChatBox;
