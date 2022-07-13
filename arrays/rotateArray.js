// Given an array, rotate the array to the right by k steps, where k is non-negative.
//
//
//
//     Example 1:
//
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function (nums, k) {
  k = k % nums.length;

  reverseArray(nums, 0, nums.length - 1);
  reverseArray(nums, 0, k - 1);
  reverseArray(nums, k, nums.length - 1);

  function reverseArray(nums, start, end) {
    while (start < end) {
      let tmp = nums[start];
      nums[start] = nums[end];
      nums[end] = tmp;

      start++;
      end--;
    }
  }
};

const arr = [1, 2, 3, 4, 5, 6, 7];
rotate(arr, 3);
console.log(arr);
