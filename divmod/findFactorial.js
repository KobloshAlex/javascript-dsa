const findFactorial = (number) => {
  let fct = 1;
  if (number === 2) return 2;
  for (let i = 2; i <= number; i++) {
    fct = fct * i;
  }
  return fct;
};

const findFactorialRecursive = (number) => {
  if (number === 2) return 2;

  return number * findFactorialRecursive(number - 1);
};

console.log(findFactorialRecursive(5));
