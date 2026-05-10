import { useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const socketRef = useRef(null);
  const myID = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    socketRef.current = io('http://localhost:3001');

    socketRef.current.on('connect', () => {
      myID.current = socketRef.current.id;
    });

    socketRef.current.on('receiveMessage', (msg) => {
      setMessages(prev => [...prev, msg]);
    });

    return () => socketRef.current.disconnect();
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = () => {
    if (!text.trim()) return;
    socketRef.current.emit('sendMessage', text);
    setText("");
  };

  const handleKey = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div className="chat-wrapper">
        <div className="chat-header">
          <div className="header-avatar">💬</div>
          <div className="header-info">
            <h2>Chat WebApp</h2>
          </div>
        </div>

        <div className="messages-area">
          {messages.length === 0 && (
            <div className="empty-state">
              <span className="empty-state-icon">🌐</span>
              <span>No messages yet. Say something!</span>
            </div>
          )}
          {messages.map((m) => (
            <div
              key={m._id}
              className={`msg-row ${m.senderID === myID.current ? 'mine' : 'theirs'}`}
            >
              <div className="bubble">{m.text}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        <div className="input-bar">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Type a message…"
          />
          <button className="send-btn" onClick={sendMessage}>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
          </button>
        </div>
      </div>
  );
}

export default App;