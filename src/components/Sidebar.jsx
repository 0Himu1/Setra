/* eslint-disable jsx-a11y/anchor-is-valid */

'use client';

import Image from 'next/image';
import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io';
import { AiOutlineTwitter } from 'react-icons/ai';
import RangeSlider from './RangSlider';

function PopulerItem({
  name, price, src,
}) {
  return (
    <div className="flex justify-start items-center gap-4 mb-4">
      <Image src={src} className="rounded-full w-20 h-20 object-cover" alt="food" />
      <div className="">
        <p className="para-1">{name}</p>
        <p className="para-1">{`$ ${price}`}</p>
      </div>
    </div>
  );
}

export default function Sidebar({
  className,
  showSidebar,
  setShowSidebar,
  populer,
  dispatch,
}) {
  return (
    <div
      className={`sidebar bg-white shadow-2xl lg:shadow-none px-8 py-4 w-full ${className}`}
    >
      <p onClick={() => setShowSidebar(!showSidebar)} className="text-right">
        close
      </p>
      <div className="mb-5">
        <h1 className="heading-4 mb-3">Catagories</h1>
        <ul>
          <li
            className="font-DMSans text-xl mb-2 cursor-pointer"
            onClick={() => dispatch({ type: 'all' })}
          >
            All Foods
          </li>
          <li
            className="font-DMSans text-xl mb-2 cursor-pointer"
            onClick={() => dispatch({ type: 'burger' })}
          >
            Burgers
          </li>
          <li
            className="font-DMSans text-xl mb-2 cursor-pointer"
            onClick={() => dispatch({ type: 'nachos' })}
          >
            Nachos
          </li>
          <li
            className="font-DMSans text-xl mb-2 cursor-pointer"
            onClick={() => dispatch({ type: 'tacos' })}
          >
            Tacos
          </li>
          <li
            className="font-DMSans text-xl mb-2 cursor-pointer"
            onClick={() => dispatch({ type: 'pizza' })}
          >
            Pizza
          </li>
          <li
            className="font-DMSans text-xl mb-2 cursor-pointer"
            onClick={() => dispatch({ type: 'bowls' })}
          >
            Bowls
          </li>
        </ul>
      </div>
      <div className="filter mb-5">
        <h1 className="heading-4 mb-3">Filter By Price</h1>
        <RangeSlider
          initialMin={20}
          initialMax={100}
          min={0}
          max={100}
          step={1}
          priceCap={20}
        />
      </div>
      <div className="mb-5">
        <h1 className="heading-4 mb-3">Populer</h1>
        {populer.map((o) => (
          <PopulerItem price={o.price} src={o.img} name={o.name} key={o.key} />
        ))}
      </div>
      <div className="mt-7">
        <p className="heading-4 mb-5">Follow on:</p>
        <div className="flex  text-2xl">
          <div className="flex items-center justify-center h-10 w-10 border border-gray-400 bg-transparent hover:bg-primary hover:border-dimBlack rounded-full mr-8">
            <FaFacebookF className="" />
          </div>
          <div className="flex items-center justify-center h-10 w-10 border border-gray-400 bg-transparent hover:bg-primary hover:border-dimBlack rounded-full mr-8">
            <IoLogoInstagram className="" />
          </div>
          <div className="flex items-center justify-center h-10 w-10 border border-gray-400 bg-transparent hover:bg-primary hover:border-dimBlack rounded-full">
            <AiOutlineTwitter className="" />
          </div>
        </div>
      </div>
    </div>
  );
}
