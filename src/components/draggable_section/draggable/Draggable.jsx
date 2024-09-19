import Stats from "../../stats/Stats";
import "./draggable.scss";

export default function Draggable ({ algo, max }) {
  return (
    <div
      className="draggable"
      draggable
      style={{ backgroundColor: algo.color }}
    >
      <div>{algo.name}</div>
      <Stats algo={algo} max={max} />
      <div>{algo.complexity}</div>
    </div>
  );
}
