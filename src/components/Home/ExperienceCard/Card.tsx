import React from "react";
import Image from "next/image";

type Props = {
  title: string;
  photo: string;
  description: string;
  imageSide: "left" | "right";
};

function Card(props: Props) {
  const { title, description, photo, imageSide } = props;
  const side = imageSide === "left" ? "flex-row" : "flex-row-reverse";

  return (
    <div className="rounded-[16px] shadow-custom p-[1rem]">
      <div className={`flex ${side} items-center content-center gap-[8px] mb-[16px] `}>
        <Image
          src={photo}
          alt={photo}
          width={125}
          height={125}
          sizes="(max-width: 1024px) 60px"
        />
        <h3 className="text-[16px] lg:text-[25px] font-[700] text-[#494a4d]">{title}</h3>
      </div>

      <p className="text-[12px] lg:text-[20px] text-[#606266] font-[600]">{description}</p>
    </div>
  );
}

export default Card;
// OBS AJUSTAR A IMAGEM, IRA FICAR TEMPORARIAMENTE ASSIM
