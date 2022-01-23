const express = require('express');
const path = require('path');
// const mid = require('./middlewares.js');

const PORT = process.env.PORT ?? 3000;
const app = express();

app.use(express.static('static'));

// app.get('/', (req, res) => {
// 	res.sendFile(path.resolve(__dirname, 'static', 'index.html'))
// })
//
// app.get('/features', (req, res) => {
// 	res.sendFile(path.resolve(__dirname, 'static', 'features.html'))
// })

app.get('/download', (req, res) => {
    res.download(path.resolve(__dirname, 'static', 'index.html'));
})

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`);
})