/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { BiArrowFromLeft } from 'react-icons/bi';

export default function BigButton({ text }) {
  return (
    <div className="flex items-center w-[270px] md:w-[305px] px-10 md:px-14 py-5 text-dimBlack bg-primary rounded-full uppercase para-2 font-bold hover:text-primary hover:bg-dimBlack transition-colors">
      <a href="#" className=" mr-6">
        {text}
      </a>
      <BiArrowFromLeft className="" />
    </div>
  );
}
