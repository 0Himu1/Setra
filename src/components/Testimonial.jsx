/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
/* eslint-disable no-param-reassign */

'use client';

import React, { useState } from 'react';
import TextimonialImages from './TextimonialImages';
import person1 from '../../public/person1.jpg';
import person2 from '../../public/person2.jpg';
import person3 from '../../public/person3.jpg';
import person4 from '../../public/person4.jpg';

const customers = [
  {
    id: 1,
    name: 'Joe Elia',
    img: person1,
    deg: 'CEO Apple',
    comment:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quae, atque nostrum commodi deserunt neque, quibusdam odio suscipit eum quam porro accusamus iusto, consequuntur amet eaque omnis at quo reiciendis?',
    selected: false,
  },
  {
    id: 2,
    name: 'Paul Crish',
    img: person2,
    deg: 'CEO Google',
    comment:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ea magnam hic officiis omnis numquam pariatur animi consequuntur distinctio, perferendis sit non voluptate odit eveniet, veniam a nulla! Quae, illum?',
    selected: false,
  },
  {
    id: 3,
    name: 'Anand C',
    img: person3,
    deg: 'CEO Amazon',
    comment:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti excepturi doloremque cupiditate ipsa rem recusandae quia, omnis deserunt, fuga architecto facere necessitatibus nostrum unde. Quae laborum totam vero error distinctio quas itaque!',
    selected: true,
  },
  {
    id: 4,
    name: 'Alexa Bless',
    img: person4,
    deg: 'CEO Tesla',
    comment:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum velit at, quas magnam reprehenderit, deleniti explicabo quisquam numquam, et eius similique. Repellendus rerum commodi necessitatibus consequuntur iure in, dolorum corporis!',
    selected: false,
  },
];

export default function Testimonial() {
  const [customer, setCustomer] = useState(customers);

  const handelCLick = (value) => {
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
    <>
      <div className="px-5 py-20 md:px-20 xl:px-40 bg-dimWhite">
        <p className="heading-5 text-secondary text-center">Testimonial</p>
        <h1 className="heading-3 md:heading-2 mr-10 mb-8 text-dimBlack text-center">
          What People says
        </h1>
      </div>
      <div className="lg:flex px-5 py-20 md:px-20 xl:px-40 bg-dimWhite">
        <div className="flex items-center lg:flex-col justify-around overflow-visible lg:flex-1">
          {customer.map((ob) => (
            <h3
              onClick={() => handelCLick(ob.id)}
              className={`${
							  ob.selected
							    ? 'underline text-dimBlack'
							    : 'opacity-70 text-[#696767]'
              } cursor-pointer font-Aclonica text-xl leading-7 mr-7 whitespace-nowrap lg:heading-3`}
              key={ob.id}
            >
              {ob.name}
            </h3>
          ))}
        </div>
        {customer.map((o) => (o.selected ? (
          <div className="px-5 lg:flex-1" key={o.id}>
            <TextimonialImages
              className="mt-5 mx-auto"
              handelChange={handelCLick}
              img={o.img}
              id={o.id}
            />
          </div>
        ) : (
          ''
        )))}
        {customer.map((o) => (o.selected ? (
          <div className="px-5 lg:flex-1 text-center lg:text-left" key={o.id}>
            <p className="para-2 lg:para-1 text-xl text-gray-500 mt-10">
              {o.comment}
            </p>
            <h4 className="font-Aclonica font-normal text-lg leading-8 tracking-tighter mt-5 lg:text-2xl">
              {o.name}
            </h4>
            <p className="para-2 text-gray-500 text-base lg:text-lg">
              {o.deg}
            </p>
          </div>
        ) : (
          ''
        )))}
      </div>
    </>
  );
}
