const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const server = require('http').createServer(app);
const io = require('socket.io')(server)

app.use(express.static('./assets/js/'))

app.get('/', (req, res) => {
    res.sendFile('/index.html')
})

io.on('connection', socket => {
    console.log('socket connected')

    socket.emit("mess", 'from server')
});





io.listen(4000)
server.listen(3000, () => console.log('Server started'))