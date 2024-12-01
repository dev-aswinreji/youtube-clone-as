import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOAPI } from '../utils/ApiContants';
import VideoCarts from './VideoCarts';

const VideoContainer = () => {
  const [video, setVideo] = useState([])

  useEffect(() => {
    getVideos();

  }, [])

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOAPI)
    const Json = await data.json()
    setVideo(Json.items)

  }
  return (
    <div className='flex flex-wrap justify-center gap-4 p-2'>
      {video.map((video) => (
        <VideoCarts key={video.id} 
        info={video} 
        />))}

    </div>
  )
}

export default VideoContainer
