import Stats from "../../stats/Stats";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import "./draggable.scss";

export default function Draggable({ algo, max, index }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({index})

  const style = {
    backgroundColor: algo.color,
    transition,
    transform: CSS.Transform.toString(transform)
  }

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className="draggable"
      style={style}
    >
      <div>{algo.name}</div>
      <Stats algo={algo} max={max} />
      <div>{algo.complexity}</div>
    </div>
  );
}
