const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*',  // tighten this in production
}));
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.CORS_ORIGIN || '*',
    methods: ['GET', 'POST'],
  },
});

// Import patients data and router
const patients = require('./data/patient');
const patientsRouter = require('./api/patients');

app.use('/api/patients', patientsRouter);

// WebSocket connection and events
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('chatMessage', (msg) => {
    console.log(`Received chatMessage from ${socket.id}:`, msg);

    // TODO: replace this with AI response logic
    const aiResponse = `Senior AI Doctor: I see, let's analyze the symptoms carefully.`;

    // Send AI reply to client
    socket.emit('chatMessage', aiResponse);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Simple health check route
app.get('/', (req, res) => {
  res.send('Digital OPD Backend is running');
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
