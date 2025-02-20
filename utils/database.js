import mongoose from "mongoose";
let isConnect=false;

export const connectMongo=async()=>{
    
    mongoose.set('strictQuery',true);
    if(isConnect===false)
    {
        
        try{
            await mongoose.connect(process.env.MONGODB_URI,{dbName:"share_prompt"}
            );
            isConnect=true;

        }
        catch(error)
        {
            console.log(error);
        }
    }
    else
    console.log("Mongodb connected");
}