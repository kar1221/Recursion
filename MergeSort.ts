function mergeSort(array: Array<number>): Array<number> {
  if(array.length <= 0) return [];

  const arrayCopy = array.slice();

  if (arrayCopy.length <= 1) return arrayCopy;

  const mid = Math.round(array.length / 2);

  const leftArray = arrayCopy.slice(0, mid);
  const rightArray = arrayCopy.slice(mid);

  const sortedLeft = mergeSort(leftArray)
  const sortedRight = mergeSort(rightArray);

  return merge(sortedLeft, sortedRight)
}

function merge(leftArray: Array<number>, rightArray: Array<number>): Array<number> {
  let leftArrayIndex = 0;
  let rightArrayIndex = 0;

  const tempArray: Array<number> = [];

  while (leftArrayIndex < leftArray.length && rightArrayIndex < rightArray.length) {
    if (leftArray[leftArrayIndex] < rightArray[rightArrayIndex]) {
      tempArray.push(leftArray[leftArrayIndex]);
      leftArrayIndex += 1;
    } else {
      tempArray.push(rightArray[rightArrayIndex]);
      rightArrayIndex += 1;
    }
  }
  
  // Case where the length of both array is not even.
  while(leftArrayIndex < leftArray.length) {
    tempArray.push(leftArray[leftArrayIndex])
    leftArrayIndex += 1;
  }

  while(rightArrayIndex < rightArray.length) {
    tempArray.push(rightArray[rightArrayIndex])
    rightArrayIndex += 1;
  }

  return tempArray;
}

const test = [3, 2, 1, 13, 8, 5, 0, 1];
const sorted = mergeSort(test);