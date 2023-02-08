/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import './Style/InstagramImage.css';
import Image from 'next/image';

export default function InstaImage({ src }) {
  return (
    <div className="image relative rounded-full overflow-hidden">
      <Image src={src} className="h-full w-full" />
      <div className="link hidden absolute z-20 h-20 w-20 rounded-full items-center justify-center">
        <a href="instagram.com" className="text-white text-3xl">
          <AiOutlineInstagram />
        </a>
      </div>
    </div>
  );
}
