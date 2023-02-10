import React from 'react';
import {
  RiFacebookFill,
  RiInstagramLine,
  RiDribbbleFill,
} from 'react-icons/ri';
import Image from 'next/image';

export default function ChefCard({ src, name, title }) {
  return (
    <div className="bg-primary text-dimBlack mb-8">
      <Image src={src} className="h-80 w-full object-cover" />
      <div className="p-8">
        <h3 className="heading-4 whitespace-nowrap">{name}</h3>
        <p className="para-1 mb-3 whitespace-nowrap">{title}</p>
        <div className="flex  text-3xl">
          <RiFacebookFill className="mr-4" />
          <RiInstagramLine className="mr-4" />
          <RiDribbbleFill className="mr-4" />
        </div>
      </div>
    </div>
  );
}
