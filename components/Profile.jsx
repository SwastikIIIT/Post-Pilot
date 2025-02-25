import React from 'react'
import PromptCard from './PromptCard'

const Profile = ({posts,setPostData}) => {

   const handleDelete=async(post)=>{
      const hasConfirmed=confirm("Are you sure you want to delete this post?");
      if(hasConfirmed)
      {
          try{
                let deletedPost=await fetch(`/api/prompt/${post._id.toString()}`,{
                  method:'DELETE'
                }) 
                deletedPost=deletedPost.json();

                const  filteredPost=posts.filter((item)=>(
                  item._id!==post._id
                ))

                setPostData(filteredPost);
          }
          catch(err)
          {
            console.log(err);
          }
      }
    }
  

  return (
    <section className='w-full'>
        <h1 className='head_text blue_gradient text-left'>My Profile</h1>
        <p className='desc text-left'>Welcome to your personalized page</p>

        <div className='mt-10 prompt_layout'>
            {posts?.map((item)=>(
                <PromptCard
                    key={item._id}
                    post={item}
                    handleDelete={handleDelete}
                />
            ))}
        </div>

    </section>
  )
}

export default Profile