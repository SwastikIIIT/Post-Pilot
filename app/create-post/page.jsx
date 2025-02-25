'use client'
import Form from '@/components/Form';
import { useSession } from "next-auth/react";
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const CreatePost = () => {
  
  const {data:session,status}=useSession();
  const router=useRouter();

  const [post,setPost]=useState(
    {
    prompt:'',
    tag:''
    }
  )

  const createPost=async (e)=>{
         e.preventDefault();
         try{
             const apiCall=await fetch('/api/prompt/new',{
              method:'POST',
              body:JSON.stringify(
                {
                  userId:session?.user?.id,
                  prompt:post.prompt,
                  tag:post.tag.split(',').map((tag)=>tag.trim())
                }
              )
             })
            
             if(apiCall.ok)
             router.push("/",{scroll:true});
        }
        
        catch(error)
        {
          console.log(error);
        }
  }

  return (
    <Form
     post={post}
      task={'Create'}
      setPost={setPost}
      handlesubmit={createPost}
    />
    )
}

export default CreatePost;