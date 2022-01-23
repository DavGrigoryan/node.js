const express = require('express');
const path = require('path');
const middleware = require("./Middleware/checkAuth.middleware");


const PORT = process.env.PORT ?? 3000;
const app = express();


app.get('/', middleware.middleware1, (req, res) => {
    res.sendFile(path.resolve(__dirname, 'static', 'index.html'))
})

app.get('/download', (req, res) => {
    res.download(path.resolve(__dirname, 'static', 'index.html'));
})

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`);
})