const express = require('express');
const cors = require('cors');
const http = require('http'); 
const { Server } = require('socket.io'); 
require('dotenv').config();

const app = express();
const server = http.createServer(app); 
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const io = new Server(server, {
  cors: { origin: '*', methods: ['GET', 'POST', 'PUT'] }
});

io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on('task_moved', (data) => {
    socket.broadcast.emit('update_board', data);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

app.use('/api/tasks', require('./routes/taskRoutes'));

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});