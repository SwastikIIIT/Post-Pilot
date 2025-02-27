'use client';
import {useParams, useSearchParams} from 'next/navigation';
import Profile from '@/components/Profile';
import { useEffect, useState } from 'react';
import Loader from '@/components/Loader';

const UserIDProfile = () => {
     const params=useParams();
     console.log(params);
     const searchParams=useSearchParams();
     const [loading,setLoading]=useState(true);
     const username=searchParams.get("name");
     
     const [userPost,setUserPost]=useState([]);

     useEffect(()=>{
         const fetchUserPosts=async()=>{
            try
            {
            const data=await fetch(`/api/users/${params?.userId}/posts`);
            const response=await data.json();
            setUserPost(response);
            }
            finally
            {
                setLoading(false);
            }
          }
         if(params?.userId)
         fetchUserPosts();
     },[params.id])

     if(loading)
      return (<Loader/>)
  return (
    <Profile
        name={username}
        posts={userPost}
    />
  )
}

export default UserIDProfile