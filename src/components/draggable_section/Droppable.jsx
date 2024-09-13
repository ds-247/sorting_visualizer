import Draggable from "./draggable/Draggable";
import "./draggables.scss";

const array = ["Merge Sort", "Quick Sort", "Selection Sort", "Insertion Sort", "Bubble Sort"];

export default function Draggables () {
    return (
        <div className="draggables">
            {array.map(algo => {
               return <Draggable />;
           })}
        </div>
    )
}