"use client"
import React, { useEffect, useState } from 'react'
import PrompList from './PrompList';

const Feed = () => {

 const [postData,setPostData]=useState([]);
 const [searchText,setSearchText]=useState('');

 useEffect(()=>{
     const fetchPostData=async()=>{
        const response=await fetch("/api/prompt");
        const posts=await response.json();
        setPostData(posts);
     }
     fetchPostData();
  },[]) 

const handleOnchange=(e)=>{

}


  return (
    <section className='feed'>
      <form className='relative w-full flex justify-center items-center'>
        <input 
          type='text'
          onChange={handleOnchange}
          placeholder='Search for a tag or username..'
          className='search_input peer'
        />
      </form>

      <PrompList postData={postData}/>
    </section>
  )
}

export default Feed