import React from 'react';
import BigButton from '../components/ui/BigButton';
import RoundedImage from '../components/ui/RoundedImage';
import ChefCard from '../components/ui/ChefCard';
import f1 from '../images/f1.jpg';
import f2 from '../images/f2.jpg';
import f3 from '../images/f3.jpg';
import chef1 from '../images/Chef1.jpg';
import chef2 from '../images/Chef2.jpg';
import chef3 from '../images/Chef3.jpg';
import ins1 from '../images/ins1.jpg';
import ins2 from '../images/ins2.jpg';
import ins3 from '../images/ins3.jpg';
import ins4 from '../images/ins4.jpg';
import InstaImage from '../components/ui/InstaImage';

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
        <img src={f1} className="h-80 lg:h-[610px] w-full object-cover" alt="random" />
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
      <div className="px-5 py-20 md:px-20 xl:px-40 bg-dimWhite lg:flex justify-between items-center">
        <div className="flex-1">
          <p className="heading-5 text-secondary">Galary</p>
          <h1 className="heading-3 md:heading-2 mr-10 mb-8 text-dimBlack">
            Follow on Instagram
          </h1>
        </div>
        <p className="para-2 lg:para-1 text-gray-500 flex-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          provident? Voluptatibus ipsam pariatur quisquam enim ipsum, est fugiat
          cupiditate vel ducimus
        </p>
      </div>
      <div className="md:flex md:flex-wrap lg:flex-nowrap justify-center bg-dimWhite gap-8 px-5 md:px-20 xl:px-40 xl:py-10">
        <InstaImage src={ins1} className="lg:mt-14" />
        <InstaImage src={ins2} />
        <InstaImage src={ins3} className="lg:mt-14" />
        <InstaImage src={ins4} />
      </div>
    </>
  );
}
