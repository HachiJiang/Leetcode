/**
 * LongestIncreasingSubsequence.js
 * https://leetcode.com/problems/longest-increasing-subsequence/description/
 * @param {Array} nums
 */

const lengthOfLIS = function (nums) {
    if (!nums || nums.length < 1) {
        return [];
    }

    if (nums.length === 1) {
        return nums;
    }
};

module.exports = lengthOfLIS;