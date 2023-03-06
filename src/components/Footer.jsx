import React, {useState} from "react";

// Packages
import { Listbox } from "@headlessui/react";

// ICONS
import { MdOutlineLanguage } from "react-icons/md";

//
const languages = [
    { id: 1, name: "English", unavailable: false },
    { id: 2, name: "Turkce", unavailable: false },
  ];

const Footer = () => {

    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
 

  return (
    <div className="laptop:mx-[193px] px-[45px] py-[40px] ">
      <div className="mx-[10px] tablet:mx-[25px] laptop:mx-[50px] text-[#737373]">
        <a 
          href="https://help.netflix.com/en/contactus"
        >
         <p className="mb-[30px]"> Questions? Contact us.</p>
        </a>

        <div className="w-full  pb-[20px]">
            {/* Column 1 */}
          <ul className="w-full  grid grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 place-items-stretch">
            <a className="mb-4 pr-3 hover:underline text-xs tablet:text-sm laptop:text-base" href="https://help.netflix.com/support/412">
              <li>FAQ</li>
            </a>
            <a className="mb-4 pr-3 hover:underline text-xs tablet:text-sm laptop:text-base" href="">
              <li>Investor Relations</li>
            </a>
            <a className="mb-4 pr-3 hover:underline text-xs tablet:text-sm laptop:text-base" href="">
              <li>Privacy</li>
            </a>
            <a className="mb-4 pr-3 hover:underline text-xs tablet:text-sm laptop:text-base" href="">
              <li>Speed Test</li>
            </a>
          
          {/* Column 2 */}
          
            <a className="mb-4 pr-3 hover:underline text-xs tablet:text-sm laptop:text-base"  href="">
              <li>Help Center</li>
            </a>
            <a className="mb-4 pr-3 hover:underline text-xs tablet:text-sm laptop:text-base" href="">
              <li>Jobs</li>
            </a>
            <a className="mb-4 pr-3 hover:underline text-xs tablet:text-sm laptop:text-base" href="">
              <li>Cookie Preferences</li>
            </a>
            <a className="mb-4 pr-3 hover:underline text-xs tablet:text-sm laptop:text-base" href="">
              <li>Legal Notices</li>
            </a>
          
          {/* Column 3 */}
          
            <a className="mb-4 pr-3 hover:underline text-xs tablet:text-sm laptop:text-base" href="">
              <li>Account</li>
            </a>
            <a className="mb-4 pr-3 hover:underline text-xs tablet:text-sm laptop:text-base" href="">
              <li>Ways to Watch</li>
            </a>
            <a className="mb-4 pr-3 hover:underline text-xs tablet:text-sm laptop:text-base" href="">
              <li>Corporate Information</li>
            </a>
            <a className="mb-4 pr-3 hover:underline text-xs tablet:text-sm laptop:text-base" href="">
              <li>Only on Netflix</li>
            </a>
          
          {/* Column 4 */}
         
            <a className="mb-4 pr-3 hover:underline text-xs tablet:text-sm laptop:text-base" href="">
              <li>Media Center</li>
            </a>
            <a className="mb-4 pr-3 hover:underline text-xs tablet:text-sm laptop:text-base" href="">
              <li>Terms of Use</li>
            </a>
            <a className="mb-4 pr-3 hover:underline text-xs tablet:text-sm laptop:text-base" href="">
              <li>Contact Us</li>
            </a>
          </ul>
          {/* Language */}
          <Listbox value={selectedLanguage} onChange={setSelectedLanguage}>
          <div className="w-[142px] h-[52px] mt-[20px] bg-black text-white  cursor-pointer border border-white border-opacity-50 focus:border-opacity-100 z-20">
            <Listbox.Button className=" w-full h-full  flex gap-x-1 items-center font-semiboldpy-2 px-3 rounded-sm">
                <MdOutlineLanguage size={14}/>
              {selectedLanguage.name}
            </Listbox.Button>
            <Listbox.Options 
            >
              {languages.map((language) => (
                <Listbox.Option
                 className=" w-full  px-[22px]  bg-gray-400 hover:bg-indigo-400"
                  key={language.id}
                  value={language}
                  disabled={language.unavailable}
                >
                  {language.name}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </Listbox>
        {/* Netflix */}
        <div className="w-full mt-[40px] flex justify-between">
            <h2 className="text-xs tablet:text-sm  laptop:text-base">Netflix Azerbaijan</h2>
            <h3 className="text-primary-red font-medium text-[13px] tablet:text-sm  laptop:text-base">This clone was created by Orkhan</h3>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
