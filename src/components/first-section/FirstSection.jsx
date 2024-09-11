import { useState } from "react";
import Button from "../button/Button";
import Top from "../top/Top";
import Viz from "./visualize/Viz";
import Dropdown from "./../dropdown/Dropdown";
import Radio from "../radio/Radio";
import "./first.scss";

const algoList = ["Bubble", "Selection", "Insertion", "Merge", "Quick"];
const speedList = [
  { Visualize: 350 },
  { "Speed 2 x": 250 },
  { "Speed 3 x": 150 },
  { "Speed 4 x": 100 },
  { "Speed 5 x": 50 },
];
const data = [
  32, 92, 147, 20, 196, 174, 37, 94, 155, 200, 93, 41, 6, 181, 137, 146, 47, 96,
  104, 198, 40, 147, 4, 29, 182, 155, 50, 125, 37, 71,
];

const MIN = 30;
const MAX = 200;

export default function FirstSection() {
  const [swapArr, setSwapArr] = useState([]);
  const [iter, setIter] = useState(0);
  const [activated, setActivated] = useState();
  const [spectator, setSpectator] = useState();
  const [algo, setAlgo] = useState("Insertion");
  const [arr, setArr] = useState(data);
  const [ms, setSpeed] = useState(350);

  function sleep() {
    return new Promise((res) => setTimeout(res, ms));
  }

  function handleRestart() {
    let nums = [];
    for (let i = 1; i <= 30; i++) {
      let val = Math.random() * (MAX - MIN) + MIN;
      nums.push(val);
    }

    setArr([...nums]);
  }

  async function swap(nums, i, j) {
    [nums[j], nums[i]] = [nums[i], nums[j]];
    setSwapArr([i, j]);
    await sleep();
    setSwapArr((prev) => []);
    await sleep();
  }

  function handleAlgoSelection(algo) {
    setAlgo(algo);
  }

  function handleStart() {
    if (algo === "Bubble") bubbleSort(arr);
    else if (algo === "Selection") selectionSort(arr);
    else if (algo === "Insertion") insertionSort(arr);
    // else if (algo === "Quick") quick_sort(0, arr.length - 1, arr);
    // else if (algo === "Merge") merge_sort(0, arr.length - 1, arr);
  }

  // async function quick_sort(lo, hi, data) {
  //   if (lo <= hi) {
  //     let pivot_ind = await partition(lo, hi, data);

  //     Promise.all([
  //       await quick_sort(lo, pivot_ind - 1, data),
  //       await quick_sort(pivot_ind + 1, hi, data),
  //     ]);
  //   }
  // }

  // async function partition(lo, hi, data) {
  //   let pivot = lo;
  //   let left = lo + 1;
  //   let right = hi;

  //   while (left <= right) {
  //     while (left <= right && data[left] <= data[pivot]) {
  //       left++;
  //       setComp1(left);
  //     }
  //     while (left <= right && data[right] >= data[pivot]) {
  //       right--;

  //       setComp2(right);
  //     }

  //     if (left < right) {
  //       await swap(data, left, right);
  //     }
  //   }

  //   await swap(data, pivot, right);

  //   setArr([...data]);

  //   return right;
  // }

  // async function merge_sort(lo, hi, data) {
  //   if (lo < hi) {
  //     let mid = Math.floor(lo + (hi - lo) / 2);

  //     // Visualize current boundaries
  //     setComp1(lo); // Highlight left boundary
  //     await sleep();
  //     setComp2(hi); // Highlight right boundary
  //     await sleep();

  //     // Sort first and second halves
  //     await merge_sort(lo, mid, data);
  //     await sleep();
  //     await merge_sort(mid + 1, hi, data);
  //     await sleep();

  //     // Merge the two halves
  //     await merge(lo, mid, hi, data);
  //     await sleep();
  //   }
  // }

  // async function merge(left, mid, right, data) {
  //   let temp_arr = [];

  //   let left_ind = left;
  //   let right_ind = mid + 1;

  //   // Merge the two subarrays
  //   while (left_ind <= mid && right_ind <= right) {
  //     if (data[left_ind] <= data[right_ind]) {
  //       temp_arr.push(data[left_ind++]);
  //     } else {
  //       temp_arr.push(data[right_ind++]);
  //     }
  //   }

  //   // Copy any remaining elements of the left subarray
  //   while (left_ind <= mid) temp_arr.push(data[left_ind++]);

  //   // Copy any remaining elements of the right subarray
  //   while (right_ind <= right) temp_arr.push(data[right_ind++]);

  //   // Copy the merged elements back into the original array
  //   for (let i = 0; i < temp_arr.length; i++) {
  //     data[left + i] = temp_arr[i];
  //   }

  //   // Visualize the updated array
  //   setArr([...data]); // Use spread operator to ensure state updates correctly
  //   await sleep();
  // }

  async function insertionSort(data) {
    for (let i = 0; i < data.length; i++) {
      let j = i - 1;

      setIter(i);
      setActivated(j);
      await sleep();

      let value = data[i];
      while (j >= 0 && data[j] >= value) {
        await swap(data, j, j + 1);
        j--;

        setActivated(j);
        await sleep();
      }
    }
    setArr([...data]);
  }

  async function selectionSort(data) {
    for (let i = 0; i < data.length; i++) {
      let minInd = i;
      setSpectator(i);
      await sleep();

      for (let j = minInd + 1; j < data.length; j++) {
        setIter(j);
        await sleep();

        if (data[j] < data[minInd]) {
          minInd = j;
          setActivated(minInd);
          await sleep();
        }
      }
      await swap(data, minInd, i);
      setArr([...data]);
      await sleep();
    }
  }

  async function bubbleSort(data) {
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data.length - i - 1; j++) {
        if (data[j] > data[j + 1]) {
          await swap(data, j, j + 1);
        }
      }
      setArr([...data]);
      await sleep();
    }
  }

  function handleSpeedChange(speed) {
    setSpeed(speed);
  }

  return (
    <div className="first">
      <Top>
        <Dropdown
          options={algoList}
          selected={algo}
          handleAlgoSelection={handleAlgoSelection}
        />
        <Radio name="name" option="Negatives" />
        <Button value="Start" onClick={handleStart} />
        <Button value="Restart" onClick={handleRestart} />
        <Dropdown
          options={speedList}
          selected={ms}
          handleAlgoSelection={handleSpeedChange}
        />
      </Top>

      <Viz
        data={arr}
        iter={iter}
        spectator={spectator}
        activated={activated}
        swapArr={swapArr}
      />
    </div>
  );
}
