const express = require('express');
const path = require('path');

const app = express();

const filepath=path.join(__dirname, 'public');

app.use(express.static(filepath));

app.listen(5000);