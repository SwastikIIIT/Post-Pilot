import Prompt from "@/models/CreatePrompt";
import { connectMongo } from "@/utils/database";


//GET read
export async function GET(req,{params}) {
    
    try{
             await connectMongo();
             const userid=params?.id;

             
             const post =await Prompt.findById(userid).populate('creator');

            return new Response(JSON.stringify(post), { status: 200 });
        }
        
    catch(error)
    {
        return new Response("Error here while get request",{status:'500'})
    }
}


//Patch
export async function PATCH(req,{params}) {
    
    const {prompt,tag}=await req.json();
    try{
         await connectMongo();

         const userid=params?.id;
         const dataEarlier=await Prompt.findById(userid).populate('creator');
         dataEarlier.prompt=prompt;
         dataEarlier.tag=tag;

         await dataEarlier.save();

         return new Response(JSON.stringify(dataEarlier),{status:'200'})
    }
    catch(error)
    {
        return new Response("Error here while patch request",{status:'500'})
    }
}

//Delete
export async function DELETE(req,{params}) {
    try{
        await connectMongo();

        const userid=await params?.id;
        await Prompt.findByIdAndDelete(userid);
        
        return new Response("Prompt deleted successfully",{status:'400'})
   }
   catch(error)
   {
       return new Response("Error here while delete request",{status:'500'})
   }
    
}