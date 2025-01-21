import React from "react";
import { FiPhone, FiMail, FiLinkedin, FiGithub } from "react-icons/fi";
import InfoCard from "../../InfoCards";

const liContainer = "mb-4";

function Contact() {
  return (
    <div id="hidden-contact" className="bg-[#c0c0c0] h-auto min-h-[535px] opacity-95 flex justify-center px-[16px]">
      <div className="flex flex-col w-full max-w-[82rem] justify-start mt-[8rem] text-[#000]">
        <h2 className="text-[2.5rem] font-bold mb-[2rem]">Contato</h2>
        <ul className="text-[1.25rem] flex flex-row gap-[8px]">
          <li className={liContainer}>
            <InfoCard
              icon={FiPhone}
              title="Telefone"
              text="48 9-9838-5803"
              link=""
              isLink={false}
            />
          </li>
          <li className={liContainer}>
            <InfoCard
              icon={FiMail}
              title="Email"
              text="rafaelpmedeiros00@gmail.com"
              link="mailto:rafaelpmedeiros00@gmail.com"
            />
          </li>
          <li className={liContainer}>
            <InfoCard
              icon={FiLinkedin}
              title="LinkedIn"
              text="Conecte-se comigo no LinkedIn:"
              link="https://www.linkedin.com/in/rafael-pinho-medeiros/"
            />
          </li>
          <li className={liContainer}>
            <InfoCard
              icon={FiGithub}
              title="GitHub"
              text="Veja meus projetos no GitHub:"
              link="https://github.com/rafaelpm0"
            />
          </li>
        </ul>
        <p className="text-[1.25rem] font-bold mt-[auto] mb-[2rem]">
          Estou sempre aberto a novas oportunidades e parcerias. Fique à vontade
          para entrar em contato!
        </p>
      </div>
    </div>
  );
}

export default Contact;
