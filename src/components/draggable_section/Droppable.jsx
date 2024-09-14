import React, { useState } from "react";
import Draggable from "./draggable/Draggable";
import "./dropable.scss";
import DropArea from "./drop/DropArea";

const data = ["Merge Sort", "Quick Sort", "Selection Sort", "Insertion Sort", "Bubble Sort"];

export default function Droppable() {
    const[array, setArray] = useState(data)
  const [dragIndex, setDragIndex] = useState(null);
    
  function onDrop(index) {
      if (dragIndex === null || dragIndex === undefined) return;
      
    //   const cur_dragged_item = array[dragIndex];
    //   let temp_array = array.splice(index,)
      

    // console.log(array);
    const element = array.splice(dragIndex, 1)[0];
    
    // console.log(array);
      // Insert the element at `toIndex`
     array.splice(index, 0, element);
    //   console.log(temp_array)

      setArray(array)

  }
    return (
        <div className="droppable">
            <DropArea onDrop={() => onDrop(0)}  />
            {array.map((algo, index) => {
               return (
                 <React.Fragment key={index + " " + algo}>
                   <Draggable title={algo} setDrag={setDragIndex} index={index} />

                   <DropArea onDrop={() => onDrop(index + 1)} />
                 </React.Fragment>
               );
           })}
        </div>
    )
}