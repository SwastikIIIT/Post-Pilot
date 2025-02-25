'use client'
import Form from '@/components/Form';
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

const UpdatePost = () => {
  
  const {data:session,status}=useSession();
  const router=useRouter();
  const searchParams=useSearchParams();
  const postID=searchParams.get('id');

  const [post,setPost]=useState(
    {
    prompt:'',
    tag:''
    }
  )

  const createPost=async (e)=>{
         e.preventDefault();
         try{
             const apiCall=await fetch(`/api/prompt/${postID}`,{
              method:'PATCH',
              body:JSON.stringify(
                {
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

  useEffect(()=>{
     
    const fetchPost=async()=>{
          const update_vali_post=await fetch(`/api/prompt/${postID}`);
          const response=await update_vali_post.json();
          setPost({
            prompt:response?.prompt,
            tag:response?.tag
          })
    }
    fetchPost();
  },[postID])


  return (
    <Form
      post={post}
      task={'Edit'}
      setPost={setPost}
      handlesubmit={createPost}
    />
    )
}

export default UpdatePost;