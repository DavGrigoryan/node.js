const express = require('express');
const router = express.Router();
const middleware = require("../Middleware/checkAuth.middleware");
const path = require('path');


router.get('/', middleware.middleware1, (req, res, next) => {
    res.sendFile(path.resolve(__dirname, '../static', 'index.html'))
    // res.send('Response send to client::  MIDDLEWARE_1');

});

router.get('/features', middleware.middleware2, (req, res) => {
    res.sendFile(path.resolve(__dirname, '../static', 'features.html'))
    // res.send('Response send to client:: MIDDLEWARE_2');
})

module.exports = router;