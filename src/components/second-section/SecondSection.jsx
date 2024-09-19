import { useState } from "react";
import Button from "../button/Button";
import Input from "../input/Input";
import Top from "../top/Top";
import Droppable from "../draggable_section/Droppable";
import RandomArray from "../../utils/generate_random_array.js";
import Sortings from "../../utils/algos.js";
import "./second.scss";

const data = [
  { name: "Merge Sort", time: 0, complexity: "O(N_log(N))", color: "#3498db " },
  { name: "Quick Sort", time: 0, complexity: "O(N_log(N))", color: "#2ecc71" },
  { name: "Selection Sort", time: 0, complexity: "O(N^2)", color: "#f39c12" },
  { name: "Insertion Sort", time: 0, complexity: "O(N^2)", color: "#9b59b6" },
  { name: "Bubble Sort", time: 0, complexity: "O(N^2)", color: "#e74c3c" },
];

export default function SecondSection() {
  const [max, setMax] = useState(0);
  const [size, setSize] = useState(30000);
  const [algos, setAlgos] = useState(data);

  function handleAnalyze() {
    if (size <= 0) alert("Please enter size of the array :D ");

    const random = RandomArray.generateRandomArray(size);
    let temp_array = algos.map(obj=>({...obj}));
    let temp_max = 2;

    const obj = Sortings(random);

    const bubble = obj.BUBBLE();
    temp_array[4].time = bubble;
    temp_max = Math.max(temp_max, bubble);

    const selection = obj.SELECTION();
    temp_array[2].time = selection;
    temp_max = Math.max(temp_max, selection);

    const Insertion = obj.INSERTION();
    temp_array[3].time = Insertion;
    temp_max = Math.max(temp_max, Insertion);

    const merge = obj.MERGE();
    temp_array[0].time = merge;
    temp_max = Math.max(temp_max, merge);

    const quick = obj.QUICK();
    temp_array[1].time = quick;
    temp_max = Math.max(temp_max, quick);


    setMax(temp_max);
    setAlgos(temp_array);
  }

  function handleReset() {
    setAlgos(data)
    setMax(prev => 0)
  }

  function onSizeChange(new_size) {
    const temp_size = size;
    setSize(new_size);

    if (new_size > 50000) {
      alert("Size should be less than 30000...")
      setSize(prev => temp_size);
      return;
    }
  }



  return (
    <div className="second">
      <Top>
        <Input value={size} onChange={onSizeChange} />
        <Button value="Analyze" onClick={handleAnalyze} disable={false} />
        <Button value="Reset" onClick={handleReset} disable={false} />
      </Top>

      <Droppable array={algos} max={max} />
    </div>
  );
}
