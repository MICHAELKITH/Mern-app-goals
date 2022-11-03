const express = require('express')

const dotenv = require('dotenv').config()

const app = express()

const port = process.env.PORT || 3000;

app.use('/api/goals' , require('./routes/routesGoals'));

app.listen(port, ()=>console.log(`app listening on ${port}`))
