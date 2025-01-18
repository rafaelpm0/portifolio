import Carrossel from "@/components/Home/Carrossel";
import ColorShelf from "@/components/Home/ColorShelf";
import ExperienceCard from "@/components/Home/ExperienceCard";
import Presentation from "@/components/Home/Presentation";
import React from "react";

export default function Home() {
  return (
    <main className="w-full max-w-[78rem] bg-[#fff] ">
      <Presentation />
      <ExperienceCard />
      <ColorShelf />
      <Carrossel />
    </main> // revisar esse 100vh apos ter conteudo
  );
}
