import React from 'react'

const EnjoyTV = () => {
  return (
    <div className='w-full min-h-[60vh] px-[45px] py-[90px] tablet:py-[70px] flex flex-col gap-x-6 items-center justify-center  tablet:flex-row  border-b-[8px] border-[#222]'>
      {/* Texts are here */}
        <div className='w-[100%] tablet:w-[40%] laptop:pr-12 text-center tablet:text-left'>
          <h1 className='text-[1.625rem] tablet:text-[3.125rem] leading-[1.1] mb-[0.5rem]'>Enjoy on your TV.</h1>
          <h2 className='text-[1.125rem] tablet:text-[1.625rem] leading-[1.4] mb-[6.5px] mt-[19.5px]'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
        </div>
{/* Video and image */}
        <div className='w-[390px] tablet:[470px] laptop:[530px] h-[300px] flex items-center justify-center my-auto  relative '>
          
          <img className='w-full  absolute top-0 left-0  z-10 my-auto' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" />
        
        <video  className='w-[100%] absolute top-3 left-0   flex items-center justify-center p-10 my-auto'  loop autoPlay playsInline muted>
          <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4"/>
        </video>
       
    
        </div>
    </div>
  )
}

export default EnjoyTV