'use client';

import { useState, useEffect, useRef } from 'react';
import './Style/RangSlider.css';

function RangeSlider({
  initialMin, initialMax, min, max, step, priceCap,
}) {
  const progressRef = useRef(null);
  const [minValue, setMinValue] = useState(initialMin);
  const [maxValue, setMaxValue] = useState(initialMax);

  const handleMin = (e) => {
    if (maxValue - minValue >= priceCap && maxValue <= max) {
      if (parseInt(e.target.value, 10) > parseInt(maxValue, 10)) { /* empty */ } else {
        setMinValue(parseInt(e.target.value, 10));
      }
    } else if (parseInt(e.target.value, 10) < minValue) {
      setMinValue(parseInt(e.target.value, 10));
    }
  };

  const handleMax = (e) => {
    if (maxValue - minValue >= priceCap && maxValue <= max) {
      if (parseInt(e.target.value, 10) < parseInt(minValue, 10)) { /* empty */ } else {
        setMaxValue(parseInt(e.target.value, 10));
      }
    } else if (parseInt(e.target.value, 10) > maxValue) {
      setMaxValue(parseInt(e.target.value, 10));
    }
  };

  useEffect(() => {
    progressRef.current.style.left = `${(minValue / max) * 100}%`;
    progressRef.current.style.right = `${(step - (maxValue / max)) * 100}%`;
  }, [minValue, maxValue, max, step]);

  return (
    <div className="">

      <div className="flex justify-between items-center my-6 ">
        <div className="">
          <span className="font-DMSans text-xl mr-2 "> Min</span>
          <input
            onChange={(e) => setMinValue(e.target.value)}
            type="number"
            value={minValue}
            className="w-24 border-b focus:outline-none border-dimBlack text-right"
          />
        </div>
        <div className=" ">
          <span className="font-DMSans text-xl mr-2 "> Max</span>
          <input
            onChange={(e) => setMaxValue(e.target.value)}
            type="number"
            value={maxValue}
            className="w-24 border-b focus:outline-none border-dimBlack text-right"
          />
        </div>
      </div>

      <div className="mb-4">
        <div className="slider relative h-1 rounded-md bg-gray-300">
          <div
            className="progress absolute h-1 bg-dimBlack rounded "
            ref={progressRef}
          />
        </div>

        <div className="range-input relative  ">
          <input
            onChange={handleMin}
            type="range"
            min={min}
            step={step}
            max={max}
            value={minValue}
            className="range-min absolute w-full  -top-1  h-1   bg-transparent  appearance-none pointer-events-none"
          />

          <input
            onChange={handleMax}
            type="range"
            min={min}
            step={step}
            max={max}
            value={maxValue}
            className="range-max absolute w-full  -top-1 h-1  bg-transparent appearance-none  pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
}

export default RangeSlider;
