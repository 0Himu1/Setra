import React from 'react';
import Image from 'next/image';
import BigButton from '@/components/BigButton';
import img from '../../public/img-1.jpg';

export default function MainPage() {
  return (
    <>
      <div className="px-5 py-20 md:px-40 lg:px-60 mt-[80px]">
        <h1 className="heading-3 md:heading-1 mb-10">
          Enjoy healthy & delicious food in Setra
        </h1>
        <BigButton text="reserve a table" />
      </div>
      <Image src={img} className="h-80 w-full object-cover" />
    </>
  );
}
