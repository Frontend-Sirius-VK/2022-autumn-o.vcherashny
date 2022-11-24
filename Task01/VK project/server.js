'use strict';

const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('.'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '.', 'index.html'));
});

app.get('/login', (req,res) => {
    // TODO
});

app.listen(port, () => {
    console.log(`Server listening port ${port}`);
});