'use client'

import { useState } from "react"
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";


const PromptCard = ({post,handleDelete,handleTagClick}) => {

  const {data:session}=useSession();
  const pathname=usePathname();
  const router=useRouter();

  const [copy,setCopy]=useState(false);
  const handleCopyBtn=()=>{
     setCopy(true);

     navigator.clipboard.writeText(post.prompt);

     setTimeout(()=>{
         setCopy(false);
     },3000)
  }

  const handleEdit=()=>{
     router.push(`/update-post?id=${post._id}`);
  }


  return (
    <div className="prompt_card">
       <div className="flex justify-between items-start gap-5">
         
            <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
                  <Link href=
                  {post.creator._id===session?.user?.id?"/profile":`/profile/${post.creator._id}?name=${post.creator.username}`}>
                      <Image
                        src={post.creator?.image}
                        alt="USER IMAGE"
                        width={40}
                        height={40}
                        className="rounded-full object-contain"
                      />
                </Link>
           </div>
                
                  <div className="flex flex-col">
                    <h3 className="font-satoshi font-semibold text-gray-900">{post.creator?.username}</h3>
                    <p className="font-inter text-sm text-gray-500">{post.creator?.email}</p>
                  </div>

              <div className="copy_btn" onClick={handleCopyBtn}>
                <Image 
                src={copy?"/images/tick.svg":"/images/copy.svg"} 
                alt="Copy button"
                width={12} height={12}/>
              </div>
       </div>

      <p className="my-4 font-satoshi text-sm text-gray-500">{post.prompt}</p>
      <p className="font-inter text-sm blue_gradient cursor-pointer">{post.tag.map((tag,index)=>(<span key={index} onClick={()=>handleTagClick(tag)}>#{tag}{' '}</span>))}</p>

      {session?.user?.id===post.creator._id && pathname==='/profile' && (
        <div className="mt-5 flex justify-between items-center gap-4 border-t border-gray-100 pt-3">
          <p className="font-inter text-sm cursor-pointer green_gradient" onClick={handleEdit}>Edit</p>
          <p className="font-inter text-sm cursor-pointer orange_gradient" onClick={()=>handleDelete(post)}>Delete</p>
        </div>
      )}
    </div>
  )
}

export default PromptCard