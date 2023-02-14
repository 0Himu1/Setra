/* eslint-disable jsx-a11y/anchor-is-valid */

'use client';

import React from 'react';
import RangeSlider from './RangSlider';

export default function Sidebar({ className, showSidebar, setShowSidebar }) {
  return (
    <div
      className={`sidebar bg-white shadow-2xl px-8 py-4 w-full ${className}`}
    >
      <p onClick={() => setShowSidebar(!showSidebar)} className="text-right">
        close
      </p>
      <div className="">
        <h1 className="heading-4 mb-3">Catagories</h1>
        <ul>
          <li className="font-DMSans text-xl mb-2">
            <a href="#">All Foods</a>
          </li>
          <li className="font-DMSans text-xl mb-2">
            <a href="#">Burgers</a>
          </li>
          <li className="font-DMSans text-xl mb-2">
            <a href="#">Nachos</a>
          </li>
          <li className="font-DMSans text-xl mb-2">
            <a href="#">Tacos</a>
          </li>
          <li className="font-DMSans text-xl mb-2">
            <a href="#">Bowls</a>
          </li>
        </ul>
      </div>
      <div className="filter">
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
    </div>
  );
}
