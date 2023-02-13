import React from 'react'

const VideoCard = ({info}) => {
    console.log(info);
    const {snippet , statistics} = info;
    const {channelTitle , title , thumbnails} = snippet;
  return (
    <div className='p-2 m-2 w-72 shadow-lg rounded-2xl'>
        <img className='rounded-xl '
        alt="thumbnail" src={thumbnails.medium.url}/>    
        <ul>
            <li className='font-bold'>{title}</li>
            <li className='pt-2'>{channelTitle}</li>
            <li>{statistics.viewCount}</li>
        </ul>
        </div>
  )
}

export default VideoCard