import React from "react";
import Draggable from "./draggable/Draggable";
import { closestCorners, DndContext } from "@dnd-kit/core";
import "./dropable.scss";

export default function Droppable({ array, max }) {
  return (
    <DndContext collisionDetection={closestCorners}>
      <div className="droppable">
        {array.map((algo, index) => {
          return (
            <React.Fragment key={index + " " + algo}>
              <Draggable algo={algo} max={max} />
            </React.Fragment>
          );
        })}
      </div>
    </DndContext>
  );
}
