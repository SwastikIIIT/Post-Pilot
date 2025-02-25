import React from 'react'
import PromptCard from './PromptCard'

const PrompList = ({postData,handleTagClick}) => {
  return (
    <div className='prompt_layout mt-16'>
        {postData.map((item=>(
            <PromptCard
                key={item._id}
                post={item}
            />
        )))}
    </div>
  )
}

export default PrompList