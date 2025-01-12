"use client";

import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import styles from "./shelf.module.css";

type Props = {
  bgColor: string;
  title: string;
  hideContent: string;
  paddingLeft?: string;
  paddingRight?: string;
  paddingLeftMobile?: string;
  paddingRightMobile?: string;
};

function Shelf(Props: Props) {
  const { title, hideContent, bgColor, paddingLeft, paddingRight } = Props;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{paddingLeft: paddingLeft, paddingRight:paddingRight }}>
      <div
        className={`px-[1.5rem] py-[0.6rem] font-bold text-[#000] text-[24px] flex flex-row justify-between items-center ${
          isOpen ? styles.openBorderRadius : styles.closeBorderRadius
        }`}
        style={{ backgroundColor: bgColor}}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {title}
        <MdKeyboardArrowDown
          size={30}
          className={isOpen ? styles.rotate : styles.default}
        />
      </div>
      <div
        className={`
           rounded-bl-[10px] rounded-br-[10px]
          ${isOpen ? styles.hiddenContentOpen : styles.hiddenContentClose}`}
        style={{ backgroundColor: bgColor }}
      >
        <div className="px-[1.5rem] py-[1rem] text-[#000] text-[20px] opacity-85 text-justify">
          <p>{hideContent}</p>
        </div>
      </div>
    </div>
  );
}

export default Shelf;
