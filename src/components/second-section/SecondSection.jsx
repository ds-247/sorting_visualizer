import Button from "../button/Button";
import Input from "../input/Input";
import Radio from "../radio/Radio";
import Top from "../top/Top";
import "./second.scss";
import Input from "../input/Input";
import { useState } from "react";
import Draggables from "../draggable_section/Droppable";

export default function SecondSection() {
  const [size, setSize] = useState(10);
  const [negative, setNegative] = useState(false);

  function handleAnalyze() {}

  function handleReset() {}

  function onSizeChange(size) {
    setSize(size);
  }

  function onNegativeChange() {
    setNegative((prev) => !prev);
  }

  return (
    <div className="second">
      <Top>
        <Input value={size} onChange={onSizeChange} />
        <Radio
          name="name"
          option="Negatives"
          checked={negative}
          disable={false}
          onChange={onNegativeChange}
        />
        <Button value="Analyze" onClick={handleAnalyze} disable={false} />
        <Button value="Reset" onClick={handleReset} disable={false} />
          </Top>
          
          <Draggables />
    </div>
  );
}
