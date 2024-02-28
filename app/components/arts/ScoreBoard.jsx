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
      <div className="relative w-1/2 h-16">
      <Image             
            src="\textbox.svg"
            width={100}
            height={100}
            alt="Shreshta Logo"
            className=" w-full h-full absolute top-0 left-0"
      />

      </div>

  </div>;

};

export default ScoreBoard;
