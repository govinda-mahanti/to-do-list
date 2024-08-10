import mongoose from "mongoose";

const Connecction =()=>{
    mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true})

    mongoose.connection.on('connected',()=>{
        console.log('Connected to MongoDB')
    })
    mongoose.connection.on('disconnected',()=>{
        console.log('disConnected to MongoDB')
    })
    mongoose.connection.on('error',()=>{
        console.log('erroe while the connection',error.message)
    })
} 

export default Connecction