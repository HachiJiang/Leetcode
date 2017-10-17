/*
 * Test TwoSum.js
 */

const method = require('../problems/TwoSum');
const chai = require('chai');
const expect = chai.expect;

// mock input params
const tests = [
    {
        desc: 'TC 1: Should return [0, 1]',
        params: {
            nums: [2, 7, 11, 15],
            target: 9
        },
        expected: [0, 1]
    }
];

// test cases
describe('Two Sum', function () {
    tests.forEach(({ desc, params, expected }) =>
        it(desc, function() {
            expect(method(params.nums, params.target)).to.equal(expected);
        }));
});
