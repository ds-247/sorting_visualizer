import { useState } from "react";
import Button from "../button/Button";
import Top from "../top/Top";
import Viz from "./visualize/Viz";
import Dropdown from "./../dropdown/Dropdown";
import Radio from "../radio/Radio";
import "./first.scss";

const algoList = ["Bubble", "Selection", "Insertion", "Merge", "Quick"];
const speedList = [{ 1: 50 }, { 2: 40 }, { 3: 30 }, { 4: 20 }, { 5: 10 }];
const data = [
  32, 92, 147, 20, 196, 174, 37, 94, 155, 200, 93, 41, 6, 181, 137, 146, 47, 96,
  104, 198, 40, 147, 4, 29, 182, 155, 50, 125, 37, 71, 194, 7, 127, 27, 91, 144,
  74, 61, 33, 172, 185, 178, 122, 51, 50, 161, 114, 144, 123, 176, 140, 63, 166,
  51, 30, 165, 19, 177, 193, 133, 13, 5, 31, 136, 27, 68, 20, 27, 186, 115,
];

const MIN = 3;
const MAX = 200;

export default function FirstSection() {
  const [comp1, setComp1] = useState(0);
  const [comp2, setComp2] = useState(0);
  const [algo, setAlgo] = useState("Quick");
  const [arr, setArr] = useState(data);
  const [ms, setSpeed] = useState(30);

  function sleep() {
    return new Promise((res) => setTimeout(res, ms));
  }

  function handleRestart() {
    let nums = [];
    for (let i = 1; i <= 70; i++) {
      let val = Math.random() * (MAX - MIN) + MIN;
      nums.push(val);
    }

    setArr(nums);
  }

  function handleAlgoSelection(algo) {
    setAlgo(algo);
  }

  function handleStart() {
    if (algo === "Bubble") bubbleSort(arr);
    else if (algo === "Quick") quick_sort(0, arr.length - 1, arr);
    else if (algo === "Merge") merge_sort(0, arr.length - 1, arr);
    else if (algo === "Selection") selectionSort(arr);
    else if (algo === "Insertion") insertionSort(arr);
  }

  async function quick_sort(lo, hi, data) {
    if (lo <= hi) {
      let pivot_ind = await partition(lo, hi, data);

      await quick_sort(lo, pivot_ind - 1, data);
      await quick_sort(pivot_ind + 1, hi, data);
    }
  }

  async function partition(lo, hi, data) {
    let pivot = lo;
    let left = lo + 1;
    let right = hi;

    while (left <= right) {
      while (left <= right && data[left] <= data[pivot]) {
        left++;
        setComp1(left);
        await sleep();
      }
      while (left <= right && data[right] >= data[pivot]) {
        right--;

        setComp2(right);
        await sleep();
      }

      if (left < right) {
        let temp = data[left];
        data[left] = data[right];
        data[right] = temp;
      }
    }

    let temp = data[right];
    data[right] = data[pivot];
    data[pivot] = temp;

    setArr([...data]);
    await sleep();

    return right;
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

  async function insertionSort(data) {
    for (let i = 0; i < data.length; i++) {
      let j = i - 1;
      let value = data[i];
      while (j >= 0 && data[j] >= value) {
        let val = data[j];
        data[j] = data[j + 1];
        data[j + 1] = val;
        j--;
        setComp1(j);
        await sleep();
        setComp2(j + 1);
        await sleep();
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

  function handleSpeedChange(speed) {
    setSpeed(speed);
  }

  function SpeedUp() {
    setSpeed((prev) => {
      return prev - 10 <= 5 ? 5 : prev - 10;
    });
  }

  return (
    <div className="first">
      <Top>
        <Dropdown
          label="Algos"
          options={algoList}
          selected={algo}
          handleAlgoSelection={handleAlgoSelection}
        />
        <Radio name="name" option="Negatives" />
        <Button value="Start" onClick={handleStart} />
        <Button value="Restart" onClick={handleRestart} />
        <Dropdown
          label="Speed"
          options={speedList}
          selected={ms}
          handleAlgoSelection={handleSpeedChange}
        />
      </Top>

      <Viz data={arr} one={comp1} two={comp2} />
    </div>
  );
}
