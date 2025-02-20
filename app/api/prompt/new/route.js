import Prompt from "@/models/CreatePrompt";
import { connectMongo } from "@/utils/database";
import mongoose from "mongoose";

export  async function POST(req,res)
{
    
    const {userId,prompt,tag}=await req.json();
    // console.log(userId);
    try{
         await connectMongo()
         const dbPrompt=await Prompt.create({
            creator:userId,
            prompt:prompt,
            tag:tag
         })

         return new Response(JSON.stringify(dbPrompt),{status:'201'})
    }
    catch(error)
    {
       return new Response("Failed to create new prompt",{status:'500'});
    }

   //  return Response.json("HEllo from swastik ", { status: 200 });
}