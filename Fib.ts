function Fibbonacci(n: number) {
  const array: number[] = [0, 1]

  if(n <= 2) return array.slice(0, n);

  for(let x = 2; x < n; x++) {
    const newSum = array[x-1] + array[x-2];
    array.push(newSum);
  }

  return array;
}

function FibbonacciRecursion(n: number): Array<number> {
  function Last(array: Array<number>, index: number) {
    if(index < 1) return -1;

    return array[array.length - index];
  } 

  if(n <= 2) return [0, 1].slice(0, n);

  const prev = FibbonacciRecursion(n - 1);
  const newSum = Last(prev, 1) + Last(prev, 2);

  return [...prev, newSum];
}

console.log(Fibbonacci(0));
console.log(FibbonacciRecursion(72));