import React from "react";
import Draggable from "./draggable/Draggable";
import { closestCorners, DndContext } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import "./dropable.scss";

export default function Droppable({ array, max, setArray }) {
  const getElemId = (id) => array.findIndex((elem) => elem.id === id);

  function handleDragEnd(event) {
    const { active, over } = event;

    if (!over || active.id === over.id) return; // Ensure 'over' is valid

    setArray((elem) => {
      const originalPos = getElemId(active.id);
      const newPos = getElemId(over.id);

      return arrayMove(elem, originalPos, newPos); // Avoid using 'array' directly
    });
  }

  return (
    <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
      <div className="droppable">
        <SortableContext items={array} strategy={verticalListSortingStrategy}>
          {array.map((algo, index) => (
            <Draggable key={algo.id} algo={algo} max={max} index={index} /> // Use index from map
          ))}
        </SortableContext>
      </div>
    </DndContext>
  );
}
