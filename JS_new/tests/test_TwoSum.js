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
        params: [2, 7, 11, 15],
        result: [0, 1]
    }
];

// test cases
describe('Two Sum', function () {
    tests.forEach(test => {
        if (test) {
            it(test.desc, function() {
                expect(method(test.params)).to.equal(test.result);
            });
        }
    });
});