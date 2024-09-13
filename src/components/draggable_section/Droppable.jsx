import Draggable from "./draggable/Draggable";
import "./dropable.scss";

const array = ["Merge Sort", "Quick Sort", "Selection Sort", "Insertion Sort", "Bubble Sort"];

export default function Droppable () {
    return (
        <div className="droppable">
            {array.map(algo => {
               return <Draggable />;
           })}
        </div>
    )
}