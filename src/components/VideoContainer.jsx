import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOAPI } from '../utils/ApiContants';
import VideoCarts from './VideoCarts';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [video, setVideo] = useState([])

  useEffect(() => {
    getVideos();

  }, [])

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOAPI)
    const Json = await data.json()
    console.log(Json,'data is here');

    setVideo(Json.items)

  }
  return (
    <div className='flex flex-wrap justify-center gap-4 p-2'>
      {video.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCarts
            info={video} />
        </Link>
      ))}


    </div>
  )
}

export default VideoContainer
