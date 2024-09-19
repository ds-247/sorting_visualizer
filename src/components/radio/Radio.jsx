import React, { useState } from "react";
import "./radio.scss";

export default function Radio({ name, checked, option, disable, onChange }) {
  function handleOptionChange() {
    // Toggle the checked state manually (like a checkbox)
    if (!disable) {
      onChange((prev) => !prev);
    }
  }

  return (
    <div className="radio-cont">
      <input
        type="checkbox" // Change the input type to 'checkbox' to get the desired behavior
        name={name}
        value={option}
        checked={checked} // Bind the checked state
        onChange={handleOptionChange} // Toggle when clicked
        disabled={disable}
      />
      <label>{option}</label>
    </div>
  );
}
