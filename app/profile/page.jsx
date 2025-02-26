'use client';
import { useSession } from 'next-auth/react'
import React, {useEffect,useState} from 'react'
import Profile from '@/components/Profile';
import Loader from '@/components/Loader';


const UserProfile = () => {
  
  const {data:session,status}=useSession();
  const [postData,setPostData]=useState([]);
  const [loading,setLoading]=useState(true);
  
    useEffect(()=>{
      const fetchPostData=async()=>{
            try{
            const response=await fetch(`/api/users/${session?.user?.id}/posts`);
            const posts=await response.json();
            setPostData(posts);
          }
        finally{
          setLoading(false);
        }
      }
        if(session?.user?.id)
          fetchPostData();
    },[])


    if(loading)
    return(<Loader/>)
  
  return (
    <Profile
      name={"My"}
      posts={postData}
      setPostData={setPostData}
    />
  )
}

export default UserProfile