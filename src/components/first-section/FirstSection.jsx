import { useState } from "react";
import Button from "../button/Button";
import Top from "../top/Top";
import "./first.scss";
import Viz from "./visualize/Viz";
import Dropdown from "./../dropdown/Dropdown";
import Radio from "../radio/Radio";

const algos = ["Option 1", "Option 2", "Option 3"];
const data = [
  142, 23, 22, 23, 42, 43, 200, 122, 13, 42, 56, 127, 76, 54, 3, 142, 23, 22,
  23, 42, 43, 200, 122, 13, 42, 56, 127, 76, 54, 3, 142, 23, 22, 23, 42, 43,
  200, 122, 13, 42, 56, 127, 76, 54, 3,
];

export default function FirstSection() {
  const [comp1, setComp1] = useState(0);
  const [comp2, setComp2] = useState(0);
  const [arr, setArr] = useState(data);

  function sleep(ms) {
    return new Promise((res) => setTimeout(res, ms));
  }

  function handleClick() {
    // quickSort();
    // mergeSort();
    selectionSort(data);
    // insertionSort(data);
    // bubbleSort(data);
  }

 async   function insertionSort(data) {
    for (let i = 0; i < data.length; i++) {
      let j = i-1;
      let value = data[i];
      while (j >= 0 && data[j] >= value) {
         let val = data[j];
         data[j] = data[j+1];
         data[j+1] = val;
        j--;
        setComp1(j);
        await sleep(10);
        setComp2(j+1);
        await sleep(10)
      }
    }
    setArr(data);
  }

  async function bubbleSort(data) {
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data.length - 1; j++) {
        setComp1(j);
        setComp2(j + 1);
        if (data[j] > data[j + 1]) {
          let val = data[j];
          data[j] = data[j + 1];
          data[j + 1] = val;
          await sleep(20);
        }
      }
      setArr(data);
      await sleep(20);
    }
  }

  async function selectionSort(data) {
    for (let i = 0; i < data.length; i++) {
      let minInd = i;
      for (let j = minInd + 1; j < data.length; j++) {
        if (data[j] < data[minInd]) {
          minInd = j;
          setComp1(minInd);
        }
        setComp2(j);
        await sleep(10);
      }
      let val = data[minInd];
      data[minInd] = data[i];
      data[i] = val;
      console.log("before");
      setComp1(Math.min(data.length - 1, i + 1));
      setArr(data);
      await sleep(10);
      console.log("after");
    }
  }

  

  return (
    <div className="first">
      <Top>
        <Dropdown options={algos} />
        <Radio name="name" option="option" />
        <Button value="New Array" />
        <Button value="Start" sort={handleClick} />
        <Button value="Speed" />
      </Top>

      <Viz data={arr} one={comp1} two={comp2} />
    </div>
  );
}
