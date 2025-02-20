import { connectMongo } from "@/utils/database";
import Prompt from "@/models/CreatePrompt";

export async function GET(req,res)
{
    try{
             await connectMongo();
             const postData=await Prompt.find({}).populate('creator');

             return new Response(JSON.stringify(postData),{status:'201'});
    }
    catch(error)
    {
        return Response("Error in fetching data from database",{status:'500'})
    }
    
}