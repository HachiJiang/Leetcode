/** Problem 4
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
/* There are two sorted arrays nums1 and nums2 of size m and n respectively. Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).*/
var findMedianSortedArrays = function(nums1, nums2) {
  if (!nums1 || !nums2) return null;

  var num3 = [];
  
};


/** Problem 227
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  if (!s) return null;

  var array0 = s.match(/[\+\-\*\/]|\d+/g);
  if (!array0) return null;
  if (array0.length === 1) return parseInt(array0[0]);

  var result = 0;
  var array_tmp = [];
  var flag = 1;
  for (var i = 1; i <= array0.length; i += 2) {
    if (array0[i] === '*') {
      array0[i + 1] = array0[i - 1] * array0[i + 1];
    } else if (array0[i] === '/') {
      array0[i + 1] = Math.floor(array0[i - 1] / array0[i + 1]);
    } else if (array0[i] === '-') {
      array_tmp.push(array0[i - 1] * flag);
      flag = -1;
    } else {
      array_tmp.push(array0[i - 1] * flag);
      flag = 1;
    }
  }

  for (var i = 0; i < array_tmp.length; i++) {
    result += array_tmp[i];
  }
  return result;
};


/** Problem 56
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var swap = function(intervals, low, high) {
  var tmp = intervals[low];
  intervals[low] = intervals[high];
  intervals[high] = tmp;
}

var partition = function(intervals, low, high) {
  var privotKey = intervals[low].start;
  while (low < high) {
    while (low < high && intervals[high].start >= privotKey)
      --high;
    swap(intervals, low, high);
    while (low < high && intervals[low].start <= privotKey)
      ++low;
    swap(intervals, low, high);
  }
  return low;
}


var quickSort = function(intervals, low, high) {
  if (low < high) {
    var privotLoc = partition(intervals, low, high);
    quickSort(intervals, low, privotLoc - 1);
    quickSort(intervals, privotLoc + 1, high);
  }
}

var merge = function(intervals) {
  if (intervals === undefined || intervals.length < 2)
    return intervals;

  // sorting
  quickSort(intervals, 0, intervals.length - 1);

  var result = [];
  var i = 0,
    j = 0;
  var start_val, end_val;
  do {
    j++;
    start_val = intervals[i].start;
    end_val = intervals[i].end;
    while (intervals[j] && (intervals[j].start <= end_val)) {
      if (intervals[j].end > end_val) {
        end_val = intervals[j].end;
      }
      j++;
    }
    result.push(new Interval(start_val, end_val));
    i = j;
  } while (j < intervals.length);

  return result;
};


/** Problem 3
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (!s) return 0;
  if (s.length === 1) return 1;

  var max = 0;
  var hashMap = {};
  hashMap[s[0]] = 0;
  for (var i = 1, j = 0; i < s.length; i++) {
    if (hashMap[s[i]] !== undefined) {
      j = Math.max(j, hashMap[s[i]] + 1);
    }
    hashMap[s[i]] = i;
    max = Math.max(max, i - j + 1);
  }
  return max;
};


/** Problem 2
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  if (l1 === undefined || l2 === undefined)
    return l1 || l2;

  var sum = l1.val + l2.val;
  var plus = Math.floor(sum / 10);
  var l3 = new ListNode(sum % 10);

  var cur1 = l1.next,
    cur2 = l2.next,
    cur3 = l3;
  while (cur1 && cur2) {
    cur3.next = new ListNode(0);
    cur3 = cur3.next;
    sum = cur1.val + cur2.val + plus;
    plus = Math.floor(sum / 10);
    cur3.val = sum % 10;
    cur1 = cur1.next;
    cur2 = cur2.next;
  }

  while (cur1) {
    cur3.next = new ListNode(0);
    cur3 = cur3.next;
    sum = cur1.val + plus;
    plus = Math.floor(sum / 10);
    cur3.val = sum % 10;
    cur1 = cur1.next;
  }

  while (cur2) {
    cur3.next = new ListNode(0);
    cur3 = cur3.next;
    sum = cur2.val + plus;
    plus = Math.floor(sum / 10);
    cur3.val = sum % 10;
    cur2 = cur2.next;
  }

  if (plus !== 0) {
    cur3.next = new ListNode(plus);
  }

  return l3;
};


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
