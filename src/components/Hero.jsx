import React from 'react';
import Image from 'next/image';
import BigButton from '@/components/BigButton';
import img from '../../public/img-1.jpg';
import Abstract1 from '@/components/svg/Abstract1';
import Abstract2 from '@/components/svg/Abstract2';

export default function MainPage() {
  return (
    <>
      <div className="static px-5 py-20 md:px-20 lg:px-60 lg:gap-24 mt-[80px] md:flex justify-between md:items-end text-dimBlack">
        <h1 className="heading-3 md:heading-1 mb-10 md:m-0 lg:max-w-2xl">
          Enjoy healthy & delicious food in Setra
        </h1>
        <BigButton text="reserve a table" normal />
        <Abstract1 className="hidden md:block absolute top-20 right-[-50px]" />
      </div>
      <div className="relative md:py-10">
        <Abstract2 className="hidden md:block absolute top-2 left-16" />
        <Image src={img} className="h-80 md:h-[712px] w-full object-cover" />
      </div>
    </>
  );
}
