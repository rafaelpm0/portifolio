import React from "react";

function Presentation() {
  return (
    <div id="bg-container" className="bg-[url('/fundobase.jfif')] bg-cover bg-center mt-[-100px] sm:mt-0 h-max-[800px] h-[500px] lg:h-[800px] flex flex-col text-left p-8 mb-[32px] lg:mb-[64px] relative">
      <div id="data-cantainer" className="bg-[#FFFFFF] w-fit p-[0.8rem] rounded-[10px] absolute bottom-[2rem] lg:bottom-[5rem] lg:left-[7rem] opacity-[75%]">
        <h1 className="text-[1rem] sm:text-[1.3rem] lg:text-4xl font-bold mb-3">Rafael Pinho Medeiros</h1>
        <p className="text-[0.8rem] sm:text-[1rem] lg:text-xl mb-2">Bacharel em Ciências Contábeis</p>
        <p className="text-[0.8rem] sm:text-[1rem] lg:text-xl mb-2">Estudante de Ciências da Computação</p>
        <p className="text-[0.8rem] sm:text-[1rem] lg:text-xl mb-2">Desenvolvedor Front End - Web/Mobile</p>
      </div>
    </div>
  );
}

export default Presentation;
