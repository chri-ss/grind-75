/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let twosum = [];
  for (let i = 0; i < nums.length; ++i) {
    for (let j = 0; j < nums.length && j !== i; ++j) {
      if (nums[i] + nums[j] === target) {
        twosum.push(i);
        twosum.push(j);
        return twosum;
      }
    }
  }
};
