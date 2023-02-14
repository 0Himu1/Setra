/* eslint-disable react/button-has-type */
import Image from 'next/image';
import React from 'react';

export default function FoodCard({
  src, name, des, price,
}) {
  return (
    <div className="text-dimBlack flex-1 w-80 mx-auto">
      <div className="h-80 w-80 mb-5 mx-auto ">
        <Image src={src} className="w-full object-cover h-80 rounded-lg" alt="food" />
      </div>
      <h2 className="font-Aclonica text-2xl mb-3">{name}</h2>
      <p className="para-3 border-b pb-4">{des}</p>
      <div className="flex items-center justify-between mt-5">
        <button className="bg-primary font-DMSans font-bold text-base py-3 px-8 rounded-full hover:bg-dimBlack hover:text-primary transition-all">
          Add to Cart
        </button>
        <h2 className="heading-4">{`$${price}`}</h2>
      </div>
    </div>
  );
}
