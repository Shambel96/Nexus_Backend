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

function mergeSort(arr) {
  // Base case: arrays with 1 or 0 elements are already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Split the array into two halves
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  // Merge the sorted halves
  return merge(left, right);
}

// Helper function to merge two sorted arrays
function merge(left, right) {
  const result = [];

  let i = 0;
  let j = 0;

  // Compare elements and merge in sorted order
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Add remaining elements (if any)
  return result.concat(left.slice(i)).concat(right.slice(j));
}
