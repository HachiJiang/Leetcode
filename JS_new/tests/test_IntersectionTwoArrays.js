/*
 * Test IntersectionTwoArrays.js
 * https://leetcode.com/problems/intersection-of-two-arrays-ii/description/
 */

const method = require('../problems/IntersectionTwoArrays');
const chai = require('chai');
const expect = chai.expect;

// mock input params
const tests = [
    {
        desc: 'TC 1: Should return true',
        params: {
            nums1: [1, 2, 2, 1],
            nums2: [2, 2]
        },
        expected: [2, 2]
    }, {
        desc: 'TC 2: Should return false',
        params: {
            nums1: undefined,
            nums2: [2, 2]
        },
        expected: false
    }, {
        desc: 'TC 3: Should return false',
        params: {
            nums1: [2, 2],
            nums2: null
        },
        expected: false
    }, {
        desc: 'TC 4: Should return false',
        params: {
            nums1: [],
            nums2: [1]
        },
        expected: false
    }
];

// test cases
describe('Intersection of Two Arrays', function () {
    tests.forEach(({ desc, params, expected }) =>
        it(desc, function() {
            expect(method(params.nums1, params.nums2)).to.equal(expected);
        }));
});