import React from 'react'

const ForKids = () => {
  return (
    <div className='w-full min-h-[60vh] '>
       <div className='h-full w-full  py-[70px] laptop:px-[143px] flex flex-col-reverse tablet:flex-row justify-between items-center'>
        {/* Picture is here */}
       <div className='w-[90%] tablet:w-[48%] mx-auto tablet:mr-4  '>
            <img src="https://occ-0-3467-1432.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f" alt="" />
        </div>
        {/* Texts are here */}
        <div className='w-[80%] tablet:w-[52%] mx-auto tablet:pl-2 laptop:pl-12'>
                <h1 className='text-[1.625rem] tablet:text-[3.125rem] text-center tablet:text-left leading-[1.1] mb-1 font-medium'>Create profiles for kids.</h1>
                <h2 className='text-[1.125rem] tablet:text-[1.625rem] text-center tablet:text-left mt-[.75rem] mb-[.25rem]'>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h2>
        </div>
       </div>
    </div>
  )
}

export default ForKids