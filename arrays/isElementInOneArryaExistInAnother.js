//O(n)
function isExist(arr1, arr2) {
  if (!arr1 || !arr2) return false;

  const set = new Set(arr1);

  for (let el of arr1) {
    set.add(el);
  }

  for (let el of arr2) {
    if (set.has(el)) return true;
  }

  return false;
}

const i = [1, 2, 5, 6, 6];
const j = [0, 9];

console.log(isExist(i, j));
