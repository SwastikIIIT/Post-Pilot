'use client'

import { POST } from "@/app/api/prompt/new/route";
import { useState } from "react"

const PromptCard = ({post}) => {

  const [copy,setCopy]=useState(false);
  const handleCopyBtn=()=>{
     setCopy(post.prompt);

     navigator.clipboard.writeText(post.prompt);

     setTimeout(()=>{
         setCopy('');
     },3000)
  }





  return (
    <div className="prompt_card">
       <div className="flex justify-between items-start gap-5">
         
              <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
                <Image
                  src={post.creator.image}
                  alt="USER IMAGE"
                  width={40}
                  height={40}
                  className="rounded-full object-contain"
                />
              </div>

              <div className="flex flex-col">
                <h3 className="font-satoshi font-semibold text-gray-900">{post.creator.username}</h3>
                <p className="font-inter text-sm text-gray-500">{post.creator.email}</p>
              </div>

              <div className="copy_btn" onClick={handleCopyBtn}>
                <Image 
                src={copy===post.prompt?"/images/tick.svg":"/images/copy.svg"} 
                width={12} height={12}/>
              </div>
       </div>

      <p className="my-4 font-satoshi text-sm text-gray-500">{post.prompt}</p>
      <p className="font-inter text-sm blue_gradient cursor-pointer" >{post.tag}</p>
    </div>
  )
}

export default PromptCard