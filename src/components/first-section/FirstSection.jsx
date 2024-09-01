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
  200, 122, 13, 42, 56, 127, 76, 54, 3, 142, 23, 22, 23, 42, 43, 200, 122, 13,
  42, 56, 127, 76, 54, 3, 142, 23, 22, 23, 42, 43, 200, 122, 13, 42, 56, 127,
  76, 54, 3, 142, 23, 22, 23, 42, 43, 200, 122, 13, 42, 56, 127, 76, 54, 3
];

export default function FirstSection() {
  const [comp1, setComp1] = useState(0);
  const [comp2, setComp2] = useState(0);
  const [arr, setArr] = useState(data);
  const ms = 5;

  function sleep() {
    return new Promise((res) => setTimeout(res, ms));
  }

  function handleClick() {
    // quickSort();
    // merge_sort(0, data.length-1, data);
    // selectionSort(data);
    // insertionSort(data);  
    bubbleSort(data);
  }

async function merge_sort(lo, hi, data) {
  if (lo < hi) {
    let mid = Math.floor(lo + (hi - lo) / 2);

    // Visualize current boundaries
    setComp1(lo); // Highlight left boundary
    await sleep();
    setComp2(hi); // Highlight right boundary
    await sleep();

    // Sort first and second halves
    await merge_sort(lo, mid, data);
    await sleep();
    await merge_sort(mid + 1, hi, data);
    await sleep();

    // Merge the two halves
    await merge(lo, mid, hi, data);
    await sleep();
  }
}

async function merge(left, mid, right, data) {
  let temp_arr = [];

  let left_ind = left;
  let right_ind = mid + 1;

  // Merge the two subarrays
  while (left_ind <= mid && right_ind <= right) {
    if (data[left_ind] <= data[right_ind]) {
      temp_arr.push(data[left_ind++]);
    } else {
      temp_arr.push(data[right_ind++]);
    }
  }

  // Copy any remaining elements of the left subarray
  while (left_ind <= mid) temp_arr.push(data[left_ind++]);

  // Copy any remaining elements of the right subarray
  while (right_ind <= right) temp_arr.push(data[right_ind++]);

  // Copy the merged elements back into the original array
  for (let i = 0; i < temp_arr.length; i++) {
    data[left + i] = temp_arr[i];
  }

  // Visualize the updated array
  setArr([...data]); // Use spread operator to ensure state updates correctly
  await sleep();
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
        await sleep();
        setComp2(j+1);
        await sleep()
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
          await sleep();
        }
      }
      setArr(data);
      await sleep();
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
        await sleep();
      }
      let val = data[minInd];
      data[minInd] = data[i];
      data[i] = val;
      setComp1(Math.min(data.length - 1, i + 1));
      setArr(data);
      await sleep();
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
