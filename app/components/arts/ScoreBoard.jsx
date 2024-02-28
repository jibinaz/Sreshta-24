import Image from "next/image";
import React from "react";


const ScoreBoard = () => {
  return <div className="w-screen h-screen ">
     <div className=" pl-28 pt-20 bangers text-6xl md:text-8xl  text-[#FFE179] HeroTextMainTwo">
            score Board
      </div>
     <div className=" pl-28 pt-2 text-2xl md:text-3xl dog text-[#375E5E]">
        Four teams, one trophy. The competition is<br />fair and square so that the win is deserved.
      </div> 
      <div className="relative w-1/3 h-16 ml-16 mt-8 z-0 flex items-center ">
        <p className="absolute top-[1px] ml-10 pt-4 dog text-3xl ">Green House won 2st in Music Mania +16 pts</p>
      <Image             
            src="\textbox.svg"
            width={100}
            height={100}
            alt="Shreshta Logo"
            className=" w-[734px] h-[78px] top-0 left-0"
      />
      </div>

  </div>;

};

export default ScoreBoard;
