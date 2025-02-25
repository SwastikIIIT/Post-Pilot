import Prompt from "@/models/CreatePrompt";
import { connectMongo } from "@/utils/database";
import mongoose from "mongoose";


export  async function POST(req,res)
{
    
    const {userId,prompt,tag}=await req.json();
   
    try{
         try{
         await connectMongo();
         console.log("Mongodb is connected hurraaah hahhahaahhahha")
         }
         catch(error)
         {
            console.log("mongodb is not connnected")
         }

         const dbPrompt=await Prompt.create({
            creator:userId,
            prompt:prompt,
            tag:tag
         })

         return new Response(JSON.stringify(dbPrompt),{status:'201'})
    }
    catch (error) {
      console.error("Detailed error:", {
        name: error.name,
        message: error.message,
        stack: error.stack
      });

      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
}
}
