/** Problem 1
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var number = new Array(2);
  //找出最大值最小值
  var max = 0;
  var min = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    } else if (nums[i] < min) {
      min = nums[i];
    }
  }
  //先对数组进行hash表的映射
  var posiArray = new Array(max + 1);
  var negaArray = new Array(-min + 1);
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) {
      if (posiArray[nums[i]] === undefined) {
        posiArray[nums[i]] = new Array();
        posiArray[nums[i]][0] = i + 1;
        posiArray[nums[i]][1] = 0;
      } else {
        posiArray[nums[i]][0] = i + 1;
        posiArray[nums[i]][1] = 1;
      }
    } else {
      if (negaArray[-nums[i]] === undefined) {
        negaArray[-nums[i]] = new Array();
        negaArray[-nums[i]][0] = i + 1;
        negaArray[-nums[i]][1] = 0;
      } else {
        negaArray[-nums[i]][0] = i + 1;
        negaArray[-nums[i]][1] = 1;
      }
    }
  }

  //按照target查找
  for (var i = 0; i < nums.length - 1; i++) {
    var lookNum = target - nums[i];
    if (lookNum >= -negaArray.length + 1 && lookNum < 0) {
      if (negaArray[-lookNum] !== undefined && lookNum != nums[i]) {
        number[0] = i + 1;
        number[1] = negaArray[-lookNum][0];
        break;
      } else if (negaArray[-lookNum] !== undefined && lookNum == nums[i] && negaArray[-lookNum][1] > 0) {
        number[0] = i + 1;
        number[1] = negaArray[-lookNum][0];
        break;
      }
    } else if (lookNum >= 0 && lookNum <= posiArray.length - 1) {
      if (posiArray[lookNum] !== undefined && lookNum != nums[i]) {
        number[0] = i + 1;
        number[1] = posiArray[lookNum][0];
        break;
      } else if (posiArray[lookNum] !== undefined && lookNum == nums[i] && posiArray[lookNum][1] > 0) {
        number[0] = i + 1;
        number[1] = posiArray[lookNum][0];
        break;
      }
    }
  }
  return number;
};