import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  FiAlignJustify,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
} from "react-icons/fi";
import { FaWindowClose } from "react-icons/fa";
import InfoCard from "@/components/InfoCards";
import CustomCard from "@/components/ProjectCard";
import WhoIam from "../HiddenContent/WhoIam";

type Project = {
  image: string;
  title: string;
  description: string;
  link: string;
};

const projects: Project[] = [
  {
    image: "/agendador.png",
    title: "Jobber",
    description:
      "Uma ferramenta de agendamento de tarefas desenvolvida com Python (Django) e Next.js. O objetivo é armazenar tarefas em um banco de dados local, registrando títulos, descrições e imagens associadas. Ideal para organizar e gerenciar atividades de forma eficiente e concisa.",
    link: "https://github.com/rafaelpm0/jober",
  },
  {
    image: "/email.png",
    title: "API de Automação de E-mail",
    description:
      "Projeto que permite o envio de e-mails personalizados com base em modelos predefinidos e tags associadas aos remetentes ou tags adicionais. Utiliza Node.js, Express.js, SQLite e Nodemailer.",
    link: "https://github.com/rafaelpm0/Projeto_API_Javascript",
  },
];


function TopbarMobile() {
  return (
    <Drawer direction="left" wfull="full">
      <div className="w-[100%] bg-[rgba(0,0,0,0.8)] rounded-[8px]">
        <div className="text-[#fff] relative flex justify-center items-center h-[35px]">
          <DrawerTrigger className="bg-[#000000b6] hover:bg-[#333333] rounded-l-[8px] absolute left-0">
            <FiAlignJustify size={35} color="#fff" />
          </DrawerTrigger>
          <DrawerTitle>Portifólio</DrawerTitle>
        </div>
      </div>
      <DrawerContent>
        <DrawerHeader>
          <DrawerClose>
            <FaWindowClose size={30} className="ml-auto" />
          </DrawerClose>
          <Accordion type="single" collapsible className="">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-[18px] font-bold">Quem sou eu?</AccordionTrigger>
              <AccordionContent>
                  <WhoIam/>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-[18px] font-bold">
                Projetos
              </AccordionTrigger>
              <AccordionContent>
              <div className="flex flex-wrap gap-4">
                {projects.map((project, index) => (
                  <CustomCard
                    key={index}
                    image={project.image}
                    title={project.title}
                    description={project.description}
                    linkText="Ver Projeto"
                    linkUrl={project.link}
                    column={true}

                  />
                ))}
              </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-[18px] font-bold">
                Contato
              </AccordionTrigger>
              <AccordionContent>
                <ul className="text-[1.25rem]">
                  <li>
                    <InfoCard
                      icon={FiPhone}
                      title="Telefone"
                      text="48 9-9838-5803"
                      link=""
                      isLink={false}
                    />
                  </li>
                  <li>
                    <InfoCard
                      icon={FiMail}
                      title="Email"
                      text="rafaelpmedeiros00@gmail.com"
                      link="mailto:rafaelpmedeiros00@gmail.com"
                    />
                  </li>
                  <li>
                    <InfoCard
                      icon={FiLinkedin}
                      title="LinkedIn"
                      text="Conecte-se comigo no LinkedIn:"
                      link="https://www.linkedin.com/in/rafael-pinho-medeiros/"
                    />
                  </li>
                  <li>
                    <InfoCard
                      icon={FiGithub}
                      title="GitHub"
                      text="Veja meus projetos no GitHub:"
                      link="https://github.com/rafaelpm0"
                    />
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
}

export default TopbarMobile;
