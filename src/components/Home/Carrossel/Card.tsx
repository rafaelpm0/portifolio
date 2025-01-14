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
    <UICard className="h-[220px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center">
        <img src={image} alt={title} className="h-[100%] w-[100%]"/>
      </CardContent>
    </UICard>
  );
}

export default Card;
