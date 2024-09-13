import { useState } from "react";
import Button from "../button/Button";
import Input from "../input/Input";
import Radio from "../radio/Radio";
import Top from "../top/Top";
import Droppable from "../draggable_section/Droppable";
import "./second.scss";

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
          
          <Droppable />
    </div>
  );
}
