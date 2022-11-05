const express = require('express')

const dotenv = require('dotenv').config()
const {errorHandler} = require("./middleware/errorMiddleware")

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

const port = process.env.PORT || 3000;

app.use('/api/goals' , require('./routes/routesGoals'));
app.use(errorHandler)

app.listen(port, ()=>console.log(`app listening on ${port}`))
