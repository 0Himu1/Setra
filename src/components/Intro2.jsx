import React from 'react';
import BigButton from './BigButton';
import five from '../../public/img-5.jpg';
import six from '../../public/img-6.jpg';
import RoundedImage from './RoundedImage';

export default function Intro2() {
  return (
    <div className="px-5 py-20 md:px-40 lg:px-30 bg-primary">
      <p className="heading-5 text-secondary">Welcome to setra</p>
      <h1 className="heading-3 md:heading-2 mr-10 mb-8 text-dimBlack">
        Setra is one of the world's best resturantes
      </h1>
      <RoundedImage
        src={five}
        abstractPosition="tl"
        abstract="three"
        squareToRactangle
      />
      <RoundedImage
        src={six}
        abstractPosition="bl"
        abstract="four"
        squareToRactangle={false}
      />

      <p className="para-2 leading-6 text-gray-600 mb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vero,
        laudantium cupiditate quas provident veritatis molestias repellendus
        voluptatum modi recusandae, repellat. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Iusto vero, laudantium cupiditate quas
        provident veritatis molestias repellendus voluptatum modi recusandae,
        repellat.
      </p>
      <BigButton text="see our restaurant" className="mb-10 bg" normal={false} />
    </div>
  );
}
