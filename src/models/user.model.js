import mongoose, {Schema} from "mongoose"

const userSchema = new Schema(
    {
        username : {
            type:String,
            requried:true,
            lowercase:true,
            unique:true,
            trim:true,
            index:true, //Searching purposes be aware of it performance hampering parameter
        },
        email : {
            type:String,
            requried:true,
            lowercase:true,
            trim:true,
            unique:true,
        },
        fullname : {
            type:String,
            requried:true,
            lowercase:true,
           trim:true,
           index:true,
        },
        avatar : {
            type:String, //cloudanary Image..
            requried:true,
        },
        coverImage : {
            type:String, //cloudanory Image..
        },
        watchHistory: [
            {
                type:Schema.Types.ObjectId,
                ref:"User",
            }
        ],
        password: {
            type:String,
            required:[true,"Password is required"],
        },
        refreshToken: {
            type:String,
        }
    },
    {
        timestamps:true, //created at updated at
    }
);

export const User = mongoose.model("User",userSchema);