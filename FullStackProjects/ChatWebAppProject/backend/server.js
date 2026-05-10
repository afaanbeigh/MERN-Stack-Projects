const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
const dbConnector = require('./db');
const Message = require('./messageModel');

const app = express();
app.use(cors());
app.use(express.json());

dbConnector();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*'
  }
});

// Socket connection
io.on('connection', (socket) => {
  console.log("User connected:", socket.id);

  socket.on('sendMessage', async (text) => {
    try {
      const msg = new Message({
        text,
        senderID: socket.id
      });

      await msg.save();

      io.emit('receiveMessage', msg);
    } catch (err) {
      console.error("Error saving message:", err);
    }
  });

  socket.on('disconnect', () => {
    console.log("User disconnected:", socket.id);
  });
});

server.listen(3001, () => console.log("Server running on port 3001"));