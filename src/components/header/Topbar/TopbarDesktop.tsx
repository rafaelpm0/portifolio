"use client";
import React, { useState } from "react";
import HideCard from "../../HideCard/HideCard";
import MenuButton from "../MenuButton";
import Contact from "../HiddenContent/Contact";
import Projects from "../HiddenContent/Projects";
import { GiCircuitry } from "react-icons/gi";
import WhoIam from "../HiddenContent/WhoIam";

function Topbar() {
  const [modalsControl, setModalsControl] = useState([false, false, false]);
  function uniqueVisible(index: number, data: boolean[]) {
    const newData = data.map((data, data_index) => {
      if (data_index === index) {
        return true;
      }
      return false;
    });
    setModalsControl(newData);
  }
  function allInvisible(data: boolean[]) {
    const newData = Array.from({ length: data.length }, () => false);
    setModalsControl(newData);
  }

  return (
    <div className="w-full">
      <div className="flex relative z-[3] flex-row w-full justify-center space-x-1 font-sans text-white font-[700] blur(40px) max-w-[64rem] h-[55px] mx-auto">
        <div className="w-[64px] p-[10px] bg-[rgba(0,0,0,0.8)] flex justify-center items-center rounded-[4px] cursor-pointer">
          HOME
        </div>
        <ul className="w-[100%] bg-[rgba(0,0,0,0.8)] flex justify-center items-center rounded-[4px] ">
          <li className="h-full">
            <MenuButton
              title="Quem sou eu?"
              href="/"
              padding={"32px"}
              onEnter={() => {
                uniqueVisible(0, modalsControl);
              }}
            />
          </li>
          <li className="h-full">
            <MenuButton
              title="Projetos"
              href="/"
              padding={"32px"}
              onEnter={() => {
                uniqueVisible(1, modalsControl);
              }}
            />
          </li>
          <li className="h-full">
            <MenuButton
              title="Contato"
              href="/"
              padding={"32px"}
              onEnter={() => {
                uniqueVisible(2, modalsControl);
              }}
            />
          </li>
        </ul>
        <div className="w-[64px] p-[10px] bg-[rgba(0,0,0,0.8)] flex justify-center items-center rounded-[4px]">
          <GiCircuitry size={45}/>
        </div>
      </div>

      <HideCard
        isVisible={modalsControl[0]}
        onLeave={() => {
          allInvisible(modalsControl);
        }}
      >
        <WhoIam />
      </HideCard>
      <HideCard
        isVisible={modalsControl[1]}
        onLeave={() => {
          allInvisible(modalsControl);
        }}
      >
        <Projects />
      </HideCard>
      <HideCard
        isVisible={modalsControl[2]}
        onLeave={() => {
          allInvisible(modalsControl);
        }}
      >
        <Contact />
      </HideCard>
    </div>
  );
}

export default Topbar;
