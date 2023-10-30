/* eslint-disable no-nested-ternary */
import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

export default function StarRating({ star }) {
  const rettingStar = Array.from({ length: 5 }, (e, i) => {
    const number = i + 0.5;
    return (
      <span key={i}>
        {star >= i + 1 ? (
          <BsStarFill className="text-orange-400 mr-1" />
        ) : star >= number ? (
          <BsStarHalf className="text-orange-400 mr-1" />
        ) : (
          <BsStar className="text-orange-400 mr-1" />
        )}
      </span>
    );
  });
  return (
    <div className="flex items-center">
      {rettingStar}
    </div>
  );
}
