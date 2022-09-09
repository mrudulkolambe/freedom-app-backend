const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const app = express()
const port = 5500
const userRouter = require('./Routes/user')
require('dotenv').config()
app.use(cors())


mongoose.connect(`${process.env.MONGODB_URI}`, () => {
	console.log('Connected To Database!');
});

app.use("/user", userRouter)
app.use("/property", userRouter)

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.listen(port, () => {
	console.log(`Freedom app listening on port ${port}`)
})