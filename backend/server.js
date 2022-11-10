const express = require('express')
const colors = require ("colors")
const connectDB = require('./config/db')
const dotenv = require('dotenv').config()
const {errorHandler} = require("./middleware/errorMiddleware")
const port = process.env.PORT || 3000;

connectDB()
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))



app.use('/api/goals' , require('./routes/routesGoals'));
app.use(errorHandler)
app.listen(port, ()=>console.log(`app listening on ${port}`))
