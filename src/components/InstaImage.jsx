/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import './Style/InstagramImage.css';
import Image from 'next/image';

export default function InstaImage({ src, className }) {
  return (
    <div className={`${className} image relative rounded-full overflow-hidden mb-5 mx-auto h-[420px] w-64 xl:h-[480px] xl:w-72`}>
      <Image src={src} className="h-full w-full" alt="insta" />
      <div className="link cursor-pointer hidden absolute z-20 h-20 w-20 rounded-full items-center justify-center">
        <a href="instagram.com" className="text-white text-3xl">
          <AiOutlineInstagram />
        </a>
      </div>
    </div>
  );
}
