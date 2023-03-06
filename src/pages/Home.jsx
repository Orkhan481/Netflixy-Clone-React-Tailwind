import React from "react";
import Header from "../components/Header";

import EnjoyTV from "../components/EnjoyTV";
import Download from "../components/Download";
import Seperator from "../components/Seperator";
import WatchEverywhere from "../components/WatchEverywhere";
import ForKids from "../components/ForKids";
import FAQ from "../components/FAQ";
import Entry from "../components/Entry";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="h-full bg-entry-pattern bg-cover object-cover">
      <div className="h-full bg-gradient-to-tl from-[#00000066] to-[#000000e6] ">
        {/* Header */}
        <Header />
        {/* Entry */}
        <Entry />
      
        {/* Enjoy TV */}
        <EnjoyTV />
       
        {/* Download */}
        <Download />
        
         {/* Watch Everywhere */}
         <WatchEverywhere />
        
         {/*For kids */}
         <ForKids />
       
          {/* FAQ */}
          <FAQ />
          
           {/* Footer */}
           <Footer />
      </div>
    </div>
  );
};

export default Home;
