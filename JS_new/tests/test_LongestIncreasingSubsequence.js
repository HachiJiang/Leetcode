/*
 * Test LongestIncreasingSubsequence.js
 * https://leetcode.com/problems/longest-increasing-subsequence/description/
 */

const method = require('../problems/LongestIncreasingSubsequence');
const chai = require('chai');
const expect = chai.expect;

// mock input params
const tests = [
    {
        desc: 'TC 1: Should return []',
        param: [],
        expected: []
    }, {
        desc: 'TC 2: Should return [2, 3, 7, 101]',
        param: [10, 9, 2, 5, 3, 7, 101, 18],
        expected: [2, 3, 7, 101]
    }
];

// test cases
describe('Longest Increasing Subsequence', function () {
    tests.forEach(({ desc, param, expected }) =>
        it(desc, function() {
            expect(method(param)).to.equal(expected);
        }));
});