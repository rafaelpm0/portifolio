import React from "react";
import Shelf from "./shelf";

const skills = [
  {
    title: "CSS",
    text: "Sólida habilidade em CSS para estilização de páginas web, com domínio em design responsivo, animações e layouts modernos, garantindo interfaces visuais atrativas e funcionais.",
    color: "rgb(237, 239, 222)",

    paddingRight: "12px",
  },
  {
    title: "HTML",
    text: "Proficiência em HTML para estruturação de conteúdo web, seguindo boas práticas de semântica e acessibilidade, criando páginas bem-organizadas e adaptáveis.",
    color: "rgb(252, 139, 109)",

    paddingRight: "4px",
  },
  {
    title: "React",
    text: "Experiência no desenvolvimento de interfaces dinâmicas e componentes reutilizáveis usando React. Familiaridade com hooks e gerenciamento de estado para aplicações modernas.",
    color: "rgb(137, 193, 244)",

    paddingRight: "24px",
  },
  {
    title: "GraphQL",
    text: "Habilidade no consumo e integração de APIs GraphQL, proporcionando consultas eficientes e flexíveis para aplicativos frontend.",
    color: "rgb(255, 175, 10)",

    paddingRight: "15px",
  },
  {
    title: "React Native",
    text: "Conhecimento em React Native para o desenvolvimento de aplicativos móveis nativos com compartilhamento de código entre plataformas.",
    color: "rgb(222, 139, 175)",
  
    paddingRight: "25px",
  },
  {
    title: "API",
    text: "Experiência no consumo e integração de APIs REST, garantindo comunicação eficiente entre cliente e servidor em aplicações web.",
    color: "rgb(124, 221, 217)",

    paddingRight: "4px",
  },
  {
    title: "Git/Gitflow",
    text: "Conhecimento no uso do Git e Gitflow para controle de versões e colaboração eficiente em equipes de desenvolvimento. Familiaridade com ramificações, merges, pull requests e gerenciamento de releases.",
    color: "rgb(195, 166, 200)",

    paddingRight: "8px",
  },
  {
    title: "C++",
    text: "Experiência acadêmica em C++, incluindo conceitos fundamentais de programação orientada a objetos, algoritmos e estrutura de dados. Aplicações desenvolvidas como parte de atividades em sala de aula.",
    color: "rgb(120, 149, 255)",

    paddingRight: "30px",
  },
  {
    title: "Java",
    text: "Experiência acadêmica em Java, com foco nos fundamentos de orientação a objetos e desenvolvimento de pequenas aplicações. Conhecimento adquirido através de projetos e exercícios em ambiente educacional.",
    color: "rgb(195, 180, 157)",
    
    paddingRight: "12px",
  },
  {
    title: "Python",
    text: "Experiência prática em Python, incluindo o uso de bibliotecas como Pandas e Django para manipulação de dados e desenvolvimento web. Desenvolvimento de APIs e automação de tarefas com foco em soluções eficientes e reutilizáveis.",
    color: "rgb(249, 237, 142)",

    paddingRight: "6px",
  },
  {
    title: "Fluência em Inglês",
    text: "Fluência em inglês, com capacidade para leitura, escrita e comunicação verbal avançada. Habilidade em compreender documentação técnica e colaborar em ambientes de desenvolvimento global.",
    color: "rgb(131, 158, 115)",
 
    paddingRight: "17px",
  },
  {
    title: "Excel/Macros",
    text: "Extensa experiência em Excel, incluindo criação de macros para automação de tarefas repetitivas e desenvolvimento de planilhas complexas para análise e visualização de dados. Conhecimento avançado em fórmulas, tabelas dinâmicas e VBA.",
    color: "rgb(195, 228, 247)",
 
    paddingRight: "30px",
  },
];

function ColorShelf() {
  const firstHalf = skills.slice(0, 6);
  const secondHalf = skills.slice(6, 12);

  return (
    <div id="skills" className="">
      <h2 className="text-[40px] font-bold ml-[16px] lg:ml-[100px] pb-[40px]">
        Habilidades
      </h2>
      <div className="flex flex-col lg:flex-row justify-between mx-[16px] lg:mx-[100px] mb-[40px] lg:mb-[80px] gap-[4px] lg:gap-[40px]">
        <div id="shelfA" className="flex flex-col gap-[4px] lg:w-[calc(50%-20px)]">
          {firstHalf.map((skill, index) => (
            <Shelf
              key={index}
              title={skill.title}
              hideContent={skill.text}
              bgColor={skill.color}
              paddingRight={skill.paddingRight}
            />
          ))}
        </div>
        <div id="shelfB" className="flex flex-col gap-[4px] lg:w-[calc(50%-20px)]">
          {secondHalf.map((skill, index) => (
            <Shelf
              key={index + 6} // Para garantir que as chaves sejam únicas
              title={skill.title}
              hideContent={skill.text}
              bgColor={skill.color}
              paddingRight={skill.paddingRight}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ColorShelf;
