import React from "react";
import Card from "./Card";

type Experience = {
  title: string;
  description: string;
  imageSide: 'left' | 'right';
  photo: string;
}

const experiences: Experience[] = [
  {
    title: "Avanti, Florianópolis — Dev. Web/Mobile - - Julho de 2024 : Presente",
    description: "Atuação no suporte de desenvolvimento, com foco em correções e implementação de e-commerce, utilizando Vtex Framework, React, TypeScript, HTML/CSS/SASS. Experiência no laboratório de desenvolvimento, com ênfase na criação de ferramentas personalizadas. Participação em projeto de aplicação mobile com React Native, TypeScript e TailwindCSS, além de projeto voltado à aplicação de inteligência artificial em textos, empregando React, AWS (API Gateway, DynamoDB, Step Functions) e GraphQL.",
    imageSide: "left",
    photo: "/penseavanti_logo.jfif"
  },
  {
    title: "Base Cont., Palhoça — Ass. Fiscal Pleno - - Novembro de 2021 - Setembro de 2023",
    description: "Atuação nas rotinas fiscais de empresas optantes pelo Simples Nacional e Lucro Presumido, com responsabilidades que incluem a apuração de tributos, a entrega de obrigações acessórias e o atendimento personalizado a clientes. Experiência no suporte à automação de processos e no desenvolvimento de soluções em Excel para a otimização e eficiência das atividades fiscais.",
    imageSide: "left",
    photo: "/base_logo.jpg"
  },
  {
    title: "EQS Engenharia, São José — Ass. de Faturamento - - Maio de 2021 - Novembro de 2021",
    description: "Execução de atividades relacionadas ao faturamento e gestão de notas fiscais, integrando ferramentas de automação para aprimorar a precisão e eficiência dos processos financeiros.",
    imageSide: "left",
    photo: "/eqs_logo.jfif"
  },
  {
    title: "Suporte Técnico Nível 2 – Brasão Sistemas - - Novembro de 2017 – Março de 2020",
    description: "Atendimento técnico de clientes no uso do ERP Radar, com suporte realizado por telefone e acesso remoto. As responsabilidades incluíram manutenção e atualização do sistema, identificação e correção de erros operacionais e sistêmicos, além da realização de treinamentos específicos para aprimorar o uso da ferramenta. Também foi conduzida a análise de problemas críticos e a aplicação de soluções técnicas para otimizar processos e melhorar a experiência do usuário.",
    imageSide: "left",
    photo: "/brasao_logo.jfif"
  }
];

function Index() {
  return (
    <div id="experiences" className="lg:mx-[100px] mb-[40px] lg:mb-[80px]">
      <h2 className="text-[30px] sm:text-[40px] font-bold ml-[16px] pb-[20px]">Experiência</h2>
      <div className="mx-[16px] flex flex-col gap-[32px]">
        {experiences.map((experience, index) => (
          <Card
            key={index}
            title={experience.title}
            description={experience.description}
            imageSide={experience.imageSide}
            photo={experience.photo}
          />
        ))}
      </div>
    </div>
  );
}

export default Index;
