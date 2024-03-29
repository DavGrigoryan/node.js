const express = require('express');
const path = require('path');
const routes = require('./Routes/users.routes');

const PORT = process.env.PORT ?? 3000;
const app = express();

app.use('/', routes);

app.get('/download', (req, res) => {
    res.download(path.resolve(__dirname, 'static', 'index.html'));
})

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`);
})