'use client';
import { useSession } from 'next-auth/react'
import React, {useEffect,useState } from 'react'
import Profile from '@/components/Profile';


const UserProfile = () => {
  
  const {data:session,status}=useSession();
  const [postData,setPostData]=useState([]);

    useEffect(()=>{
          const fetchPostData=async()=>{
            const response=await fetch(`/api/users/${session?.user?.id}/posts`);
            const posts=await response.json();
            setPostData(posts);
        }
        if(session?.user?.id)
        fetchPostData();
    },[])




  return (
    <Profile
      posts={postData}
      setPostData={setPostData}
    />
  )
}

export default UserProfile