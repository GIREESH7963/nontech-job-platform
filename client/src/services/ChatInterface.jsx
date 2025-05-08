import React, { useState } from 'react';

const ChatInterface = ({ provider, onReject }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input) return;
    setMessages([...messages, { text: input, sender: 'you' }]);
    setInput("");
  };

  return (
    <div className="chat-box border mt-3 p-3">
      <h5>Chat with {provider.name}</h5>
      <div className="chat-log mb-2" style={{ height: '150px', overflowY: 'auto', border: '1px solid #ccc', padding: '5px' }}>
        {messages.map((m, i) => (
          <div key={i} style={{ textAlign: m.sender === 'you' ? 'right' : 'left' }}>
            <small>{m.sender}: {m.text}</small>
          </div>
        ))}
      </div>
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type..." className="form-control mb-1" />
      <button onClick={sendMessage} className="btn btn-primary btn-sm me-2">Send</button>
      <button onClick={onReject} className="btn btn-danger btn-sm">Reject</button>
    </div>
  );
};

export default ChatInterface;
