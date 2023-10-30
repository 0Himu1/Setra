/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import f2 from '../images/f2.jpg';

export default function Contact() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.table(data);
  return (
    <>
      <div className="h-screen">
        <div className="bg-dimWhite px-5 py-10 lg:py-16 mt-20">
          <h1 className="heading-1 text-8xl text-left mb-3 lg:text-center">
            Contact Setra
          </h1>
          <p className="para-1 mb-7 lg:text-center">
            Anywhere. anytime. the best pizza in town. For those special moments
            with friends & Family.
          </p>
        </div>
        <img src={f2} className="h-80 lg:h-[610px] w-full object-cover" alt="human" />
      </div>
      <div className="px-5 py-20 md:px-20 lg:px-40 xl:px-60 bg-dimWhite">
        <div className="mb-14 lg:text-center">
          <h1 className="font-Aclonica text-5xl mb-3">Contact Us</h1>
          <p className="para-1 text-xl ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero iusto
            mollitia id reprehenderit omnis non.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <div className="xl:flex items-center justify-between gap-8 xl:mb-14">
            <input
              {...register('firstName', { required: true })}
              className="block bg-white appearance-none focus:outline-none focus:bg-white para-1 text-xl p-8 w-full text-dimBlack accent-inherit  rounded-full mb-3 border border-dimBlack overflow-hidden lg:font-Aclonica lg:heading-4 lg:opacity-70"
              type="text"
              placeholder="First Name"
            />
            <input
              {...register('lastName', { required: true })}
              className="block bg-white appearance-none focus:outline-none focus:bg-white para-1 text-xl p-8 w-full text-dimBlack accent-inherit  rounded-full mb-3 border border-dimBlack overflow-hidden lg:font-Aclonica lg:heading-4 lg:opacity-70"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div className="xl:flex items-center justify-between gap-8 xl:mb-14">
            <input
              {...register('email', { required: true })}
              className="block bg-white appearance-none focus:outline-none focus:bg-white para-1 text-xl p-8 w-full text-dimBlack accent-inherit  rounded-full mb-3 border border-dimBlack overflow-hidden lg:font-Aclonica lg:heading-4 lg:opacity-70"
              type="email"
              placeholder="Email"
            />
            <input
              {...register('phoneNumber', { required: true })}
              className="block bg-white appearance-none focus:outline-none focus:bg-white para-1 text-xl p-8 w-full text-dimBlack accent-inherit  rounded-full mb-3 border border-dimBlack overflow-hidden lg:font-Aclonica lg:heading-4 lg:opacity-70"
              type="tel"
              placeholder="Phone"
            />
          </div>
          <div className="mb-5">
            <h1 className="heading-4 mb-3">Message</h1>
            <textarea
              {...register('message', { required: true })}
              className="block bg-transparent appearance-none focus:outline-none para-1 text-xl p-4 w-full text-dimBlack accent-inherit   mb-3 border-dimBlack border-b-2 overflow-hidden lg:font-Aclonica"
              type="text"
              placeholder=""
            />
          </div>
          <button
            type="submit"
            className="w-full p-8 bg-primary text-dimBlack font-Aclonica text-xl rounded-full lg:heading-4"
          >
            Reserve A Table
          </button>
        </form>
      </div>
    </>
  );
}
