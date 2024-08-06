const express = require('express');
const path = require('path');

const app = express();

const filepath=path.join(__dirname, 'public');

// app.use(express.static(filepath));

app.get('', (req, res) =>{
    res.sendFile(`${filepath}/index.html`)
})
app.get('/about', (req, res) =>{
    res.sendFile(`${filepath}/about.html`)
})
app.get('/help', (req, res) =>{
    res.sendFile(`${filepath}/help.html`)
})
app.get('*', (req, res) =>{
    res.sendFile(`${filepath}/404Page.html`)
})

app.listen(5000);