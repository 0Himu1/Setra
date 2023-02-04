/* eslint-disable react/button-has-type */
/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { BiArrowFromLeft } from 'react-icons/bi';

export default function BigButton({ text, className, normal }) {
  return (
    <button
      href="#"
      className={`${className} flex items-center whitespace-nowrap px-10 md:px-14 py-5 rounded-full uppercase para-2 font-bold transition-colors ${
				  normal
				    ? 'text-dimBlack bg-primary hover:text-primary hover:bg-dimBlack'
				    : 'text-primary bg-dimBlack hover:text-dimBlack hover:bg-primary hover:border-2 hover:border-dimBlack'
      }`}
    >
      {text}
      <BiArrowFromLeft className="ml-7" />
    </button>
  );
}
