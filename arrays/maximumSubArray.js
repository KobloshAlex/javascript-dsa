// Given an integer array nums, find the contiguous subarray (containing at least one number)
// which has the largest sum and return its sum.
//
//     A subarray is a contiguous part of an array.
//
//     Example 1:
//
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]  target = 5; 4 - 1 + 2 +1
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
    let maxCurrent = nums[0];
    let maxGlobal = nums[0];

    for( let i= 1; i < nums.length; i++) {
        maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);

        if(maxCurrent > maxGlobal) {
            maxGlobal = maxCurrent;
        }

    }
    return maxGlobal
};
