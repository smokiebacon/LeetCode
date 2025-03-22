function countUniqueValues(sortedArray) {
  //keep track of uniques
  let uniquesCount = 1;
  for (let i = 1; i < sortedArray.length; i++) {
    if (sortedArray[i] !== sortedArray[i - 1]) {
      uniquesCount++;
    }
  }
  console.log(uniquesCount);

  return uniquesCount;
}

function countUniqueValues2(sortedArray) {
  let i = 0;
  for (let j = 1; j < sortedArray.length; j++) {
    if (sortedArray[i] !== sortedArray[j]) {
      i++;
      sortedArray[i] = sortedArray[j];
    }
  }
  console.log(i + 1);
  return i + 1;
}

sortedArray = [1, 1, 1, 2, 3, 3, 3, 3, 4];
countUniqueValues2(sortedArray);
