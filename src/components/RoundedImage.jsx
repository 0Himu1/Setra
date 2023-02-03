/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React from 'react';
import Image from 'next/image';
import Abstract1 from './svg/Abstract1';
import Abstract2 from './svg/Abstract2';
import Abstract3 from './svg/Abstract3';
import Abstract4 from './svg/Abstract4';

export default function RoundedImage({
  src, abstractPosition, abstract, squareToRactangle, className,
}) {
  let position;
  if (abstractPosition === 'tl') {
    position = 'top-0 left-16';
  } else if (abstractPosition === 'bl') {
    position = 'bottom-0 left-16';
  }

  return (
    <div
      className={`relative p-5 ${
			  squareToRactangle
			    ? 'h-96 md:h-[640px] w-96 md:w-[450px]'
			    : 'h-[500px] md:h-[450px] w-96 md:w-[450px]'
      } mx-auto ${className}`}
    >
      {abstract === 'one' ? (
        <Abstract1 className={`absolute ${position}`} />
      ) : (
			  ''
      )}
      {abstract === 'two' ? (
        <Abstract2 className={`absolute ${position}`} />
      ) : (
			  ''
      )}
      {abstract === 'three' ? (
        <Abstract3 className={`absolute ${position}`} />
      ) : (
			  ''
      )}
      {abstract === 'four' ? (
        <Abstract4 className={`absolute ${position}`} />
      ) : (
			  ''
      )}
      <Image src={src} className="rounded-full h-full w-full object-cover" />
    </div>
  );
}
