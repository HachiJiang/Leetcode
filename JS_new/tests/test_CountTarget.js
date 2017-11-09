/**
 * Created by jiang on 11/9/17.
 */
/*
 * Test Sorting
 */

const CountTarget = require('../problems/CountTarget');
const chai = require('chai');
const expect = chai.expect;
const _ = require('lodash');

// mock input params
const tests = [
    {
        desc: 'invalid input, should return undefined',
        params: {
            arr: undefined,
            target: 1
        },
        expected: undefined
    }, {
        desc: '[] and 1 => 0',
        params: {
            arr: [],
            target: 1
        },
        expected: 0
    }, {
        desc: '[0, 0, 3, 4] and 1 => 0',
        params: {
            arr: [0, 0, 3, 4],
            target: 1
        },
        expected: 0
    }, {
        desc: '[0, 0, 3, 4] and 0 => 0',
        params: {
            arr: [0, 0, 3, 4],
            target: 2
        },
        expected: 2
    }, {
        desc: '[0, 0, 3, 3, 3, 3, 4] and 3 => 4',
        params: {
            arr: [0, 0, 3, 3, 3, 3, 4],
            target: 3
        },
        expected: 4
    }, {
        desc: '[0, 0, 3, 3, 3, 3, 4] and 4 => 1',
        params: {
            arr: [0, 0, 3, 3, 3, 3, 4],
            target: 4
        },
        expected: 1
    }, {
        desc: '[0, 0, 1, 2, 3, 3, 4] and 3 => 2',
        params: {
            arr: [0, 0, 1, 2, 3, 3, 4],
            target: 3
        },
        expected: 2
    }
];

// test cases
describe('CountTarget', function () {
    tests.forEach(({ desc, params, expected }, index) =>
        it('TC ' + index + ': ' + desc, function() {
            expect(CountTarget(params.arr, params.target)).to.eql(expected);
        }));
});