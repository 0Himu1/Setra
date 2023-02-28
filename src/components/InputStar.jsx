/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import React from 'react';
import { BsStarFill, BsStar } from 'react-icons/bs';

export default function InputStar({ handelClick, stars }) {
  return (
    <span className="flex text-orange-400 para-1">
      {stars.map((o) => (o.filled ? (
        <BsStarFill
          key={o.id}
          onClick={() => handelClick(o.id)}
          className="mr-1"
        />
      ) : (
        <BsStar
          key={o.id}
          onClick={() => handelClick(o.id)}
          className="mr-1"
        />
      )))}
    </span>
  );
}
