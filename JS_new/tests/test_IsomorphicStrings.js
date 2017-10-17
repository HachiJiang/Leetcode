/*
 * Test IsomorphicStrings.js
 * https://leetcode.com/problems/isomorphic-strings/
 */

const method = require('../problems/IsomorphicStrings');
const chai = require('chai');
const expect = chai.expect;

// mock input params
const tests = [
    {
        desc: 'TC 1: Should return true',
        params: {
            s: 'egg',
            t: 'add'
        },
        expected: true
    }, {
        desc: 'TC 2: Should return false',
        params: {
            s: '',
            t: 'add'
        },
        expected: false
    }, {
        desc: 'TC 3: Should return false',
        params: {
            s: 'egg',
            t: 'addd'
        },
        expected: false
    }, {
        desc: 'TC 4: Should return true',
        params: {
            s: 'paper',
            t: 'title'
        },
        expected: true
    }, {
        desc: 'TC 5: Should return true',
        params: {
            s: '',
            t: ''
        },
        expected: true
    }
];

// test cases
describe('Isomorphic Strings', function () {
    tests.forEach(({ desc, params, expected }) =>
        it(desc, function() {
            expect(method(params.s, params.t)).to.equal(expected);
        }));
});