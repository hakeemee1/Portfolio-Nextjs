import React from "react";
import Image from "next/image";
import {
  BadgeCheckIcon,
  ChatAlt2Icon,
  CodeIcon,
  CollectionIcon,
  DesktopComputerIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import NavbarItem from "./NavbarItem";

function NavBar() {
  return (
    <div className=" flex flex-col sm:flex-row m-5 justify-between items-center h-auto ">
      <div className=" flex flex-grow justify-evenly max-w-2xl">
        <NavbarItem title="ABOUT" Icon={UserIcon} />
        <NavbarItem title="SKILL" Icon={CodeIcon} />
        <NavbarItem title="EDUCATION" Icon={DesktopComputerIcon} />
        <NavbarItem title="CONTACT" Icon={ChatAlt2Icon} />
      </div>
      <div className=" text-white font-bold text-5xl" >HAKEEMEE</div>

     
      
    </div>
  );
}

export default NavBar;
