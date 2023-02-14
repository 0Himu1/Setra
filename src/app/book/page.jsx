/* eslint-disable react/jsx-props-no-spreading */

'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { BsPerson } from 'react-icons/bs';
import { BiGroup } from 'react-icons/bi';
import BigButton from '@/components/BigButton';

export default function page() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.table(data);
  return (
    <>
      <div className="bg-hero bg-primary mt-20 px-5 py-10 heading-1 h-screen text-center text-dimBlack flex justify-center items-center">
        Book A Table
      </div>
      <div className="px-5 py-20 md:px-20 lg:px-40 bg-dimWhite xl:flex justify-between items-center">
        <div className="flex-1">
          <p className="heading-5 text-secondary">Reservation</p>
          <h1 className="heading-3 md:heading-2 mr-10 mb-8 text-dimBlack">
            make a reservation
          </h1>
          <BigButton text="about setra" className="mb-10" normal />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex-1">
          <div className="flex justify-center items-center bg-white rounded-full mb-3 border border-dimBlack overflow-hidden">
            <input
              {...register('Name', { required: true })}
              className="block bg-transparent appearance-none focus:outline-none focus:bg-white para-1 text-xl p-8 w-full text-dimBlack accent-inherit"
              type="text"
              placeholder="Your Name"
            />
            <BiGroup className="text-3xl mr-8 font-bold" />
          </div>
          <div className="flex justify-center items-center bg-white rounded-full mb-3 border border-dimBlack">
            <input
              {...register('people', { required: true })}
              className="block bg-transparent appearance-none focus:outline-none para-1 text-xl p-8 w-full text-dimBlack accent-inherit"
              type="number"
              placeholder="Person"
            />
            <BsPerson className="text-3xl mr-8 font-bold" />
          </div>
          <div className="flex justify-center items-center bg-white rounded-full mb-3 border border-dimBlack">
            <input
              {...register('date', { required: true })}
              className="block bg-transparent appearance-none focus:outline-none para-1 text-xl p-8 w-full text-dimBlack accent-inherit"
              type="date"
            />
          </div>
          <div className="flex justify-center items-center bg-white rounded-full mb-8 border border-dimBlack">
            <input
              {...register('time', { required: true })}
              className="block bg-transparent appearance-none focus:outline-none para-1 text-xl p-8 w-full text-dimBlack accent-inherit"
              type="time"
              placeholder="22:00 AM"
            />
          </div>

          <button
            type="submit"
            className="w-full p-8 bg-primary text-dimBlack font-Aclonica text-xl lg:heading-4 rounded-full "
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
