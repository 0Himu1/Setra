'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import logo from '../../public/Setra..png';
import menu from '../../public/menuOpen.png';
import close from '../../public/menuClose.png';

export default function Navbar() {
  const [onSmallScreen, setOnSmallScreen] = useState(false);
  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-dimWhite px-5 py-6 divide-y shadow-lg text-dimBlack md:px-20 md:py-5 border-b-[1px] xl:px-[168px]">
        <div className="flex items-center justify-between">
          <Image src={logo} />
          <ul className=" hidden md:flex p-2 ">
            <li className="para-2 px-3 py-1">Home</li>
            <li className="para-2 px-3 py-1">Menu</li>
            <li className="para-2 px-3 py-1">Blog</li>
            <li className="para-2 px-3 py-1">Page</li>
            <li className="para-2 px-3 py-1">Contact</li>
          </ul>
          <p className="hidden md:block font-DMSans font-normal text-xl ">+2(930)859-4642</p>
          <Image
            src={onSmallScreen ? close : menu}
            onClick={() => setOnSmallScreen(!onSmallScreen)}
            height="32px"
            width="32px"
            objectFit="cover"
            className="md:hidden"
          />
        </div>
      </nav>
      <div className={`mt-[80px] bg-dimWhite fixed w-full ${onSmallScreen ? '' : 'hidden'}`}>
        <ul className="p-2 text-center divide-y">
          <li className="para-2 px-3 py-1">Home</li>
          <li className="para-2 px-3 py-1">Menu</li>
          <li className="para-2 px-3 py-1">Blog</li>
          <li className="para-2 px-3 py-1">Page</li>
          <li className="para-2 px-3 py-1">Contact</li>
        </ul>
      </div>
    </>
  );
}
