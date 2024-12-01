import React from 'react'

const VideoCarts = ({info}) => {
    console.log(info)
    const {snippet,statistics}=info;
    const{channelTitle,title,thumbnails}=snippet;
  return (
    <div className="p-4 w-96  rounded-lg hover:shadow-xl transition-shadow duration-300">
      <img
        className="rounded-lg w-full"
        src={thumbnails.medium.url}
        alt="thumbnails"
      />
      <h3 className="font-bold text-lg mt-2 line-clamp-2">{title}</h3>
      <p className="text-sm text-gray-600 mt-1">{channelTitle}</p>
      <p className="text-sm text-gray-500">{Number(statistics.viewCount).toLocaleString()} views</p>
    </div>
  )
}

export default VideoCarts
