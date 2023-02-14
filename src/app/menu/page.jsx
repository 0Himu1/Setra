'use client';

import React, { useState } from 'react';
import { GoSettings } from 'react-icons/go';
import { BsChevronDown } from 'react-icons/bs';
import FoodCard from '@/components/FoodCard';
import menu1 from '../../../public/menu1.jpg';
import Sidebar from '@/components/Sidebar';

export default function page() {
  const [showSidebar, setShowSidebar] = useState(false);
  console.log(window.innerWidth);

  return (
    <>
      <div className="mt-20 px-5 py-10 ">
        <div className="flex justify-between">
          <div onClick={() => setShowSidebar(!showSidebar)} className="flex justify-center items-center para-1">
            <GoSettings className="mr-1" />
            <p>Filter</p>
          </div>
          <div className="flex justify-center items-center para-1">
            <p>Defult Sorting</p>
            <BsChevronDown className="ml-1" />
          </div>
        </div>
      </div>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} className={`${showSidebar ? 'block' : 'hidden'} absolute`} />
      <div className="p-5 flex flex-col md:flex-row md:flex-wrap gap-10">
        <FoodCard
          src={menu1}
          name="Crispy chicken breast"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, praesentium?"
          price={44}
        />
        <FoodCard
          src={menu1}
          name="Crispy chicken breast"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, praesentium?"
          price={44}
        />
        <FoodCard
          src={menu1}
          name="Crispy chicken breast"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, praesentium?"
          price={44}
        />
        <FoodCard
          src={menu1}
          name="Crispy chicken breast"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, praesentium?"
          price={44}
        />
      </div>
    </>
  );
}
