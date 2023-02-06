import React from 'react';
import Image from 'next/image';
import BigButton from './BigButton';
import food from '../../public/Foods.png';

export default function Recipes() {
  return (
    <div className="px-5 py-20 md:px-20 xl:px-40 bg-dimWhite">
      <p className="heading-5 text-secondary">Our Recipies</p>
      <div className="lg:flex items-center justify-between">
        <div className="flex-1">
          <h1 className="heading-3 md:heading-2 mr-10 mb-8 text-dimBlack">
            Our healthy & quality recipies
          </h1>
          <p className="para-2 leading-6 text-gray-600 mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vero,
            laudantium cupiditate quas provident veritatis molestias repellendus
            voluptatum modi recusandae, repellat.
          </p>
          <p className="para-2 leading-6 text-gray-600 mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vero,
            laudantium cupiditate quas provident veritatis molestias repellendus
            voluptatum modi recusandae, repellat.
          </p>
          <p className="para-2 leading-6 text-gray-600 mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vero,
            laudantium cupiditate quas provident veritatis molestias repellendus
            voluptatum modi recusandae, repellat.
          </p>
          <BigButton text="see our recipes" className="mt-12" normal={false} />
        </div>
        <div className="flex-1">
          <Image src={food} className="w-full h-auto object-cover" />
        </div>
      </div>
    </div>
  );
}
