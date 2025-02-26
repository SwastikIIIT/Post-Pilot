"use client"
import React, { useEffect, useState } from 'react'
import PrompList from './PrompList';
import { Pagination } from 'antd';
import Loader from './Loader';

const Feed = () => {

 const [postData,setPostData]=useState([]);
 const [searchText,setSearchText]=useState('');
 const [loading,setLoading]=useState(true);
 const [page,setPage]=useState(1);
 const postPerPage=3;

useEffect(()=>{
  const fetchPostData=async()=>{
       try{
        const response=await fetch("/api/prompt");
        const posts=await response.json();
        setPostData(posts);
     }
    catch(e)
    {
          console.log(e);
    }
    finally{
           setLoading(false);
    }
  }
     fetchPostData();
  },[])  

  console.log(postData);

const filteredPost=postData.filter((item)=>{
       return (item.prompt.toLowerCase().includes(searchText.toLowerCase()) ||
      item.tag.includes(searchText.toLowerCase()) ||
      item.creator.username.toLowerCase().includes(searchText.toLowerCase()) )
    })

const indLastPost=postPerPage*page;
const indFirstPost=indLastPost-postPerPage;
const newPosts=filteredPost.slice(indFirstPost,indLastPost);

console.log(newPosts);
const handleTagClick=(tagText)=>{
       setSearchText(tagText);
       setPage(1);
}


if(loading)
  return (
     <Loader/>
  )
  return (
    <section className='feed'>
      <div className='relative w-full flex justify-center items-center'>
        <input 
          type='text'
          value={searchText}
          onChange={(e)=>(setSearchText(e.target.value))}
          placeholder='Search for a tag or username..'
          className='search_input peer'
        />
      </div>

      <PrompList 
        postData={newPosts}
        handleTagClick={handleTagClick}
       />

     <Pagination className='py-3 mb-4'  
        align="center" 
        defaultCurrent={1} 
        total={filteredPost.length} 
        pageSize={postPerPage}
        onChange={(page)=>(setPage(page))}
        showQuickJumper />
    </section>
  )
}

export default Feed