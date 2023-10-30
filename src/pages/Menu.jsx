/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useReducer, useState } from 'react';
import { MdSettingsVoice } from 'react-icons/md';
import { BsChevronDown } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { foodMenu, populer } from '../data/data';
import Sidebar from '../components/ui/menu/Sidebar';
import FoodCard from '../components/ui/menu/FoodCard';

const {
  burger, nachos, pizza, tacos, bowls,
} = foodMenu;
const menu = burger.concat(nachos, pizza, tacos, bowls);

function reducer(state, action) {
  switch (action.type) {
    case 'all':
      return menu;
    case 'burger':
      return burger;
    case 'nachos':
      return nachos;
    case 'pizza':
      return pizza;
    case 'tacos':
      return tacos;
    case 'bowls':
      return bowls;
    default:
      return menu;
  }
}

export default function Menu() {
  const [showSidebar, setShowSidebar] = useState(window.innerWidth > 1023);
  const [onBigScreen] = useState(window.innerWidth > 1023);
  const [menuItems, dispatch] = useReducer(reducer, menu);
  return (
    <>
      <div className="mt-20 px-5 py-10 md:px-10 lg:px-16 xl:px-20 2xl:px-32  ">
        <div className="flex justify-between">
          <div
            onClick={() => setShowSidebar(!showSidebar)}
            className="flex justify-center items-center para-1 cursor-pointer"
          >
            <MdSettingsVoice className="mr-1" />
            <p>Filter</p>
          </div>
          <div className="flex justify-center items-center para-1 cursor-pointer">
            <p>Defult Sorting</p>
            <BsChevronDown className="ml-1" />
          </div>
        </div>
      </div>
      <div className="md:flex justify-between items-start flex-row-reverse p-5 md:px-10 lg:px-16 xl:px-20 2xl:px-32">
        <Sidebar
          showSidebar={showSidebar}
          dispatch={dispatch}
          setShowSidebar={setShowSidebar}
          populer={populer}
          className={`${showSidebar ? 'block' : 'hidden'} 
          ${onBigScreen ? 'static' : 'absolute'} lg:bg-dimWhite flex-auto max-w-xs`}
        />
        <div className=" flex flex-col md:flex-row md:flex-wrap xl:gap-5 flex-auto">
          {menuItems.map((o) => (
            <Link href={`/menu/${o.id}`} key={o.id}>
              <FoodCard
                src={o.image}
                name={o.name}
                des={o.description.short}
                price={o.price}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
