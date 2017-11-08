/**
 * Created by jiang on 11/4/17.
 */
/*
 * Test QuickSort.js
 */

const quickSort = require('../problems/QuickSort');
const mergeSort = require('../problems/MergeSort');
const bubbleSort = require('../problems/BubbleSort');
const insertSort = require('../problems/InsertSort');
const selectionSort = require('../problems/SelectionSort');
const chai = require('chai');
const expect = chai.expect;

// mock input params
const tests = [
    {
        desc: 'invalid input, should return undefined',
        params: undefined,
        expected: undefined
    }, {
        desc: 'invalid input, should return undefined',
        params: null,
        expected: null
    }, {
        desc: '[] -> []',
        params: [],
        expected: []
    }, {
        desc: '[1] -> [1]',
        params: [1],
        expected: [1]
    }, {
        desc: '[1, 1] -> [1, 1]',
        params: [1, 1],
        expected: [1, 1]
    }, {
        desc: '[0, 1] -> [0, 1]',
        params: [0, 1],
        expected: [0, 1]
    }, {
        desc: '[1, 0] -> [0, 1]',
        params: [1, 0],
        expected: [0, 1]
    }, {
        desc: '[1, 0, 4, 2, 3, 4, 7, 5] -> [0, 1, 2, 3, 4, 4, 5, 7]',
        params: [1, 0, 4, 2, 3, 4, 7, 5],
        expected: [0, 1, 2, 3, 4, 4, 5, 7]
    }, {
        desc: '[1, 0, 4, 2, 8, 4, 7, 5] -> [0, 1, 2, 4, 4, 5, 7, 8]',
        params: [1, 0, 4, 2, 8, 4, 7, 5],
        expected: [0, 1, 2, 4, 4, 5, 7, 8]
    }, {
        desc: '[1, 0, 4, 2, 8, 4, 7] -> [0, 1, 2, 4, 4, 7, 8]',
        params: [1, 0, 4, 2, 8, 4, 7],
        expected: [0, 1, 2, 4, 4, 7, 8]
    }, {
        desc: '[1, 1, 1, 1, 1] -> [1, 1, 1, 1, 1]',
        params: [1, 1, 1, 1, 1],
        expected: [1, 1, 1, 1, 1]
    }, {
        desc: '[1, 2, 3, 4, 5] -> [1, 2, 3, 4, 5]',
        params: [3, 3, 3, 4, 5],
        expected: [3, 3, 3, 4, 5]
    }
];

// test cases
describe('QuickSort', function () {
    tests.forEach(({ desc, params, expected }, index) =>
        it('TC ' + index + ': ' + desc, function() {
            quickSort(params);
            expect(params).to.eql(expected);
        }));
});

describe('MergeSort', function () {
    tests.forEach(({ desc, params, expected }, index) =>
        it('TC ' + index + ': ' + desc, function() {
            mergeSort(params);
            expect(params).to.eql(expected);
        }));
});

describe('BubbleSort', function () {
    tests.forEach(({ desc, params, expected }, index) =>
        it('TC ' + index + ': ' + desc, function() {
            bubbleSort(params);
            expect(params).to.eql(expected);
        }));
});

describe('InsertSort', function () {
    tests.forEach(({ desc, params, expected }, index) =>
        it('TC ' + index + ': ' + desc, function() {
            insertSort(params);
            expect(params).to.eql(expected);
        }));
});

describe('SelectionSort', function () {
    tests.forEach(({ desc, params, expected }, index) =>
        it('TC ' + index + ': ' + desc, function() {
            selectionSort(params);
            expect(params).to.eql(expected);
        }));
});