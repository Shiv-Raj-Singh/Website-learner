import dotenv from 'dotenv';
dotenv.config()
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose';

import globalError from './Auth/globalError.js';
import { AppError } from './Auth/Validation.js';
import registerUser, { loginUser } from './Controller/controller.js';
const app = express()

import multer from 'multer';

app.use(cors())
app.use(multer().any())

//  converting Data in Json 
app.use(express.json())

app.get('/', (req,res )=>{
    res.send('Hii welcome on Shiv Raj App ')
})
app.post('/register' , registerUser)
app.post('/login' , loginUser)

//  MongoDB Data Base connect by mongoose 
mongoose.set('strictQuery', false);
mongoose.connect(`${process.env.MONGO_DB}`)
.then(v=>console.log('DataBase Connected !'))
.catch(e=>console.log(e.message))




app.all('/*' , (req, res, next)=>{
    next(new AppError(`${req.url} Not Found !` , 404))
})

app.use(globalError)
app.listen(process.env.PORT , ()=>{
    console.log('App is Running on PORT ' + process.env.PORT);
})

