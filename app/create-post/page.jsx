'use client'
import Form from '@/components/Form';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const CreatePost = () => {
  
  // const [submit,setSubmit]=useState(false); // for adding disabling feature on button
  const {data:session,status}=useSession();
  const router=useRouter();

  const [post,setPost]=useState(
    {
    prompt:'',
    tag:''
    }
  )

  const createPrompt=async (e)=>{
         e.preventDefault();
         try{
             const apiCall=await fetch("/api/prompt/new",{
              method:'POST',
              body:JSON.stringify(
                {
                  userId:session?.user?.id,
                  prompt:post.prompt,
                  tag:post.tag
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
      setPost={setPost}
      handlesubmit={createPrompt}
    />
    )
}

export default CreatePost;