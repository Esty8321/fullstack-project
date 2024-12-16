require("dotenv").config()
const express=require('express')
const cors=require('cors')
const app=express()
const PORT=process.env.PORT||6000
const corsOptions=require('./config/corsOptions')
const connectToDB=require('./config/dbConn')
const mongoose =require('mongoose')

//this message is to try do commit in github
connectToDB()
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.static('public'))

app.use('/api/tasks',require('./routes/taskRoute'))
app.use('/api/article',require('./routes/articleRoute'))

//mongoose help in the connection to the database
mongoose.connection.once('open',()=>{
    console.log('succeed to connect!')
app.listen(PORT,()=>{console.log(`server running in port ${PORT}`)})})

mongoose.connection.on('error',(err)=>{console.log('didnt succeed to connect for the database')})
//message for git after finish with the server file

console.log("to see the changes after do pull")

//now i try with Sari 