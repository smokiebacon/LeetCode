//Given an sorted array of integers, return the first pair of numbers that sum to 0.
function sumZero(array) {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    let sum = array[left] + array[right];
    if (sum === 0) {
      return array[left], array[right];
    } else if (sum > 0) right--;
    else {
      left++;
    }
  }
}

array = [-4, -3, -2, 2, 7, 10];
