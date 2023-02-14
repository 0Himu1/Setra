'use client';

import React, { useState } from 'react';

export default function CustomSlider({
  min, max, step, priceCap,
}) {
  const [minValue, setMinValue] = useState(10);
  const [maxValue, setMaxValue] = useState(80);

  const handleMin = (e) => {
    const newMinValue = parseInt(e.target.value, 10);
    if (newMinValue <= maxValue - priceCap && newMinValue >= min) {
      setMinValue(newMinValue);
    } else if (newMinValue > maxValue - priceCap && maxValue - priceCap >= min) {
      setMinValue(maxValue - priceCap);
    }
  };

  const handleMax = (e) => {
    const newMaxValue = parseInt(e.target.value, 10);
    if (newMaxValue >= minValue + priceCap && newMaxValue <= max) {
      setMaxValue(newMaxValue);
    } else if (newMaxValue < minValue + priceCap && minValue + priceCap <= max) {
      setMaxValue(minValue + priceCap);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <span className="font-DMSans text-xl mb-2">Min</span>
        <input
          onChange={handleMin}
          type="number"
          value={minValue}
          className="border-b focus:border-b-2 focus:outline-none focus:border-b-dimBlack border-gray-400"
        />
      </div>
      <div className="flex justify-between items-center mb-4">
        <span className="font-DMSans text-xl mb-2">Max</span>
        <input
          onChange={handleMax}
          type="number"
          value={maxValue}
          className="border-b focus:border-b-2 focus:outline-none focus:border-b-dimBlack border-gray-400"
        />
      </div>
      <div className="mb-4">
        <div className="relative h-1 rounded-md">
          <div className="absolute h-1 bg-dimBlack" />
        </div>
        <div className="relative">
          <input
            onChange={handleMin}
            min={min}
            step={step}
            max={max}
            type="range"
            value={minValue}
            className="absolute w-full -top-1 h-1 bg-transparent appearance-none pointer-events-auto"
          />
          <input
            onChange={handleMax}
            min={min}
            step={step}
            max={max}
            type="range"
            value={maxValue}
            className="absolute w-full top-4 h-1 bg-transparent appearance-none pointer-events-auto"
          />
        </div>
      </div>
    </div>
  );
}
