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

//hash map solution 

var twoSum = function (nums, target) {
  let hash = {};
  hash[nums[0]] = 0;

  for(let i = 1; i < nums.length; ++i) {
    if (hash.hasOwnProperty(target - nums[i])) {
      return [hash[target - nums[i]], i]
    } else {
      hash[nums[i]] = i;
    }
  }
}
