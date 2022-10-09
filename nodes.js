const router = require('./Routers/router')
const express = require('express')
const mongoose = require('mongoose');
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/mydb')
.then(()=>{
    console.log('db conected');
})

app.use('/' , router);

const port = process.env.port || 5000;
app.listen(port , ()=>{
	console.log(`server listening at http://localhost:${port}`)
});