import express from "express";
import dotenv from "dotenv"
import Connecction from "./database/db.js";

dotenv.config({
    path: './.env'
})

const app=express()

Connecction();

app.listen(process.env.PORT, ()=>console.log(`your server is running in port ${process.env.PORT}`))