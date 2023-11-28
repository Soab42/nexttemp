"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

import BurgerMenu from "./BurgerMenu";
import NavSm from "./NavSm";
import NavLg from "./NavLg";
import { Bebas_Neue } from "next/font/google";
const font = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});
export default function navbar() {
  const [show, setShow] = useState(false);
  const pathName = usePathname().slice(1);
  // console.log(pathName);

  return (
    <div className="dashboard  shadow-xl z-10">
      {/* <div className=" h-full">
        <img
          src="assets/web.png"
          alt=""
          className="absolute w-screen h-full -z-10 "
        />
      </div> */}

      <div className="flex backdrop-blur-md h-[4rem] shadow-xl p-5 justify-between items-center">
        {/* Main logo */}
        {/* <h1
          className={`logo capitalize font-bold text-[#23af84] text-3xl flex justify-between`}
        >
          <Link
            href={"/branch"}
            className={"flex gap-2 justify-center items-baseline "}
          >
            <span className="w-11 ">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/health-3381c.appspot.com/o/others%2Fpmklogo_2023-08-05?alt=media&token=cbd75af4-d719-4ac0-a439-32a5646d36e8"
                alt="logo"
                className="w-12"
              />
            </span>
            <p className={`hidden md:flex xl:flex ${font.className}`}>
              Palli Mongal Karmosuchi (PMK)
            </p>
          </Link>
        </h1> */}
        {/* hamburger menu for mobile devices */}
        <div>logo</div>
        <div className="relative md:hidden xl:hidden">
          <BurgerMenu setShow={setShow} show={show} />
          {<NavSm setShow={setShow} show={show} pathName />}
        </div>

        {/* list of nav menu for big devices*/}
        <div className="hidden md:block xl:block">
          <NavLg pathName={pathName} />
        </div>
        {/* <NavList setShow show pathName={pathName} /> */}
      </div>
    </div>
  );
}
