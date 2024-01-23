import dotenv from "dotenv"
import express from "express";
import connectDB from "./db/connectDB.js";
const app = express();

//As this are the enviroment varible must be available to all module as early application load...
//Here we are configure dotenv with ie we have provided with path of enviroment varible...
dotenv.config({
    path: './env'
})
connectDB();