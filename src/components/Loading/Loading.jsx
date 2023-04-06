import React from 'react';
import './Loading.css';

function Loading() {
  return (
    <div className='w-full flex justify-center items-center min-h-screen bg-white'>
        <div className='Loading-box flex flex-row justify-center w-1/4  h-10 items-center gap-5'>
            <div className='h-full bg-green-teal'></div>
            <div className='h-full bg-green-teal'></div>
            <div className='h-full bg-green-teal'></div>
            <div className='h-full bg-green-teal'></div>
            <div className='h-full bg-green-teal'></div>
        </div>
    </div>
  )
}

export default Loading;