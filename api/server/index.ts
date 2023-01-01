require('dotenv').config()
//const express = require('express');
import express, { Request, Response } from 'express'
import { exit } from 'process';

import authRouter from './routes/auth';

import todoRouter from './routes/todo';

const morgan = require('morgan');
const helmet = require('helmet');
const mongoose = require('mongoose');

let session = require('express-session')
const app = express();


app.use(morgan('combined'));
//helmet is for security
app.use(helmet());
app.use(express.json());

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))


mongoose.connect(`${process.env.MONGO_DB}`, {
          
            useNewUrlParser: true
       

        }, (error:any) => {
            if (error){
                console.log('Error: ' + error)
            }
            else{
            console.log("DB connect")
            }
        } );
   



app.get('/', (request: Request, response: Response) =>{
    response.status(200).send('Hello Swati!');
});

app.use ('/auth', authRouter);
app.use ('/todos', todoRouter);

app.listen(process.env.APP_PORT, () => {
    console.log(`Server Running on http://localhost:${process.env.APP_PORT}`);
});