import React from "react";

function Topbar() {
  return (
    <div className='flex flex-row w-full justify-center space-x-1 font-sans text-white font-[700] blur(40px) max-w-[1240px] h-[55px]' >
       <div className="w-[64px] p-[10px] bg-[rgba(0,0,0,0.8)] flex justify-center items-center rounded-[4px] cursor-pointer">HOME</div>
      <div className="w-[100%] p-[10px] bg-[rgba(0,0,0,0.8)] flex justify-center items-center rounded-[4px]">
        <p className="w-[120px] text-center">COMP 1</p>
        <p className="w-[120px] text-center">COMP 2</p>
        <p className="w-[120px] text-center">COMP 3</p>
      </div>
      <div className="w-[64px] p-[10px] bg-[rgba(0,0,0,0.8)] flex justify-center items-center rounded-[4px] cursor-pointer">ICON</div>
    </div>
  );
}

export default Topbar;
