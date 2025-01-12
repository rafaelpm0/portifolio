
import ColorShelf from "@/components/ColorShelf";
import ExperienceCard from "@/components/ExperienceCard";
import React from "react";


export default function Home() {
  return (
   
    <main className="w-full max-w-[78rem] bg-[#fff]">
      <div style={{height:'400px'}}></div>
      <ExperienceCard/>
      <ColorShelf/>
 
    </main> // revisar esse 100vh apos ter conteudo 
 
  );
}
