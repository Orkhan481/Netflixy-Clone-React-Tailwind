import React from 'react'

const Download = () => {
  return (
    <div className='min-h-[60vh] px-[45px] py-[70px] border-b-4 border-[#222]'>
       <div className='h-full mx-[20px] laptop:mx-[143px] flex  flex-col-reverse tablet:flex-row justify-between items-center gap-y-6'>
       <div className='w-[100%] h-full relative'>
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" />
            
            <div className='w-[100%] h-[40%] tablet:w-[50%] tablet:h-[25%]  absolute bottom-5 left-[50%] -translate-x-1/2 px-2 py-6 tablet:py-3 pr-[16px] flex items-center justify-between gap-x-3 bg-black rounded-lg border-2 border-[#222] '>
            
              <img className='h-full' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="" />
             

              <div className='w-full'>
                  <h3>Stranger Things</h3>
                  <h5 className='text-[.7rem] text-[#0071eb]'>Downloading...</h5>
              </div>

              <div className='h-[3rem] w-[6rem] laptop:h-[4rem] laptop:w-[4rem] bg-download-gif bg-cover outline-1 -outline-offset-[2px]'>
              </div>
            </div>
        </div>
        {/* Texts here */}
        <div className='w-[80%] mx-auto laptop:pl-12 tablet:h-[52%]'>
                <h1 className='w-full text-center tablet:text-left text-[1.625rem] tablet:text-[3.125rem] leading-[1.1] mb-1 tablet:font-medium'>Download your shows to watch offline.</h1>
                <h2 className='w-full text-center tablet:text-left text-[1.125rem] tablet:text-[1.625rem] mt-[.75rem] mb-[.25rem]'>Save your favorites easily and always have something to watch.</h2>
        </div>
       </div>
    </div>
  )
}

export default Download