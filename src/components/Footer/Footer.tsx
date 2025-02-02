import React from "react";
import { LiaLinkedinIn } from "react-icons/lia";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";


// precisa refatorar. Um teste para aprender o uso puro de tailwindcss

function Footer() {
  return (
    <footer className="w-[100%] max-w-[78rem] ">
      <main
        className="bg-[#212429]  max-w-[78rem] lg:mb-[40px] lg:rounded-b-[16px] flex flex-col items-center pb-[40px] px-[2rem] pt-[80px] relative
       shadow-[0_2.5px_2px_0_rgba(0,0,0,0.06),0_1px_0_0_rgba(0,0,0,0.05),0_2px_2px_0_rgba(0,0,0,0.15),0_4px_6px_0_rgba(0,0,0,0.1)]"
      >
        <div className="w-[100%] max-w-[90rem] bg-[#fff] rounded-b-[16px] h-[8px] absolute inset-0 top-[-1px]"></div>
        <div className="flex flex-col gap-[60px]  w-full max-w-[1240px] justify-between pb-[60px] sm:flex-row sm:gap-0">
          {/* <div className="flex">
            <div className={`flex flex-col gap-[32px] ${footerPages} `}>
              <p className="hover:text-[#ff4c00]">COMP 1</p>
              <p className="hover:text-[#ff4c00]">COMP 2</p>
              <p className="hover:text-[#ff4c00]">COMP 3</p>
              <p className="hover:text-[#ff4c00]">COMP 4</p>
            </div>
          </div> */}
          <div className="flex flex-row gap-[16px]">
            <LiaLinkedinIn size={35}  className="cursor-pointer text-[#fff] hover:text-[#ff4c00]" />
            <FaFacebookF size={30}  className="cursor-pointer  text-[#fff] hover:text-[#ff4c00]" />
            <RiTwitterXFill size={30}  className="cursor-pointer  text-[#fff] hover:text-[#ff4c00]" />
            <IoLogoInstagram size={30} className="cursor-pointer  text-[#fff] hover:text-[#ff4c00]" />
          </div>
        </div>
        <div className="w-full pd-[1rem] flex flex-col md:flex-row gap-[16px] md:gap-[40px]  text-[#919499] font-[Untitled Sans] max-w-[1240px] font-[700]">
          <p className="hover:text-[#ff4c00]">Politica de privacidade</p>
          <p className="hover:text-[#ff4c00]">Termos de uso</p>
          <p className="hover:text-[#ff4c00]">Contato</p>
          <p className="mt-[1rem] md:mt-0 md:ml-[auto] hover:text-[#ff4c00]">© 2025 Rafael Pinho Medeiros</p>
        </div>
      </main>
    </footer>
  );
}

export default Footer;

const footerPages = "w-max cursor-pointer text-[32px] sm:text-[40px] text-[#fff] font-[Untitled Sans] text-[40px] font-[700] leading-[125%] tracking-[-0.8px]";
