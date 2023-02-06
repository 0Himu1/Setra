/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import React, { useState } from 'react';
import './Style/TestimonialInputs.css';
import Image from 'next/image';
import person1 from '../../public/person1.jpg';
import person2 from '../../public/person2.jpg';
import person3 from '../../public/person3.jpg';
import person4 from '../../public/person4.jpg';

const customers = [
  {
    id: 1,
    img: person1,
    selected: true,
  },
  {
    id: 2,
    img: person2,
    selected: false,
  },
  {
    id: 3,
    img: person3,
    selected: false,
  },
  {
    id: 4,
    img: person4,
    selected: false,
  },
];

export default function TextimonialImages(className) {
  const [customer, setCustomer] = useState(customers);

  const handelChange = (e) => {
    const { value } = e.target;
    const currentState = [...customer];
    const updatedState = currentState.map((obj) => {
      if (obj.id === parseInt(value, 10)) {
        obj.selected = true;
      } else {
        obj.selected = false;
      }
      return obj;
    });
    setCustomer(updatedState);
  };

  return (
    <div className="flex items-center ">
      <div
        className={`${className} mt-10 flex flex-col items-center justify-around gap-5 text-dimBlack"`}
      >
        <input
          className="accent-dimBlack"
          type="radio"
          name="sample"
          value={1}
          onChange={handelChange}
          defaultChecked
        />
        <input
          className="accent-dimBlack"
          type="radio"
          name="sample"
          value={2}
          onChange={handelChange}
        />
        <input
          className="accent-dimBlack"
          type="radio"
          name="sample"
          value={3}
          onChange={handelChange}
        />
        <input
          className="accent-dimBlack"
          type="radio"
          name="sample"
          value={4}
          onChange={handelChange}
        />
      </div>
      <div className="rounded-full overflow-hidden h-96 w-80">
        {customer.map((ob) => (ob?.selected ? (
          <Image src={ob.img} className="object-cover w-full h-full" alt="customer" />
        ) : (
          ''
        )))}
      </div>
    </div>
  );
}
