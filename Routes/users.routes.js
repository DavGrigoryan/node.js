const middleware = require("../Middleware/checkAuth.middleware")

// app.use(express.static('static'));



// app.get('/', (req, res) => {
// 	res.sendFile(path.resolve(__dirname, 'static', 'index.html'))
// })
//
// app.get('/features', (req, res) => {
// 	res.sendFile(path.resolve(__dirname, 'static', 'features.html'))
// })



app.get('/', middleware.middleware1, (req, res) => {
    res.sendFile(path.resolve(__dirname, 'static', 'index.html'))
})