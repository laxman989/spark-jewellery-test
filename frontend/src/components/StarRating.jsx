import React from 'react';
import { FaStar } from "react-icons/fa"

const RatingStar = ({ value, id, checked }) => (
  <div className="flex items-center mr-1">
    <input
      type="radio"
      id={id}
      name="rate"
      value={value}
      checked={checked}
      className="hidden visually-hidden"
    />
    <label htmlFor={id} className="cursor-pointer text-xl text-yellow-500 hover:text-orange-400">
      <FaStar size={18} />
    </label>
  </div>
);

const StarRating = ({ stars }) => (
  <div className="flex">
    {stars.map((star) => (
      <RatingStar key={star.id} {...star} />
    ))}
  </div>
);

export default StarRating;