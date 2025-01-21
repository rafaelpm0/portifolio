import React from "react";

function WhoIam() {
  return (
    <div className="lg:bg-[#DEB887] h-full w-full flex opacity-96 lg:px-[16px] rounded-[10px] lg:rounded-0 ">
      <div className="mx-auto lg:mt-[128px] w-full max-w-[82rem]">
        <h2 className="hidden lg:block lg:text-[2.5rem] font-bold mb-[32px] w-full">
          Quem sou eu?
        </h2>
        <div className="flex flex-col lg:flex-row-reverse justify-between max-w-[78rem] mx-auto">
          <img
            src="perfil.jpeg"
            alt="Foto de perfil"
            className="rounded-[100px] w-[30%] lg:w-[15%] lg:mt-[-80px] border-[2px] hidden lg:block"
          />

          <p className=" lg:w-[70%] border h-full bg-[#DEB887] lg:bg-[#f5f5f7] 
          rounded-lg shadow-md p-[16px] text-[1.2rem] font-[550] mb-[8px] text-justify
          text-[#363636]">
            Sou contador formado, com sólida experiência na área fiscal, e após
            várias experiências profissionais onde desenvolvi habilidades
            avançadas em Excel e Macros, descobri um grande interesse por
            programação, especialmente na criação de soluções lógicas e
            criativas. Iniciei meus estudos de forma autônoma em Python e,
            posteriormente, comecei minha graduação em Ciências da Computação.
            Sou resiliente e tenho grande motivação para me aperfeiçoar como
            desenvolvedor. Possuo experiência prática com projetos em Python
            (usando Pandas e Django), JavaScript, CSS, React, React Native,
            VTEX, SQL e consumo de APIs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhoIam;
