// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ...

// 0(2^N)
const findFibonacci = (n) => {
  if (n < 2) return n;

  return findFibonacci(n - 1) + findFibonacci(n - 2);
};

const findFibonacciIterative = (n) => {
  const arr = [0, 1];

  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }

  return arr[n];
};

console.log(findFibonacciIterative(6));
