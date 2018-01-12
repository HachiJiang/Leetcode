/*
 * Test BinarySearch
 */

const BinarySearch = require('../problems/BinarySearch');
const chai = require('chai');
const expect = chai.expect;

// mock input params
const tests = [
    {
        desc: 'invalid input, should return -1',
        params: {
            arr: undefined,
            target: 1
        },
        expected: -1
    }, {
        desc: 'find 5 in [1, 3, 4, 9, 11, 15], should return -1',
        params: {
            arr: [1, 3, 4, 9, 11, 15],
            target: 5
        },
        expected: -1
    }, {
        desc: 'find 1 in [1, 3, 4, 9, 11, 15], should return 0',
        params: {
            arr: [1, 3, 4, 9, 11, 15],
            target: 1
        },
        expected: 0
    }, {
        desc: 'find 15 in [1, 3, 4, 9, 11, 15], should return 5',
        params: {
            arr: [1, 3, 4, 9, 11, 15],
            target: 15
        },
        expected: 5
    }, {
        desc: 'find 11 in [1, 3, 4, 9, 11, 15], should return 4',
        params: {
            arr: [1, 3, 4, 9, 11, 11, 11, 15],
            target: 11
        },
        expected: 4
    }, {
        desc: 'find 1 in [1, 1, 1, 1, 1, 1], should return 0',
        params: {
            arr: [1, 1, 1, 1, 1, 1],
            target: 1
        },
        expected: 0
    }
];

// test cases
describe('BinarySearch', function () {
    tests.forEach(({ desc, params, expected }, index) =>
        it('TC ' + index + ': ' + desc, function() {
            expect(BinarySearch(params.arr, params.target)).to.eql(expected);
        }));
});