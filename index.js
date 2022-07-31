const express = require('express');
const App = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const { ConnectionDB } = require('./DB/ConnectionDB');

const port = process.env.PORT || 5001;

ConnectionDB()

App.use(bodyParser.json())
App.use(cors())

App.get('/',(req,res)=>res.send("hello"))

const userRoute = require('./Routes/userRoutes')
const quizRoute = require('./Routes/quizRoutes')
App.use('/user',userRoute)
App.use('/quiz',quizRoute)

App.listen(port,()=>console.log("Connected to PORT",+port));