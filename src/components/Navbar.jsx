import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/Setra..png';
import close from '../images/menuClose.png';
import menu from '../images/menuOpen.png';

export default function Navbar() {
  const [onSmallScreen, setOnSmallScreen] = useState(false);
  return (
    <>
      <nav className="fixed top-0 left-0 w-screen bg-dimWhite px-5 py-6 divide-y shadow-lg text-dimBlack md:px-10 md:py-5 border-b-[1px] xl:px-[168px] z-10">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img src={logo} alt="Nav Logo" />
          </Link>
          <ul className=" hidden md:flex p-2 ">
            <li className="para-2 px-3 py-1">
              <Link to="/">Home</Link>
            </li>
            <li className="para-2 px-3 py-1">
              <Link to="/menu">Menu</Link>
            </li>
            <li className="para-2 px-3 py-1">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="para-2 px-3 py-1">
              <Link to="/about">About</Link>
            </li>
            <li className="para-2 px-3 py-1">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <p className="hidden md:block font-DMSans font-normal text-xl ">
            +2(930)859-4642
          </p>
          <img
            src={onSmallScreen ? close : menu}
            onClick={() => setOnSmallScreen(!onSmallScreen)}
            alt="Nav Icon"
            className="md:hidden object-cover"
          />
        </div>
      </nav>
      <div
        className={`mt-[80px] bg-dimWhite fixed w-full ${onSmallScreen ? '' : 'hidden'}`}
      >
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
