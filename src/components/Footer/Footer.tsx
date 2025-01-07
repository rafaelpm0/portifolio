import React from "react";
import { LiaLinkedinIn } from "react-icons/lia";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";


// precisa refatorar. Um teste para aprender o uso puro de tailwindcss

function Footer() {
  return (
    <footer className="w-[100%] max-w-[90rem] mb-[120px] ">
      <main
        className="bg-[#212429]  max-w-[90rem]  rounded-b-[16px] flex flex-col items-center pb-[40px] pt-[80px] relative
       shadow-[0_2.5px_2px_0_rgba(0,0,0,0.06),0_1px_0_0_rgba(0,0,0,0.05),0_2px_2px_0_rgba(0,0,0,0.15),0_4px_6px_0_rgba(0,0,0,0.1)]"
      >
        <div className="w-[100%] max-w-[90rem] bg-[#fff] rounded-b-[16px] h-[8px] absolute inset-0"></div>
        <div className="flex flex-row  w-full max-w-[1240px] justify-between  pl-[1rem] pr-[1rem]  pb-[60px]">
          <div className="flex">
            <div className={`flex flex-col gap-[40px] ${footerPages} `}>
              <p className="hover:text-[#ff4c00]">COMP 1</p>
              <p className="hover:text-[#ff4c00]">COMP 2</p>
              <p className="hover:text-[#ff4c00]">COMP 3</p>
              <p className="hover:text-[#ff4c00]">COMP 4</p>
            </div>
          </div>
          <div className="flex flex-row gap-[16px]">
            <LiaLinkedinIn size={35}  className="cursor-pointer text-[#fff] hover:text-[#ff4c00]" />
            <FaFacebookF size={30}  className="cursor-pointer  text-[#fff] hover:text-[#ff4c00]" />
            <RiTwitterXFill size={30}  className="cursor-pointer  text-[#fff] hover:text-[#ff4c00]" />
            <IoLogoInstagram size={30} className="cursor-pointer  text-[#fff] hover:text-[#ff4c00]" />
          </div>
        </div>
        <div className="w-full pl-[1rem] pd-[1rem] flex flex-row text-[#919499] font-[Untitled Sans] gap-[40px] max-w-[1240px] font-[700]">
          <p className="hover:text-[#ff4c00]">Politica de privacidade</p>
          <p className="hover:text-[#ff4c00]">Termos de uso</p>
          <p className="hover:text-[#ff4c00]">Contato</p>
          <p className="ml-[auto] hover:text-[#ff4c00]">© 2025 Rafael Pinho Medeiros</p>
        </div>
      </main>
    </footer>
  );
}

export default Footer;

const footerPages = "w-max cursor-pointer text-[#fff] font-[Untitled Sans] text-[40px] font-[700] leading-[125%] tracking-[-0.8px]";
