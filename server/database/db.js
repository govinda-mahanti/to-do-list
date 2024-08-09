import mongoose from "mongoose";

export const Connecction =()=>{
    mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true})
}