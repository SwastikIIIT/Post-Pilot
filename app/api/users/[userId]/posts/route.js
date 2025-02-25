import Prompt from "@/models/CreatePrompt";
import { connectMongo } from "@/utils/database"

export async function GET(req,{params})
{
     try
     {
           await connectMongo();
           const userId=await params?.userId;

           const userPosts=await Prompt.find({creator:userId}).populate('creator');

           return new Response(JSON.stringify(userPosts),{status:'200'})
     }
     catch(error)
     {
      console.error("Error in GET /api/users/[userId]/posts:", error);
      return new Response("Failed to fetch posts", { status: 500 });
     }
}