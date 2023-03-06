import React, { useState } from "react";
import logo from "../images/logo.svg";
// Packages
import { Listbox } from "@headlessui/react";

// ICONS
import { MdOutlineLanguage } from "react-icons/md";

//
const languages = [
  { id: 1, name: "English", unavailable: false },
  { id: 2, name: "Turkce", unavailable: false },
];

const Header = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  return (
    <header className="w-full h-[80px] pt-5 px-5 desktop:px-14 laptop:px-10 flex items-center justify-between relative z-10 mobile:bg-yellow-400 tablet:bg-green-600 laptop:bg-blue-600">
      {/* Logo is here */}
      <div className="mr-auto cursor-pointer">
        <img className="w-[120px] md:w-[145px] lg:w-[167px]  " src={logo} alt="Logo is here" />
      </div>
      {/* Language dropdown is here */} 
 
        <Listbox value={selectedLanguage} onChange={setSelectedLanguage}>
          <div className="absolute top-8 right-[120px]  bg-black text-white  cursor-pointer border border-white border-opacity-50 focus:border-opacity-100 ">
            <Listbox.Button className=" w-[102px] h-[35px]  flex gap-x-1 items-center font-semiboldpy-2 px-3 rounded-sm">
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
       {/* SIGN IN button is here */}
       <button className="h-[34px] flex items-center text-white font-semibold bg-primary-red font-base py-[7px] px-[17px]  rounded">Sign In</button>
    </header>
  );
};

export default Header;
