import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'; dotenv.config()
import routes from './routes/index.js'
import cors from 'cors';

mongoose.connect("mongodb://localhost:27017/node-auth-api", () =>{
    console.log("Db is connected!")
})

const app = express()


app.use(cors())
app.use(express.json())


// api routes
app.use('/api/', routes)


app.listen(5000, ()=> {
    console.log("Server is running!")
})