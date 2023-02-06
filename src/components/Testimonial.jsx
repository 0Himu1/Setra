import React from 'react';
import TextimonialImages from './TextimonialImages';

export default function Testimonial() {
  return (
    <div className="px-5 py-20 md:px-20 xl:px-40 bg-dimWhite">
      <p className="heading-5 text-secondary text-center">Testimonial</p>
      <h1 className="heading-3 md:heading-2 mr-10 mb-8 text-dimBlack text-center">
        What People says
      </h1>
      <div className="flex justify-around w-auto">
        <h3>Joe Elia</h3>
        <h3>Paul Crish</h3>
        <h3>Anand C</h3>
        <h3>Alexa Bless</h3>
      </div>
      <TextimonialImages className="" />
    </div>
  );
}
