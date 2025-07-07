function bubbleSort(arr) {
  let n = arr.length;

  // Outer loop: repeat the process n-1 times
  for (let i = 0; i < n - 1; i++) {
    // Inner loop: compare adjacent elements
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements if they are in the wrong order
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}
module.exports = bubbleSort
// module.exports = {bubbleSort, otherFunction}
// export the code
