import React from 'react';
import Image from 'next/image';
import BigButton from './BigButton';
import five from '../../public/img-5.jpg';
import six from '../../public/img-6.jpg';
import four from '../../public/img-4.jpg';
import RoundedImage from './RoundedImage';

export default function Intro2() {
  return (
    <>
      <div className="px-5 py-20 md:px-40 lg:px-30 bg-primary">
        <p className="heading-5 text-secondary">Welcome to setra</p>
        <div className="md:flex items-center justify-between">
          <div className="flex-1">
            <h1 className="heading-3 md:heading-2 mr-10 mb-8 text-dimBlack">
              Setra is one of the world's best resturantes
            </h1>
            <RoundedImage
              src={five}
              abstractPosition="tl"
              abstract="three"
              squareToRactangle={false}
            />
          </div>
          <RoundedImage
            src={four}
            abstractPosition="bl"
            abstract="four"
            squareToRactangle
            className="flex-1"
          />
        </div>
        <div className="md:flex items-center justify-between gap-10">
          <p className="para-2 leading-6 text-gray-600 mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vero,
            laudantium cupiditate quas provident veritatis molestias repellendus
            voluptatum modi recusandae, repellat. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Iusto vero, laudantium cupiditate quas
            provident veritatis molestias repellendus voluptatum modi
            recusandae, repellat.
          </p>
          <BigButton
            text="see our restaurant"
            className="mb-10 basis-1/4"
            normal={false}
          />
        </div>
      </div>
      <Image src={six} className="h-60 md:h-[712px] w-full object-cover" />
    </>
  );
}
