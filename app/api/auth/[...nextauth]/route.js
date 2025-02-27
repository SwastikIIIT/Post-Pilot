import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import { connectMongo } from "@/utils/database"
import User from "@/models/user"


export const handler=NextAuth({
    providers: [
        GoogleProvider({
        clientId:process.env.GOOGLE_ID,
        clientSecret:process.env.GOOGLE_CLIENT_SECRET,
      }),
      // GithubProvider({
      //   clientId: process.env.GITHUB_ID,
      //   clientSecret: process.env.GITHUB_SECRET,
      // })  
    ],
      
      callbacks:{
        async signIn({user,account,profile}) {
          try{
            await connectMongo();
    
            //checks if user is in db
            const exist=await User.findOne({email:profile.email});
           
            //creates user if not present in db
            if(!exist)
            {
              await User.create({
                email:profile?.email,
                username:profile?.name.replace(" ","").toLowerCase(),
                image:profile?.picture 
              })
            }
            return true
          }
          catch(error)
          {
            console.log(error);
            return false;
          }
        },
        
          async session({ session, user, token }) {
          const userOfSession=await User.findOne({email:session.user.email})
          session.user.id=userOfSession._id.toString();
          return session
        },
        
      },
  })

  export {handler as GET,handler as POST};