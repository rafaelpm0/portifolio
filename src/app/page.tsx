
import Carrossel from "@/components/Carrossel";
import ColorShelf from "@/components/Home/ColorShelf";
import ExperienceCard from "@/components/Home/ExperienceCard";
import React from "react";


export default function Home() {
  return (
   
    <main className="w-full max-w-[78rem] bg-[#fff]">
      <div style={{height:'400px'}}></div>
      <ExperienceCard/>
      <ColorShelf/>
      <Carrossel/>
    
    </main> // revisar esse 100vh apos ter conteudo 
 
  );
}
