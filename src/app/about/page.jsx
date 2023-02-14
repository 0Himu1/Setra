import React from 'react';
import Image from 'next/image';
import f1 from '../../../public/f1.jpg';
import f2 from '../../../public/f2.jpg';
import f3 from '../../../public/f3.jpg';
import chef1 from '../../../public/Chef1.jpg';
import chef2 from '../../../public/Chef2.jpg';
import chef3 from '../../../public/Chef3.jpg';
import BigButton from '@/components/BigButton';
import RoundedImage from '@/components/RoundedImage';
import ChefCard from '@/components/ChefCard';

export default function About() {
  return (
    <>
      <div className="max-h-screen">
        <div className="bg-dimWhite px-5 py-10 lg:py-16 mt-20">
          <h1 className="heading-1 text-8xl text-left mb-3 lg:text-center">
            About Setra
          </h1>
          <p className="para-1 mb-7 lg:text-center">
            Anywhere. anytime. the best pizza in town. For those special moments
            with friends & Family.
          </p>
        </div>
        <Image src={f1} className="h-80 lg:h-[610px] w-full object-cover" />
      </div>
      <div className="px-5 py-20 md:px-20 lg:px-40 bg-dimWhite">
        <div className="lg:flex items-center justify-between">
          <div className="flex-1">
            <p className="heading-5 text-secondary">Who we are</p>
            <h1 className="heading-3 md:heading-2 mr-10 mb-8 text-dimBlack">
              The best food place in town. Setra
            </h1>
            <BigButton text="about setra" className="mb-10" normal />
          </div>
          <div className="flex-1">
            <RoundedImage
              src={f3}
              abstractPosition="tl"
              abstract="two"
              squareToRactangle={false}
              className=""
            />
            <RoundedImage
              src={f2}
              abstractPosition="bl"
              abstract="one"
              squareToRactangle={false}
              className=""
            />
          </div>
        </div>
      </div>
      <div className="px-5 py-20 md:px-14 lg:px-20 xl:px-40 bg-dimWhite">
        <div className="md:text-center mb-8 lg:mb-20">
          <p className="heading-5 text-secondary">Who we are</p>
          <h1 className="heading-3 md:heading-2 mr-10 mb-8 text-dimBlack">
            The best food place in town. Setra
          </h1>
        </div>
        <div className="lg:flex items-center justify-center gap-8">
          <ChefCard src={chef1} name="Rick Lawson" title="Pizza master" />
          <ChefCard src={chef2} name="Son Foden" title="Pasta master" />
          <ChefCard src={chef3} name="Luisa Tess" title="Pie master" />
        </div>
      </div>
    </>
  );
}
