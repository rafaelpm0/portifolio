import {
  Card as UICard,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import React from "react";
import Image from "next/image";

type Hobby = {
  title: string;
  image: string;
};

type CardProps = {
  hobby: Hobby
}

function Card({hobby} : CardProps) {
  
  const { title, image } = hobby;
  
  return (
    <UICard>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="overflow-hidden">
        <img src={image} alt={title} className="h-full w-full max-h-[64px] sm:max-h-[110px] object-cover object-center"/>
      </CardContent>
    </UICard>
  );
}

export default Card;
