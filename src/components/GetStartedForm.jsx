import React from 'react'

import { AiOutlineRight } from "react-icons/ai";

const GetStartedForm = () => {
  return (
    <form className=" w-[80%] laptop:w-[700px] tablet:w-[600px] mx-auto pt-[0.85rem] ">
    <h3 className="w-[60%] laptop:w-[90%] mx-auto text-base laptop:text-xl leading-2 laptop:leading-6 text-center font-normal laptop:font-medium  tracking-tighter mb-5">
      Ready to watch? Enter your email to create or restart your
      membership.
    </h3>
    <div className="h-[70px] w-full px-[10px] pt-[10px] flex flex-col  items-center justify-between gap-y-6 tablet:flex-row">
      {/* Input Area */}
      <div className="w-full h-[45px] tablet:h-[70px] relative ">
        <input
          required={true}
          className="h-[45px] tablet:h-[70px] w-full outline-none text-black text-sm tablet:text-base px-2 peer valid:pt-[12px]"
          type="text"
        />
        <small className="absolute top-1/2 -translate-y-1/2 left-2 pointer-events-none text-[#8c8c8c]  text-[12px] tablet:text-[16px]  tablet:font-medium peer peer-valid:top-2 tablet:peer-valid:top-4 peer-valid:text-base transition-all ease-linear">
          Email adress
        </small>
        <small className="absolute -bottom-6  left-1 text-[#ffa00a] text-[15px] hidden peer-valid:block ">
          Email is required
        </small>
      </div>
      {/* Get Started Button */}
      <button
        type="submit"
        className="h-[45px] w-[50%] tablet:h-[70px] flex items-center justify-center  gap-x-1 tablet:gap-x-2 px-[20px] bg-primary-red text-center text-[1.875rem] "
      >
        <span className="py-[8px]  text-lg tablet:text-2xl laptop:text-3xl">Get Started</span>
        <AiOutlineRight />
      </button>
    </div>
  </form>
  )
}

export default GetStartedForm