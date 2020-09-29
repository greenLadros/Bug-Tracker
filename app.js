//ivri korem 2020
/*
This is an api the lets you store bug reports from users and testers,
you can post, get, delete and patch reports with it.
*/

//init
//import
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
bugsRoute = require('./routes')

//Middlewares
app.use(cors())
app.use(bodyParser.json())
app.use('/bugs', bugsRoute)

//base api page
app.get('/', (request, response) => {
    response.send('we are home')
})

//Connect to DB
mongoose.connect(
process.env.DB_CONNECTION, // fill in your data base connection url
{ useNewUrlParser: true },
() => console.log("connected to database!"))

//start listening to server
app.listen('3000', ()=>{
    console.log('server started')
})