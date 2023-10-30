/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';

function Input({ selected, handelChange }) {
  return (
    <div
      onClick={handelChange}
      className={`${
			  selected ? 'cursor-pointer bg-white border-dimBlack border-[1px]' : 'bg-gray-300'
      } h-4 w-4 p-[2px] rounded-full`}
    >
      <div
        className={`${
				  selected ? 'bg-dimBlack' : ''
        }  w-[10px] h-[10px] rounded-full block`}
      />
    </div>
  );
}

export default function TestimonialImages({
  className, handelChange, img, id,
}) {
  return (
    <div className={`${className} flex items-center justify-between w-80`}>
      <div className="mt-10 flex flex-col items-center justify-around gap-5">
        <Input selected={parseInt(id, 10) === 1} handelChange={() => handelChange(1)} />
        <Input selected={parseInt(id, 10) === 2} handelChange={() => handelChange(2)} />
        <Input selected={parseInt(id, 10) === 3} handelChange={() => handelChange(3)} />
        <Input selected={parseInt(id, 10) === 4} handelChange={() => handelChange(4)} />

      </div>
      <div className="rounded-full h-[450px] overflow-hidden w-72">
        <img
          src={img}
          className=" object-cover w-full h-full"
          alt="customer"
          key={id}
        />
      </div>
    </div>
  );
}
