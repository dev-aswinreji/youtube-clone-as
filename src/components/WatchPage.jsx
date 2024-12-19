import React from 'react'
import { useSearchParams } from 'react-router-dom'
import CommentContainer from './CommentContainer'
import LiveChat from './LiveChat'

const WatchPage = () => {

    const [searchParams]= useSearchParams()
  return (
    <div className='flex flex-col '>
    <div className='px-4 flex'>
      <div className=''>
      <iframe width="900" height="500" src={"https://www.youtube.com/embed/" + searchParams.get("v")} 
      title="YouTube video player"
      
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
      gyroscope; picture-in-picture; web-share"
       allowFullScreen>
      </iframe>
      </div>
      <div className='m-2 p-2 w-full'>
        <LiveChat/>
      </div>
    </div>
    <CommentContainer/>
    </div>
  )
  
}
 
export default WatchPage
