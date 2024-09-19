import React from "react";
import Draggable from "./draggable/Draggable";
import { closestCorners, DndContext } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import "./dropable.scss";

export default function Droppable({ array, max }) {
  return (
    <DndContext collisionDetection={closestCorners}>
      <div className="droppable">
        <SortableContext items={array} strategy={verticalListSortingStrategy}>
          {array.map((algo, index) => {
            return (
              <React.Fragment key={index + " " + algo}>
                <Draggable algo={algo} max={max} />
              </React.Fragment>
            );
          })}
        </SortableContext>
      </div>
    </DndContext>
  );
}
