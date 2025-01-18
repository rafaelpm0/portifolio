"use client";

import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Card from "./Card";

type NumCards = "basis-1/4" | "basis-1/3" | "basis-1/2";

function index() {
  const [windowWidth, setWindowWidth] = useState(0);
  const numCards: NumCards =
    windowWidth > 1024
      ? "basis-1/4"
      : windowWidth > 768
      ? "basis-1/3"
      : "basis-1/2";
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    setIsLoading(true);
  }, []);

  type Hobby = {
    title: string;
    image: string;
  };

  const hobbies: Hobby[] = [
    {
      title: "Futebol",
      image: "/futebol.jfif",
    },
    {
      title: "Anime",
      image: "/anime.jpg",
    },
    {
      title: "Estudo",
      image: "/estudo.jpg",
    },
    {
      title: "Jogos",
      image: "/jogos.jfif",
    },
    {
      title: "Sinuca",
      image: "/sinuca.jpg",
    },
    {
      title: "Leitura",
      image: "/leitura.jfif",
    },
    {
      title: "Cozinhar",
      image: "/cozinhar.jfif",
    },
    {
      title: "Skate",
      image: "/skate.jfif",
    },
  ];

  return (
    <>
      <div id="hobbies" className="lg:mx-[100px]">
        <div
          id="divider-line"
          className="h-[1px] bg-[#6e7072] w-[100%] mb-[40px]"
        ></div>
        <h2 className="text-[30px] sm:text-[40px] font-bold ml-[16px] ">
          Hobbies
        </h2>
      </div>
      <div className="lg:px-[100px] py-[32px] px-[16px]">
        {isLoading && (
          <Carousel>
            <CarouselContent>
              {hobbies.map((hobby, index) => (
                <CarouselItem key={index} className={numCards}>
                  <Card hobby={hobby} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-[-16px]" />
            <CarouselNext className="right-[-16px]" />
          </Carousel>
        )}
      </div>
    </>
  );
}

export default index;
