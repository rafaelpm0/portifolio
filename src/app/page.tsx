
import ColorShelf from "@/components/ColorShelf";
import React from "react";


export default function Home() {
  return (
   
    <main className="w-full max-w-[90rem] bg-[#fff]">
      <div style={{height:'400px'}}></div>
      <ColorShelf/>
    </main> // revisar esse 100vh apos ter conteudo 
 
  );
}
