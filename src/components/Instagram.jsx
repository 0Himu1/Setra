import React from 'react';
import InstaImage from './InstaImage';
import ins1 from '../../public/ins1.jpg';
import ins2 from '../../public/ins2.jpg';
import ins3 from '../../public/ins3.jpg';
import ins4 from '../../public/ins4.jpg';

export default function Instagram() {
  return (
    <>
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
      <div className="flex justify-between gap-8 h-[520px] xl:h-[700px] px-5 md:px-20 xl:px-40">
        <InstaImage src={ins1} />
        <InstaImage src={ins2} />
        <InstaImage src={ins3} />
        <InstaImage src={ins4} />
      </div>
    </>
  );
}
