import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { FiAlignJustify } from "react-icons/fi";

function TopbarMobile() {
  return (
    <Drawer direction="left" wfull="full">
      <div className="w-[100%] bg-[rgba(0,0,0,0.8)]  rounded-[8px]">
        <div className="text-[#fff] relative flex justify-center items-center h-[35px]">
          <DrawerTrigger className="bg-[#000000b6] hover:bg-[#333333] rounded-l-[8px] absolute left-0">
            <FiAlignJustify size={35} color="#fff" />
          </DrawerTrigger>
          <DrawerTitle>Portifólio</DrawerTitle>
        </div>
      </div>
      <DrawerContent>
        <DrawerHeader>
          <DrawerClose>Cancel</DrawerClose>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
}

export default TopbarMobile;
