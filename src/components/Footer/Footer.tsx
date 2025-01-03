import React from "react";

function Footer() {
  return (
    <footer className="w-full  max-w-[90rem] mb-[120px]  ">
      <div
        className="bg-[#212429]  max-w-[90rem]  rounded-b-[16px]
       shadow-[0_2.5px_2px_0_rgba(0,0,0,0.06),0_1px_0_0_rgba(0,0,0,0.05),0_2px_2px_0_rgba(0,0,0,0.15),0_4px_6px_0_rgba(0,0,0,0.1)]"
      >
        <div className=" bg-[#fff] rounded-b-[16px] h-[8px]"></div>
        <div className=" pt-[96px] pb-[40px]">
          <div className="flex w-[1240px] m-auto">
            <div className="flex flex-col gap-[40px]">
              <p className={footerPages}>COMP 1</p>
              <p className={footerPages}>COMP 2</p>
              <p className={footerPages}>COMP 3</p>
              <p className={footerPages}>COMP 4</p>
            </div>
          </div>
          <div>
            <p>A</p>
            <p>B</p>
            <p>C</p>
            <p>D</p>
            <p>E</p>
          </div>
          <div>
            <p>Politica de privacidade</p>
            <p>Termos de uso</p>
            <p>Contato</p>
            <p>© 2025 Rafael Pinho Medeiros
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

const footerPages = "w-max cursor-pointer text-[#fff] font-[Untitled Sans] text-[40px] font-normal font-[500] leading-[125%] tracking-[-0.8px]";