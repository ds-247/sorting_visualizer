import React, { useState } from "react";
import Draggable from "./draggable/Draggable";
import "./dropable.scss";

export default function Droppable({ array, max }) {
  return (
    <div className="droppable">
      {array.map((algo, index) => {
        return (
          <React.Fragment key={index + " " + algo}>
            <Draggable
              algo={algo}
              max={max}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
}
