'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaFacebookF } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io';
import { AiOutlineTwitter } from 'react-icons/ai';
import { foodMenu } from '@/pages/api/data';

const {
  burger, nachos, pizza, tacos, bowls,
} = foodMenu;
const menu = burger.concat(nachos, pizza, tacos, bowls);

export default function page({ params }) {
  const [counter, setCounter] = useState(1);
  const currentFood = menu.filter((o) => o.id === parseFloat(params.menuItem))[0];
  const {
    name, price, id, image, description, reviews: review,
  } = currentFood;
  const { short, full } = description;
  const { reviews, rating } = review;

  return (
    <div className="mt-20 p-5 md:px-10 lg:py-12 xl:px-40 md:flex items-start justify-between min-h-screen text-dimBlack">
      <Image
        src={image}
        alt="food"
        className="flex-1 h-full w-full xl:h-[715px]  object-cover"
      />
      <div className="flex-1 p-5 lg:px-12">
        <h1 className="heading-4 lg:heading-3 mt-10 md:mt-0">{name}</h1>
        <p className="para-1 mt-3">{short}</p>
        <p className="para-1 mt-7">{`${rating}(${reviews.length} customer review)`}</p>
        <h3 className="heading-4 mt-12 mb-3">{`$${price}`}</h3>
        <div className="flex justify-between items-center max-w-sm px-4 py-2 bg-transparent rounded-full border border-dimBlack mb-5 lg:mb-10">
          <p className="para-1 mr-3">Quantity</p>
          <div className="flex items-center">
            <button
              onClick={() => setCounter(counter - 1)}
              type="button"
              className="para-1 px-4 text-xl hover:bg-primary rounded-full mr-2"
            >
              -
            </button>
            <p className="para-1">{counter}</p>
            <button
              onClick={() => setCounter(counter + 1)}
              type="button"
              className="para-1 px-4 text-xl hover:bg-primary rounded-full ml-2"
            >
              +
            </button>
          </div>
        </div>
        <button
          type="button"
          className="px-7 py-4 uppercase font-DMSans font-bold outline-1 outline-primary text-base bg-primary rounded-full"
        >
          add to cart
        </button>
        <p className="para-1 mr-3 mt-7">
          SKU:
          {' '}
          {id}
        </p>
        <p className="para-1 mr-3 mt-2">Category: Resturent</p>
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
    </div>
  );
}
