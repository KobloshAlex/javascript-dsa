//giving array [1,2,3,4,5,6,1]
// return 1. because it appears twice
// [1, i0]
// [2, i1] ....
// [1, i7] ....

const firstRecurringNumberInArray = (nums) => {
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return nums[i];
    } else {
      set.add(nums[i]);
    }
      console.log(set)
  }
  return undefined;
};

console.log(firstRecurringNumberInArray([1,2,3,0,5,6,1]))
