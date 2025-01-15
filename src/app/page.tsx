import Carrossel from "@/components/Home/Carrossel";
import ColorShelf from "@/components/Home/ColorShelf";
import ExperienceCard from "@/components/Home/ExperienceCard";
import React from "react";

export default function Home() {
  return (
    <main className="w-full max-w-[78rem] bg-[#fff] ">
     <div className="bg-[url('/fundobase.jfif')] bg-cover bg-center h-[800px] flex flex-col text-left p-8">
        <h1 className="text-4xl font-bold mt-[300px]">Rafael Pinho Medeiros</h1>
        <p className="text-xl mb-2">Bacharel em Ciências Contábeis</p>
        <p className="text-xl mb-2">Estudante de Ciências da Computação</p>
        <p className="text-xl mb-2">Desenvolvedor Front End - Web/Mobile</p>
      </div>
      <ExperienceCard />
      <ColorShelf />
      <Carrossel />
    </main> // revisar esse 100vh apos ter conteudo
  );
}
