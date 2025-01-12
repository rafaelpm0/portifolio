import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Card from "./Card";

function index() {
  return (
    <>
    <div id="experiences" className="lg:mx-[100px] mb-[40px] lg:mb-[40px]">
        <div
          id="divider-line"
          className="h-[1px] bg-[#6e7072] w-[100%] mb-[40px]"
        ></div>
        <h2 className="text-[30px] sm:text-[40px] font-bold ml-[16px]">
          Hobbies
        </h2>
        </div>
      <div className="flex justify-center">
        <Carousel className="max-w-[600px] ">
          <CarouselContent>
            <CarouselItem className="basis-1/3">
              <Card />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <Card />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <Card />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <Card />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}

export default index;
