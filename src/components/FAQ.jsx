import React, { useState } from "react";
// Package
import { Menu } from "@headlessui/react";
// Icons
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import GetStartedForm from "./GetStartedForm";

const FAQ = () => {
  const [click, setClick] = useState(false);



  const handleClick = (event) => {
    setClick((click) => !click);
  };

  return (
    <div className="px-[15px] tablet:px-[45px] py-[70px]">
      <h1 className="text-[1.625rem] tablet:text-[3.125rem] leading-[1.1] mb-1 text-center">
        Frequently Asked Questions
      </h1>

      {/* Dropdown */}
      <div className="flex flex-col items-center justify-center my-8">
        {/* 1 */}
        <Menu>
          {({ open }) => (
            <>
              <Menu.Button
                onClick={handleClick}
                className="w-[100%] tablet:w-[80%] laptop:w-[60%] flex justify-between r mb-2 py-[.8rem] pl-[2.2rem] pr-[1.2rem] bg-[#303030] text-left text-[1.125rem] tablet:text-[1.625rem] "
              >
                {({ active }) => (
                  <>
                    What is Netflix?
              
                     { !open && (
                           <AiOutlinePlus
                           size={32}
                         />
                      )}
                    
                     { open && (
                          <AiOutlineClose 
                          size={32}
                          />
                      )}
                    
                  </>
                )}
              </Menu.Button>
           
                <>
                  <Menu.Items className="w-[100%] tablet:w-[80%] laptop:w-[60%] p-[31.2px]  mb-2 bg-[#303030] text-[1.125rem] tablet:text-[1.625rem]">
                    <Menu.Item>
                      <p>
                        Netflix is a streaming service that offers a wide
                        variety of award-winning TV shows, movies, anime,
                        documentaries, and more on thousands of
                        internet-connected devices.
                      </p>
                    </Menu.Item>
                    <br />
                    
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          className={`${active && "bg-blue-500"}`}
                          href="/account-settings"
                        >
                          You can watch as much as you want, whenever you want
                          without a single commercial – all for one low monthly
                          price. There's always something new to discover and
                          new TV shows and movies are added every week!
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </>
              
            </>
          )}
        </Menu>
        {/* 2 */}
        <Menu>
          {({ open }) => (
            <>
              <Menu.Button
                onClick={handleClick}
                className="w-[100%] tablet:w-[80%] laptop:w-[60%] flex justify-between r mb-2 py-[.8rem] pl-[2.2rem] pr-[1.2rem] bg-[#303030] text-left text-[1.125rem] tablet:text-[1.625rem]"
              >
                {({ active }) => (
                  <>
                    How much does Netflix cost?
              
                     { !open && (
                           <AiOutlinePlus
                           size={32}
                         />
                      )}
                    
                     { open && (
                          <AiOutlineClose 
                          size={32}
                          />
                      )}
                    
                  </>
                )}
              </Menu.Button>
           
                <>
                  <Menu.Items className="w-[100%] tablet:w-[80%] laptop:w-[60%] p-[31.2px]  mb-2 bg-[#303030] text-[1.125rem] tablet:text-[1.625rem]">
                    <Menu.Item>
                      <p>
                      Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR7.99 to EUR11.99 a month. No extra costs, no contracts.
                      </p>
                    </Menu.Item>
                   
                  </Menu.Items>
                </>
              
            </>
          )}
        </Menu>
         {/* 3 */}
         <Menu>
          {({ open }) => (
            <>
              <Menu.Button
                onClick={handleClick}
                className="w-[100%] tablet:w-[80%] laptop:w-[60%] flex justify-between r mb-2 py-[.8rem] pl-[2.2rem] pr-[1.2rem] bg-[#303030] text-left text-[1.125rem] tablet:text-[1.625rem]"
              >
                {({ active }) => (
                  <>
                    Where can I watch?
              
                     { !open && (
                           <AiOutlinePlus
                           size={32}
                         />
                      )}
                    
                     { open && (
                          <AiOutlineClose 
                          size={32}
                          />
                      )}
                    
                  </>
                )}
              </Menu.Button>
           
                <>
                  <Menu.Items className="w-[100%] tablet:w-[80%] laptop:w-[60%] p-[31.2px]  mb-2 bg-[#303030] text-[1.125rem] tablet:text-[1.625rem]">
                    <Menu.Item>
                      <p>
                      Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                      </p>
                    </Menu.Item>
                    <br />
                    
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          className={`${active && "bg-blue-500"}`}
                          href="/account-settings"
                        >
                         You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </>
              
            </>
          )}
        </Menu>
        {/* 4 */}
        <Menu>
          {({ open }) => (
            <>
              <Menu.Button
                onClick={handleClick}
                className="w-[100%] tablet:w-[80%] laptop:w-[60%] flex justify-between r mb-2 py-[.8rem] pl-[2.2rem] pr-[1.2rem] bg-[#303030] text-left text-[1.125rem] tablet:text-[1.625rem]"
              >
                {({ active }) => (
                  <>
                   How do I cancel?
              
                     { !open && (
                           <AiOutlinePlus
                           size={32}
                         />
                      )}
                    
                     { open && (
                          <AiOutlineClose 
                          size={32}
                          />
                      )}
                    
                  </>
                )}
              </Menu.Button>
           
                <>
                  <Menu.Items className="w-[100%] tablet:w-[80%] laptop:w-[60%] p-[31.2px]  mb-2 bg-[#303030] text-[1.125rem] tablet:text-[1.625rem]">
                    <Menu.Item>
                      <p>
                      Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                      </p>
                    </Menu.Item>
                   
                    
                  </Menu.Items>
                </>
              
            </>
          )}
        </Menu>
        {/* 5 */}
        <Menu>
          {({ open }) => (
            <>
              <Menu.Button
                onClick={handleClick}
                className="w-[100%] tablet:w-[80%] laptop:w-[60%] flex justify-between r mb-2 py-[.8rem] pl-[2.2rem] pr-[1.2rem] bg-[#303030] text-left text-[1.125rem] tablet:text-[1.625rem]"
              >
                {({ active }) => (
                  <>
                   What can I watch on Netflix?
              
                     { !open && (
                           <AiOutlinePlus
                           size={32}
                         />
                      )}
                    
                     { open && (
                          <AiOutlineClose 
                          size={32}
                          />
                      )}
                    
                  </>
                )}
              </Menu.Button>
           
                <>
                  <Menu.Items className="w-[100%] tablet:w-[80%] laptop:w-[60%] p-[31.2px]  mb-2 bg-[#303030] text-[1.125rem] tablet:text-[1.625rem]">
                    <Menu.Item>
                      <p>
                      Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                      </p>
                    </Menu.Item>
                  </Menu.Items>
                </>
              
            </>
          )}
        </Menu>
        {/* 6 */}
        <Menu>
          {({ open }) => (
            <>
              <Menu.Button
                onClick={handleClick}
                className="w-[100%] tablet:w-[80%] laptop:w-[60%] flex justify-between r mb-2 py-[.8rem] pl-[2.2rem] pr-[1.2rem] bg-[#303030] text-left text-[1.125rem] tablet:text-[1.625rem]"
              >
                {({ active }) => (
                  <>
                   Is Netflix good for kids?
              
                     { !open && (
                           <AiOutlinePlus
                           size={32}
                         />
                      )}
                    
                     { open && (
                          <AiOutlineClose 
                          size={32}
                          />
                      )}
                    
                  </>
                )}
              </Menu.Button>
           
                <>
                  <Menu.Items className="w-[100%] tablet:w-[80%] laptop:w-[60%] p-[31.2px]  mb-2 bg-[#303030] text-[1.125rem] tablet:text-[1.625rem]">
                    <Menu.Item>
                      <p>
                      The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
                      </p>
                    </Menu.Item>
                    <br />
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          className={`${active && "bg-blue-500"}`}
                          href="/account-settings"
                        >
                          Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </>
              
            </>
          )}
        </Menu>
         {/* 7 */}
         <Menu>
          {({ open }) => (
            <>
              <Menu.Button
                onClick={handleClick}
                className="w-[100%] tablet:w-[80%] laptop:w-[60%] flex justify-between r mb-2 py-[.8rem] pl-[2.2rem] pr-[1.2rem] bg-[#303030] text-left text-[1.125rem] tablet:text-[1.625rem]"
              >
                {({ active }) => (
                  <>
                    Why am I seeing this language?
              
                     { !open && (
                           <AiOutlinePlus
                           size={32}
                         />
                      )}
                    
                     { open && (
                          <AiOutlineClose 
                          size={32}
                          />
                      )}
                    
                  </>
                )}
              </Menu.Button>
           
                <>
                  <Menu.Items className="w-[100%] tablet:w-[80%] laptop:w-[60%] p-[31.2px]  mb-2 bg-[#303030] text-[1.125rem] tablet:text-[1.625rem]">
                    <Menu.Item>
                      <p>
                      Your browser preferences determine the language shown here.
                      </p>
                    </Menu.Item>
                  </Menu.Items>
                </>
              
            </>
          )}
        </Menu>
      </div>
       {/* GET Started Form */}
      <GetStartedForm />
    </div>
  );
};

export default FAQ;
