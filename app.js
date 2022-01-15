const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
	res.send('Hello world!')
})

app.get('/home', (req, res) => {
	res.send('This is home page!')
})

app.listen(port, () => {
	console.log(`server started`)
})