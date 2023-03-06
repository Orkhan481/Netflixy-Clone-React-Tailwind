import React from "react";
// Icons

import GetStartedForm from "./GetStartedForm";

const Entry = () => {
  return (
   
     
       <div className="w-full h-[90vh] border-b-[8px] border-[#222]">
         <div className="max-w-[950px] h-[80%] m-auto  flex flex-col justify-center items-center text-white ">
          <h1 className="w-[80%] text-[1.75rem] laptop:text-6xl tablet:text-5xl  leading-[30px] laptop:leading-[70px] text-center font-semibold tracking-[3px] p-4 ">
            Unlimited movies, TV  shows, and more.
          </h1>
          <h2 className="text-[1.125rem] laptop:text-2xl tablet:text-xl  leading-6 text-center laptop: tracking-[2px] p-2 mb-1 laptop:mb-3">
            Watch anywhere. Cancel anytime.
          </h2>
          {/* Form is here */}
         <GetStartedForm />
        </div>
       </div>
     
   
  );
};

export default Entry;
