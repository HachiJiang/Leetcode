/**
 * Created by jiang on 11/7/17.
 */

const Utils = require('./Utils');

/**
 * Get the index of minimum value in specific part of array
 * @param {Array} arr
 * @param {number} start
 * @param {number} end
 * @returns {number}
 */
const getMinIdx =(arr, start, end) => {
    let min = arr[start],
        minIdx = start;

    for (let i = start + 1; i <= end; i++) {
        if (arr[i] < min) {
            min = arr[i];
            minIdx = i;
        }
    }

    return minIdx;
};

const SelectionSort = (arr = []) => {
    if (!arr) return;

    let minIdx;
    for (let i = 0, il = arr.length - 1; i <= il; i++) {
        minIdx = getMinIdx(arr, i, il);
        Utils.swap(arr, i, minIdx);
    }
};

module.exports = SelectionSort;