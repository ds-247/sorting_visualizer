import React, { useState } from "react";
import Draggable from "./draggable/Draggable";
import DropArea from "./drop/DropArea";
import "./dropable.scss";

export default function Droppable({array, max, setArray}) {
  
  const [dragIndex, setDragIndex] = useState(null);

  function onDrop(index) {
    if (dragIndex === null || dragIndex === undefined) return;

    // Create a new copy of the array
    const newArray = [...array];

    const element = newArray[dragIndex];
    newArray.splice(index, 0, element); // Insert it at the drop index
    newArray.splice(dragIndex, 1); // Remove the dragged element

    setArray(newArray); // Update the state with the new array
    setDragIndex(null); // Reset the dragIndex
  }

  return (
    <div className="droppable">
      <DropArea onDrop={() => onDrop(0)} />
      {array.map((algo, index) => {
        return (
          <React.Fragment key={index + " " + algo}>
            <Draggable algo={algo} setDrag={setDragIndex} index={index} max={max} />
            <DropArea onDrop={() => onDrop(index + 1)} />
          </React.Fragment>
        );
      })}
    </div>
  );
}
