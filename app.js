const express = require('express')
const mongoose = require('mongoose')
const user = require('./routes/user')
const posts = require('./routes/posts')

const app = express()
const port = 4000

const url = 'mongodb://localhost/facebookClone'

mongoose.connect(url, {useNewUrlParser: true})
const con = mongoose.connection

con.on("open", () => {
    console.log('MongoDB connected!');
})

app.use(express.json())

app.use('/user', user)
app.use('/posts', posts)

app.listen(port, () => {
    console.log(`app starting on ${port}`);
})