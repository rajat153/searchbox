const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const data = require('./Data')


const app = express()

app.use(cors())
app.use(express.urlencoded({limit:"30mb",extended:true}))

app.get('/',(req,res)=>{
    res.send("<h1>Home Page</h1>")
})

app.get('/ads',(req,res)=>{
    res.send(data)
})

app.listen('7000',()=>{
    console.log("Server is running on port no. 7000 ")
})