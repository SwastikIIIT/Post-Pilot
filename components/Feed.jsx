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

  console.log(postData);

const handleOnchange=(e)=>{
      
}

const handleTagClick=()=>{
  
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

      <PrompList 
        postData={postData}
        handleTagClick={handleTagClick}
       />
    </section>
  )
}

export default Feed