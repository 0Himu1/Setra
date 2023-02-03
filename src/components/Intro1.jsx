/* eslint-disable max-len */
import React from 'react';
import BigButton from './BigButton';
import one from '../../public/img-2.jpg';
import two from '../../public/img-3.jpg';
import RoundedImage from './RoundedImage';

export default function Intro1() {
  return (
    <div className="px-5 py-20 md:px-40 lg:px-30 bg-dimWhite">
      <p className="heading-5 text-secondary">Welcome to setra</p>
      <div className="md:flex items-center justify-between">
        <h1 className="heading-3 md:heading-2 mr-10 mb-8 text-dimBlack">
          Setra is one of the world's best resturantes
        </h1>
        <BigButton text="about setra" className="mb-10" normal />
      </div>
      <div className="md:flex items-center justify-between">
        <div className="flex-1">
          <p className="para-2 leading-6 text-gray-600 mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vero,
            laudantium cupiditate quas provident veritatis molestias repellendus
            voluptatum modi recusandae, repellat.
          </p>
          <p className="para-2 leading-6 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vero,
            laudantium cupiditate quas provident veritatis molestias repellendus
            voluptatum modi recusandae, repellat.
          </p>
          <RoundedImage
            src={two}
            abstractPosition="tl"
            abstract="three"
            squareToRactangle={false}
          />
        </div>
        <RoundedImage
          src={one}
          abstractPosition="bl"
          abstract="four"
          squareToRactangle
          className="md:ml-auto flex-1"
        />
      </div>
    </div>
  );
}
