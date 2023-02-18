import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {  useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice';
import CommentsContainer from './CommentsContainer';

const WatchPage = () => {

    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"));

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu())
    },[])
  return (
    <div className='flex flex-col'>
    <div className=''>
        <iframe 
        width="1200" 
        height="600" 
        src={"https://www.youtube.com/embed/" + searchParams.get("v")} 
        title="YouTube video player"  
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        >
        </iframe>
    </div>
    <CommentsContainer/>
    </div>
  )
}

export default WatchPage