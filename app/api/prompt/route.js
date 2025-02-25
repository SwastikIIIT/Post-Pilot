import { connectMongo } from "@/utils/database";
import Prompt from "@/models/CreatePrompt";
import mongoose from "mongoose";

export async function GET(req,res)
{
    try{
             await connectMongo();
             const postData=await Prompt.find({}).populate('creator');

             return new Response(JSON.stringify(postData),{status:'200'});
    }
    catch(error)
    {
        return new Response("Error in fetching data from database",{status:'500'})
    }
    
}