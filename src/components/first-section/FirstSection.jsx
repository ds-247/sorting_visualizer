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
  87, 25, 33, 95, 58, 41, 69, 90, 73, 66, 53, 17, 62, 81, 99, 76, 45, 20, 35,
  28, 31, 47, 13, 54, 24, 88, 38, 96, 77, 71, 92, 14, 79, 60, 48,
];

const MIN = 10;
const MAX = 100;

export default function FirstSection() {
  const [disable, setDisable] = useState(false);
  const [purple, setPurple] = useState();
  const [green, setGreen] = useState(); // green -- single value
  const [orange, setOrange] = useState(); // orange
  const [blue, setBlue] = useState(); // blue
  const [red, setRed] = useState([]); // red -- array
  const [pink, setPink] = useState([]); // pink -- array
  const [skyBlue, setSkyBlue] = useState([]); // blue -- array
  const [completion, setCompletion] = useState([]); // blue -- array
  const [algo, setAlgo] = useState("Bubble");
  const [arr, setArr] = useState(data);
  const [ms, setSpeed] = useState(350);

  function sleep() {
    return new Promise((res) => setTimeout(res, ms));
  }

  function handleRestart() {
    let nums = [];
    for (let i = 1; i <= 35; i++) {
      let val = Math.random() * (MAX - MIN) + MIN;
      nums.push(val);
    }

    setArr([...nums]);
    setRed([]);
    setGreen();
    setOrange();
    setBlue();
    setPink([]);
    setSkyBlue([]);
    setPurple();
    setCompletion([]);
  }

  async function swap(nums, i, j) {
    [nums[j], nums[i]] = [nums[i], nums[j]];
    setRed([i, j]);
    await sleep();
    setRed((prev) => []);
  }

  function handleAlgoSelection(algo) {
    setAlgo(algo);
  }

  async function handleStart() {
    setDisable((prev) => true);
    if (algo === "Bubble") {
      await bubbleSort(arr);
      setDisable((prev) => false);
    } else if (algo === "Selection") {
      await selectionSort(arr);
      setDisable((prev) => false);
    } else if (algo === "Insertion") {
      await insertionSort(arr);
      setDisable((prev) => false);
    } else if (algo === "Quick") {
      await quick_sort(0, arr.length - 1, arr);
      setDisable((prev) => false);
    } else if (algo === "Merge") {
      await merge_sort(0, arr.length - 1, arr);
      setDisable((prev) => false);
    }

    complete();
  }

  function complete() {
    // set all states to initial and set every index to green
  }

  async function quick_sort(lo, hi, data) {
    if (lo <= hi) {
      let pivot_ind = await partition(lo, hi, data);

      setCompletion((prev) => [...prev, pivot_ind]);

      await quick_sort(lo, pivot_ind - 1, data);
      await quick_sort(pivot_ind + 1, hi, data);
    }
  }

  async function partition(lo, hi, data) {
    let pivot = lo;
    let left = lo + 1;
    let right = hi;

    setBlue(pivot);
    setSkyBlue([left, right]);
    await sleep();

    while (left <= right) {
      while (left <= right && data[left] <= data[pivot]) {
        left++;
      }
      while (left <= right && data[right] >= data[pivot]) {
        right--;
      }

      if (left < right) {
        await swap(data, left, right);
      }
    }

    await swap(data, pivot, right);

    setArr([...data]);

    return right;
  }

  async function merge_sort(lo, hi, data) {
    if (lo < hi) {
      let mid = Math.floor(lo + (hi - lo) / 2);

      await merge_sort(lo, mid, data);
      await merge_sort(mid + 1, hi, data);
      await merge(lo, mid, hi, data);
    }
  }

  function fill(i, j) {
    let arr = [];
    for (let u = i; u <= j; u++) {
      arr.push(u);
    }

    return arr;
  }

  async function merge(left, mid, right, data) {
    let left_ind = left;
    let right_ind = mid + 1;
    let temp = fill(left, right);

    setRed([left, right]);
    setCompletion((prev) => [...prev, ...temp]);
    await sleep();

    while (left_ind <= mid && right_ind <= right) {
      if (data[left_ind] <= data[right_ind]) {
        left_ind++;
        setBlue(left_ind);
        await sleep();
      } else {
        let value = data[right_ind];
        let index = right_ind;

        while (index > left_ind) {
          data[index] = data[index - 1];
          index--;
        }

        data[left_ind] = value;

        left_ind++;
        mid++;
        right_ind++;
      }

      setArr([...data]);
      await sleep();
    }
  }

  async function insertionSort(data) {
    for (let i = 0; i < data.length; i++) {
      let j = i - 1;

      setPurple(i);
      setOrange(j);
      await sleep();

      let value = data[i];
      while (j >= 0 && data[j] >= value) {
        await swap(data, j, j + 1);
        setRed([j, j + 1]);
        j--;

        setOrange(j);
        await sleep();
      }
      setCompletion((prev) => [...prev, i]);
    }
    setArr([...data]);
  }

  async function selectionSort(data) {
    for (let i = 0; i < data.length; i++) {
      let minInd = i;
      setOrange(i);
      await sleep();

      for (let j = minInd + 1; j < data.length; j++) {
        setBlue(j);
        await sleep();

        if (data[j] < data[minInd]) {
          minInd = j;
          setPurple(minInd);
          await sleep();
        }
      }
      await swap(data, minInd, i);
      setArr([...data]);
      setCompletion((prev) => [...prev, i]);
      await sleep();
    }
  }

  async function bubbleSort(data) {
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data.length - i - 1; j++) {
        if (data[j] > data[j + 1]) {
          await swap(data, j, j + 1);
        } else {
          setBlue(j);
          await sleep();
        }
        setBlue();
        await sleep();
      }
      setArr([...data]);
      setCompletion((prev) => [...prev, data.length - 1 - i]);
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
          disable={disable}
        />
        <Radio name="name" option="Negatives" disable={disable} />
        <Button value="Start" onClick={handleStart} disable={disable} />
        <Button value="Restart" onClick={handleRestart} disable={disable} />
        <Dropdown
          options={speedList}
          selected={ms}
          handleAlgoSelection={handleSpeedChange}
          disable={disable}
        />
      </Top>

      <Viz
        data={arr}
        green={green}
        blue={blue}
        orange={orange}
        purple={purple}
        skyBlue={skyBlue}
        red={red}
        completion={completion}
        pink={pink}
      />
    </div>
  );
}
