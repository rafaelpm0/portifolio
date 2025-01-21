import React from "react";

function WhoIam() {
  return (
    <div className="lg:bg-[#DEB887] h-auto  lg:min-h-[535px] w-full flex opacity-96 lg:px-[16px] rounded-[10px] lg:rounded-0 opacity-95">
      <div className="mx-auto lg:mt-[128px] w-full max-w-[82rem]">
        <h2 className="hidden lg:block lg:text-[2.5rem] font-bold mb-[32px] w-full">
          Quem sou eu?
        </h2>
        <div className="flex flex-col lg:flex-row-reverse justify-between max-w-[78rem]">
          <img
            src="perfil.jpeg"
            alt="Foto de perfil"
            className="rounded-[100px] mt-[-2rem] w-auto h-auto max-h-[330px] border-[2px] hidden lg:block"
          />

          <div className="lg:w-[70%] border h-full bg-[#f5f5f7] rounded-lg shadow-md p-[16px] text-[1.2rem] font-[550] mb-[8px] text-left text-[#363636]">
            <p className="mb-4">
              Sou contador formado, com sólida experiência na área fiscal, e
              após várias experiências profissionais onde desenvolvi habilidades
              avançadas em Excel e Macros, descobri um grande interesse por
              programação, especialmente na criação de soluções lógicas e
              criativas. Iniciei meus estudos de forma autônoma em Python e,
              posteriormente, comecei minha graduação em Ciências da Computação.
            </p>
            <p className="mb-2">
              Sou resiliente e tenho grande motivação para me aperfeiçoar como
              desenvolvedor. Possuo experiência prática com projetos em Python
              (usando Pandas e Django), JavaScript, CSS, React, React Native,
              VTEX, SQL e consumo de APIs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoIam;
