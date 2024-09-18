import Stats from "../../stats/Stats";
import "./draggable.scss";

export default function Draggable ({ algo, max, setDrag, index }) {
  return (
    <div
      className="draggable"
      draggable
      onDragStart={() => setDrag(index)}
      onDragEnd={() => setDrag(null)}
    >
      <div>{algo.name}</div>
          <Stats algo={algo} max={max} />
          <div>{algo.complexity}</div>
    </div>
  );
}
