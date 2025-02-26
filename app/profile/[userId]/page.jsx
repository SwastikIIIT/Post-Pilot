'use client';
import {useParams, useSearchParams} from 'next/navigation';
import Profile from '@/components/Profile';
import { useEffect, useState } from 'react';

const UserIDProfile = () => {
     const params=useParams();
     console.log(params);
     const searchParams=useSearchParams();
     const username=searchParams.get("name");
     
     const [userPost,setUserPost]=useState([]);

     useEffect(()=>{
         const fetchUserPosts=async()=>{
            const data=await fetch(`/api/users/${params?.userId}/posts`);
            const response=await data.json();
            setUserPost(response);
         }
         if(params?.userId)
         fetchUserPosts();
     },[params.id])

  return (
    <Profile
        name={username}
        posts={userPost}
    />
  )
}

export default UserIDProfile