import React, { useState } from "react";
import "./slider.scss";

const Slider = ({ min, max, step, label }) => {
  const [value, setValue] = useState((min + max) / 2);

  const handleSliderChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <label>
        {label}: {value}
      </label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleSliderChange}
      />
    </div>
  );
};

export default Slider;
