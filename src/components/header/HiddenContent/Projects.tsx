import React from "react";
import {
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"; // Supondo que o slider do Shadcn esteja em ui/carousel
import CustomCard from "../../ProjectCard";

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

const Projects: React.FC = () => {
  return (
    <div className="bg-[#708090] h-auto min-h-[535px] w-full flex opacity-95 px-[16px]">
      <div className="mx-auto mt-[128px] w-full max-w-[82rem]">
        <h2 className="text-[2.5rem] font-bold mb-[32px] w-full">Projetos</h2>
        <div className="max-w-[72rem] mx-auto">
          <Carousel>
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index}>
                  <CustomCard
                    image={project.image}
                    title={project.title}
                    description={project.description}
                    linkText="Ver Projeto"
                    linkUrl={project.link}
                    column={false}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-[-16px]" />
            <CarouselNext className="right-[-16px]" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Projects;
