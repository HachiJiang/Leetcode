/**
 * Binary search
 */

const _ = require('lodash');
const RESULT_INVALID = -1;

/**
 * Recursive version
 * @param {Array} arr
 * @param {Number} target
 * @returns {number}
 */
const binarySearchRecursive = (arr, target, start, end) => {
    if (start > end) {
        return RESULT_INVALID;
    }

    var mid = Math.floor((start + end) / 2);
    var ref = arr[mid];
    if (target === ref) {
        if (mid > 0 && arr[mid - 1] === target) {
            return binarySearchRecursive(arr, target, start, mid - 1);
        } else {
            return mid;
        }
    } else if (target > ref) {
        return binarySearchRecursive(arr, target, mid + 1, end);
    } else if (target < ref) {
        return binarySearchRecursive(arr, target, start, mid - 1);
    }
};

/**
 * None-Recursive version
 * @param {Array} arr
 * @param {Number} target
 * @returns {number}
 */
const binarySearchNotRecursive = (arr, target) => {
    var start = 0;
    var end = arr.length - 1;
    var mid, ref;

    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        ref = arr[mid];

        if (target === ref) {
            if (mid > 0 && arr[mid - 1] === target) {
                end = mid - 1;
            } else {
                return mid;
            }
        } else if (target > ref) {
            start = mid + 1;
        } else if (target < ref) {
            end = mid - 1;
        }
    }

    return RESULT_INVALID;
};

const BinarySearch = (arr, target) => {
    if (!Array.isArray(arr) || !_.isNumber(target)) {
        return RESULT_INVALID;
    }

    // return binarySearchRecursive(arr, target, 0, arr.length - 1);
    return binarySearchNotRecursive(arr, target);
};

module.exports = BinarySearch;