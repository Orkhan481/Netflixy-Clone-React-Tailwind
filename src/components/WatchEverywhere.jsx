import React from 'react'

const WatchEverywhere = () => {
  return (
    <div className='w-full min-h-[60vh] px-[45px] py-[90px] tablet:py-[70px] laptop:px-[70px] flex flex-col gap-x-6 items-center justify-center  tablet:flex-row  border-b-[8px] border-[#222]'>
    {/* Texts are here */}
      <div className='w-[80%] min-h-[20vh] mx-auto flex flex-col justify-center py-4  tablet:w-[50%]  laptop:pr-12 tablet:ml-[45px]'>
        <h1 className='text-[1.625rem] tablet:text-[3.125rem] text-center tablet:text-left leading-[1.1] mb-[0.5rem] font-medium'>Watch everywhere.</h1>
        <h2 className='text-[1.125rem] tablet:text-[1.625rem] text-center tablet:text-left  leading-[1.4] mb-[6.5px] mt-[19.5px]'>
        Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.
        </h2>
      </div>
{/* Video and image */}
      <div className='w-[400px] tablet:[550px] laptop:[800px] h-[300px] flex items-center justify-center mx-auto  relative '>
      
       

       
        <img className='w-full  absolute top-0 left-0  z-10 my-auto' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" alt="" />
        
          <video  className='w-[80%] absolute -top-1 left-10   flex items-center justify-center p-10 my-auto  overflow-hidden'  loop autoPlay playsInline muted>
            <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4"/>
          </video>
   
        
      </div>
  </div>
  )
}

export default WatchEverywhere