const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')

app.use(express.static('./assets/js/'))

app.get('/', (req, res) => {
    res.sendFile('/index.html')
})


app.listen(3000, () => console.log('Server started'))