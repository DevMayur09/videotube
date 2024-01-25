import dotenv from "dotenv"
import connectDB from "./db/connectDB.js";
import { app } from "./app.js";


//As this are the enviroment varible must be available to all module as early application load...
//Here we are configure dotenv with ie we have provided with path of enviroment varible...
dotenv.config({
    path: './env'
})
connectDB()
.then(() => {
    app.on("error", (error) =>{
        console.log("MONGODB CONNECTION ERROR : ",error);
        throw error;
    })

    app.listen(process.env.PORT || 8000, () =>{
        console.log("Server is listening at port : ", process.env.PORT)
    })
})
.catch((error) => {
    console.log("MONGODB CONNECTION FAILED !!!",error);
})