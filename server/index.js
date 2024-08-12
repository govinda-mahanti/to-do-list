import express from "express";
import dotenv from "dotenv"
import Connecction from "./database/db.js";
import cors from 'cors';
import Routes from "./routes/route.js"
import bodyParser from "body-parser";
dotenv.config({
    path: './.env'
})

const app=express()
app.use(cors());
app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))

app.use('/',Routes)
Connecction();

app.listen(process.env.PORT, ()=>console.log(`your server is running in port ${process.env.PORT}`))