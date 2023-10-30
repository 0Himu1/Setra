/* eslint-disable no-param-reassign */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import BigButton from '../components/ui/BigButton';
import Abstract1 from '../components/ui/svg/Abstract1';
import Abstract2 from '../components/ui/svg/Abstract2';
import img from '../images/img-1.jpg';
import one from '../images/img-2.jpg';
import two from '../images/img-3.jpg';
import five from '../images/img-5.jpg';
import six from '../images/img-6.jpg';
import four from '../images/img-4.jpg';
import food from '../images/Foods.png';
import person1 from '../images/person1.jpg';
import person2 from '../images/person2.jpg';
import person3 from '../images/person3.jpg';
import person4 from '../images/person4.jpg';
import RoundedImage from '../components/ui/RoundedImage';
import TestimonialImages from '../components/ui/TestimonialImages';

const customers = [
  {
    id: 1,
    name: 'Joe Elia',
    img: person1,
    deg: 'CEO Apple',
    comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quae, atque nostrum commodi deserunt neque, quibusdam odio suscipit eum quam porro accusamus iusto, consequuntur amet eaque omnis at quo reiciendis?',
    selected: false,
  },
  {
    id: 2,
    name: 'Paul Crish',
    img: person2,
    deg: 'CEO Google',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ea magnam hic officiis omnis numquam pariatur animi consequuntur distinctio, perferendis sit non voluptate odit eveniet, veniam a nulla! Quae, illum?',
    selected: false,
  },
  {
    id: 3,
    name: 'Anand C',
    img: person3,
    deg: 'CEO Amazon',
    comment: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti excepturi doloremque cupiditate ipsa rem recusandae quia, omnis deserunt, fuga architecto facere necessitatibus nostrum unde. Quae laborum totam vero error distinctio quas itaque!',
    selected: true,
  },
  {
    id: 4,
    name: 'Alexa Bless',
    img: person4,
    deg: 'CEO Tesla',
    comment: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum velit at, quas magnam reprehenderit, deleniti explicabo quisquam numquam, et eius similique. Repellendus rerum commodi necessitatibus consequuntur iure in, dolorum corporis!',
    selected: false,
  },
];

export default function Home() {
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
      <div className="static px-5 py-20 md:px-20 lg:px-60 lg:gap-24 mt-[80px] md:flex justify-between md:items-end text-dimBlack overflow-hidden">
        <h1 className="heading-3 md:heading-1 mb-10 md:m-0 lg:max-w-2xl">
          Enjoy healthy & delicious food in Setra
        </h1>
        <BigButton text="reserve a table" normal />
        <Abstract1 className="hidden md:block absolute top-20 right-[-50px]" />
      </div>
      <div className="relative md:py-10">
        <Abstract2 className="hidden md:block absolute top-2 left-16" />
        <img src={img} className="h-80 md:h-[712px] w-full object-cover" alt="hero" />
      </div>
      <div className="px-5 py-20 md:px-20 lg:px-40 bg-dimWhite">
        <p className="heading-5 text-secondary">Welcome to setra</p>
        <div className="lg:flex items-center justify-between">
          <h1 className="heading-3 md:heading-2 mr-10 mb-8 text-dimBlack">
            Setra is one of the world's best resturantes
          </h1>
          <BigButton text="about setra" className="mb-10" normal />
        </div>
        <div className="lg:flex items-center justify-between">
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
      <div className="px-5 py-20 md:px-20 lg:px-40 bg-primary">
        <p className="heading-5 text-secondary ">Our Resturant</p>
        <div className="lg:flex items-center justify-between">
          <div className="flex-1 mb-10">
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
            abstract="three"
            squareToRactangle
            className="flex-1"
          />
        </div>
        <div className="md:flex items-center justify-between gap-10">
          <p className="para-2 max-w-3xl lg:mx-auto leading-6 text-gray-600 mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vero,
            laudantium cupiditate quas provident veritatis molestias repellendus
            voluptatum modi recusandae, repellat. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Iusto vero, laudantium cupiditate quas
            provident veritatis molestias repellendus voluptatum modi
            recusandae, repellat.
          </p>
          <BigButton
            text="see our restaurant"
            className="mb-10 lg:mr-auto basis-1/5"
            normal={false}
          />
        </div>
      </div>
      <img src={six} className="h-60 md:h-[712px] w-full object-cover" alt="video" />
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
            <img src={food} className="w-full h-auto object-cover" alt="Food" />
          </div>
        </div>
      </div>
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
            <TestimonialImages
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
