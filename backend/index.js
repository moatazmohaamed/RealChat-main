const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const path = require('path')
const port = 3000

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')))

server.listen(port, () => {
    console.log(`server is running on port ${port}`)
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})


io.on('connection', (socket) => {
    socket.on('join', (data) => {
        socket.join(data.room)
        io.in(data.room).emit('message', `New user Joined ${data.room} room!`)
    })

    socket.on('message', (data) => {
        console.log(`message ${data.msg}`)
        io.in(data.room).emit('message', data.msg)
    });

    socket.on('disconnect', () => {
        console.log('user disconnected')
        io.emit('message', 'user disconnected')
    })
})