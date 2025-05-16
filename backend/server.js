require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const {
    Server
} = require('socket.io');
const http = require('http');

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const groupRoutes = require('./routes/groupRoutes');
const groupMessagesRoutes = require('./routes/groupMessages');
const messageRoutes = require('./routes/messageRoutes');
const privateMessageRoutes = require('./routes/privateMessages');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

connectDB();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/groups', groupRoutes);
app.use('/api/groups', groupMessagesRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/private-messages', privateMessageRoutes);

// Socket.IO connection handling
io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    // Join a chat room
    socket.on('join_room', (roomId) => {
        socket.join(roomId);
        console.log(`User ${socket.id} joined room: ${roomId}`);
    });

    // Handle private messages
    socket.on('private_message', (data) => {
        io.to(data.room).emit('receive_message', data);
    });

    // Handle group messages
    socket.on('group_message', (data) => {
        io.to(data.room).emit('receive_group_message', data);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));