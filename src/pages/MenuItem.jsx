import React, { useState } from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io';
import { AiOutlineTwitter } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { foodMenu } from '../data/data';
import StarRating from '../components/ui/menu/rettingSystem/StarRatting';
import InputStar from '../components/ui/menu/rettingSystem/InputStar';

function Review({ name, review, rating }) {
  return (
    <div className="p-8">
      <h1 className="font-Aclonica text-xl mb-5 lg:heading-4">{name}</h1>
      <p className="font-DMSans text-sm mb-2 lg:text-xl">{review}</p>
      <p className="font-DMSans text-sm lg:text-xl">{`${rating} out of 5`}</p>
    </div>
  );
}

const {
  burger, nachos, pizza, tacos, bowls,
} = foodMenu;
const menu = burger.concat(nachos, pizza, tacos, bowls);
let userData;

export default function MenuItem() {
  const [stars, setStars] = useState([
    { id: 1, filled: false },
    { id: 2, filled: false },
    { id: 3, filled: false },
    { id: 4, filled: false },
    { id: 5, filled: false },
  ]);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const ratting = stars.filter((o) => o.filled === true).length;
    userData = {
      ...data,
      ratting,
    };
    return userData;
  };
  const [counter, setCounter] = useState(1);
  const [showDescription, setShowDescription] = useState(true);
  const { id: FoodId } = useParams();
  const currentFood = menu.filter((o) => o.id === parseFloat(FoodId))[0];

  const {
    name, price, id, image, description, reviews: review,
  } = currentFood;
  const { short, full } = description;
  const { reviews, rating } = review;

  const handelClick = (n) => {
    const newState = stars.map((o) => ({
      ...o,
      filled: o.id <= n,
    }));
    setStars(newState);
  };
  return (
    <>
      <div className="mt-20 p-5 md:px-10 lg:py-12 xl:px-40 md:flex items-start justify-between min-h-screen text-dimBlack">
        <div className="flex-1 h-max">
          <img
            src={image}
            alt="food"
            className="h-full w-auto xl:h-[715px] object-cover"
          />
        </div>
        <div className="flex-1 p-5 lg:px-12">
          <h1 className="heading-4 lg:heading-3 mt-10 md:mt-0">{name}</h1>
          <p className="para-1 mt-3">{short}</p>
          <div className="para-1 mt-7 flex">
            <StarRating star={rating} />
            <p>{`(${reviews.length} customer review)`}</p>
          </div>
          <h3 className="heading-4 mt-12 mb-3">{`$${price}`}</h3>
          <div className="flex justify-between items-center max-w-sm px-4 py-2 bg-transparent rounded-full border border-dimBlack mb-5 lg:mb-10">
            <p className="para-1 mr-3">Quantity</p>
            <div className="flex items-center">
              <button
                onClick={() => setCounter(counter - 1)}
                type="button"
                className="para-1 px-4 text-xl hover:bg-primary rounded-full mr-2"
              >
                -
              </button>
              <p className="para-1">{counter}</p>
              <button
                onClick={() => setCounter(counter + 1)}
                type="button"
                className="para-1 px-4 text-xl hover:bg-primary rounded-full ml-2"
              >
                +
              </button>
            </div>
          </div>
          <button
            type="button"
            className="px-7 py-4 uppercase font-DMSans font-bold outline-1 outline-primary text-base bg-primary rounded-full"
          >
            add to cart
          </button>
          <p className="para-1 mr-3 mt-7">
            SKU:
            {' '}
            {id}
          </p>
          <p className="para-1 mr-3 mt-2">Category: Resturent</p>
          <div className="mt-7">
            <p className="heading-4 mb-5">Follow on:</p>
            <div className="flex  text-2xl">
              <div className="flex items-center justify-center h-10 w-10 border border-gray-400 bg-transparent hover:bg-primary hover:border-dimBlack rounded-full mr-8">
                <FaFacebookF className="" />
              </div>
              <div className="flex items-center justify-center h-10 w-10 border border-gray-400 bg-transparent hover:bg-primary hover:border-dimBlack rounded-full mr-8">
                <IoLogoInstagram className="" />
              </div>
              <div className="flex items-center justify-center h-10 w-10 border border-gray-400 bg-transparent hover:bg-primary hover:border-dimBlack rounded-full">
                <AiOutlineTwitter className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 md:px-10 lg:py-12 xl:px-40">
        <div className="flex items-center justify-around mb-8">
          <p
            className={`${showDescription ? 'underline' : ''} para-1`}
            onClick={() => setShowDescription(!showDescription)}
          >
            Discription
          </p>
          <p
            className={`${!showDescription ? 'underline' : ''} para-1`}
            onClick={() => setShowDescription(!showDescription)}
          >
            Reviews
          </p>
        </div>
        <div className="para-3 lg:para-1">
          {showDescription ? full : reviews.map((r) => (
            <Review name={r.name} review={r.review} rating={r.rating} />))}
        </div>
      </div>
      {!showDescription ? (
        <div className="p-5 md:px-10 lg:py-12 xl:px-40">
          <h1 className="heading-3 mb-4">Add a review</h1>
          <p className="para-1 mb-8">Your email will not be published.</p>
          <div className="mb-8">
            <h3 className="font-Aclonica text-3xl mb-4">Your ratting</h3>
            <InputStar stars={stars} handelClick={handelClick} />
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="lg:flex items-center justify-between gap-8">
              <input
                {...register('name', { required: true })}
                className="block bg-white appearance-none focus:outline-none focus:bg-white para-1 text-xl p-8 w-full text-dimBlack accent-inherit  rounded-full mb-8 border border-dimBlack overflow-hidden font-Aclonica lg:heading-4 lg:opacity-70"
                type="text"
                placeholder="Name"
              />
              <input
                {...register('email', { required: true })}
                className="block bg-white appearance-none focus:outline-none focus:bg-white para-1 text-xl p-8 w-full text-dimBlack accent-inherit  rounded-full mb-8 border border-dimBlack overflow-hidden font-Aclonica lg:heading-4 lg:opacity-70"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-5">
              <h1 className="heading-4 mb-3">Message</h1>
              <textarea
                {...register('review', { required: true })}
                className="block bg-transparent appearance-none focus:outline-none para-1 text-xl p-4 w-full text-dimBlack accent-inherit   mb-8 border-dimBlack border-b-2 overflow-hidden font-Aclonica"
                type="text"
                placeholder=""
              />
            </div>
            <button
              type="submit"
              className="w-full p-8 bg-primary text-dimBlack font-Aclonica text-xl rounded-full lg:heading-4"
            >
              Submit
            </button>
          </form>
        </div>
      ) : ('')}
    </>
  );
}
