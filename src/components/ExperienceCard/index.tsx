import React from "react";
import Card from "./Card";

function index() {
  return (
    <div id="experiences" className="lg:mx-[100px] mb-[40px] lg:mb-[80px]">
      <div
        id="divider-line"
        className="h-[1px] bg-[#6e7072] w-[100%] mb-[40px]"
      ></div>
      <h2 className="text-[40px] font-bold ml-[16px] pb-[20px]">Experiência</h2>
      <div className="mx-[16px]">
        <Card
          title="Avanti, Florianópolis — Desenvolvedor Web/Mobile - - Julho de 2024 : Presente"
          description="Desenvolvimento de soluções web e e-commerce utilizando a plataforma VTEX. 
      Atuação com tecnologias como CSS, HTML, React, React Native, GraphQL, Node.js, TypeScript, 
        além de integração com APIs para personalização e criação de aplicações customizada."
          imageSide="left"
          photo="/penseavanti_logo.jfif"
        />
        <Card
          title={
            "Base Cont., Palhoça — Ass. Fiscal Pleno - - Novembro de 2021 - Setembro de 2023"
          }
          photo="/base_logo.svg"
          imageSide="left"
          description="Atuação nas rotinas fiscais de empresas optantes pelo Simples Nacional e Lucro Presumido, com responsabilidades que incluem a apuração de tributos, a entrega de obrigações acessórias e o atendimento personalizado a clientes.
         Experiência no suporte à automação de processos e no desenvolvimento de soluções em Excel para a otimização e eficiência das atividades fiscais."
        />
                <Card
          title={
            "EQS Engenharia, São José — Ass. de Faturamento - - Maio de 2021 - Novembro de 2021"
          }
          photo="/eqs_logo.jfif"
          imageSide="left"
          description="Execução de atividades relacionadas ao faturamento e gestão de notas fiscais, integrando ferramentas de automação para aprimorar a precisão e eficiência dos processos financeiros."
        />
      </div>
    </div>
  );
}

export default index;
