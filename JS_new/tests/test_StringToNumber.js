/*
 * Test StringToNumber.js
 */

const method = require('../problems/StringToNumber');
const chai = require('chai');
const expect = chai.expect;

// mock input params
const tests = [
    {
        desc: 'invalid input, should return null',
        params: '',
        expected: null
    }, {
        desc: 'invalid input, should return null',
        params: undefined,
        expected: null
    }, {
        desc: 'invalid input, should return null',
        params: null,
        expected: null
    }, {
        desc: 'invalid input, should return null',
        params: '+',
        expected: null
    }, {
        desc: 'invalid input, should return null',
        params: '-',
        expected: null
    }, {
        desc: 'invalid input, should return null',
        params: '1*3',
        expected: null
    }, {
        desc: 'invalid input, should return null',
        params: '12346a',
        expected: null
    }, {
        desc: 'invalid input, should return null',
        params: 'b12346',
        expected: null
    }, {
        desc: 'valid input, should return -1',
        params: '-1',
        expected: -1
    }, {
        desc: 'valid input, should return 1',
        params: '+1',
        expected: 1
    }, {
        desc: 'valid input, should return 1',
        params: '12345',
        expected: 12345
    }
];

// test cases
describe('StringToNumber', function () {
    tests.forEach(({ desc, params, expected }, index) =>
        it('TC ' + index + ': ' + desc, function() {
            expect(method(params)).to.equal(expected);
        }));
});
