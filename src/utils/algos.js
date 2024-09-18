function merge_sort(array) {
  merge();
  return;
}

function merge() {}

function quick_sort(array) {
  pivot();
}

function pivot() {}

function bubble_sort(array) {
  console.log("array initially in bubble sort ", array);
  let temp_array = [...array];

  for (let i = 0; i < temp_array.length; i++) {
    for (let j = 1; j < temp_array.length - i; j++) {
      if (temp_array[j] < temp_array[j - 1]) {
        swap(temp_array, j, j - 1);
      }
    }
  }

  console.log("array finally in bubble sort ", temp_array);
}

function selection_sort(array) {
  let temp_arr = [...array];

  console.log("array finally in selection sort ", temp_arr);

  for (let i = 0; i < temp_arr.length; i++) {
    let minInd = i;
    for (let j = i + 1; j < temp_arr.length; j++) {
      if (temp_arr[minInd] > temp_arr[j]) {
        minInd = j;
      }
    }

    swap(temp_arr, minInd, i);
  }

  console.log("array finally in selction sort ", temp_arr);
}

function insertion_sort(array) {
  let temp_arr = [...array];
  console.log("array initially in insertion sort ", temp_arr)

  for (let i = 0; i < temp_arr.length; i++){
    let value = temp_arr[i];
    let j = i-1;

    while (j >= 0 && temp_arr[j] >= value) {
      temp_arr[j + 1] = temp_arr[j];
      j--;
    }

    temp_arr[j + 1] = value;
  }

  console.log("array finally in insertion sort ", temp_arr)
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

export default function Sortings(array) {
  function MERGE() {
    let start = performance.now();
    merge_sort(array);
    let end = performance.now();

    return end - start;
  }

  function QUICK() {
    let start = performance.now();
    quick_sort(array);
    let end = performance.now();

    return end - start;
  }

  function BUBBLE() {
    let start = performance.now();
    bubble_sort(array);
    let end = performance.now();

    return end - start;
  }

  function INSERTION() {
    let start = performance.now();
    insertion_sort(array);
    let end = performance.now();

    return end - start;
  }

  function SELECTION() {
    let start = performance.now();
    selection_sort(array);
    let end = performance.now();

    return end - start;
  }

  return {
    MERGE,
    QUICK,
    BUBBLE,
    SELECTION,
    INSERTION,
  };
}
