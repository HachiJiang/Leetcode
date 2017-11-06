/**
 * Created by jiang on 11/6/17.
 */

const Utils = require('../problems/Utils');

/**
 * Merge two sorted part to one sorted part
 * @param {Array} arr
 * @param {number} start
 * @param {number} mid: split to start ~ mid, mid + 1 ~ end
 * @param {number} end
 */
const merge = (arr, start, mid, end) => {
    let tmp = [];
    let i = start;
    let j = mid + 1;

    while (i <= mid && j <= end) {
        if (arr[i] < arr[j]) {
            tmp.push(arr[i]);
            i++;
        } else {
            tmp.push(arr[j]);
            j++;
        }
    }

    while (i <= mid) {
        tmp.push(arr[i]);
        i++;
    }

    while (j <= end) {
        tmp.push(arr[j]);
        j++;
    }

    Utils.copyArr(tmp, arr, start, end);
};

const sort = (arr, start, end) => {
    if (end <= start) return;

    const mid = parseInt((start + end) / 2);
    sort(arr, start, mid);
    sort(arr, mid + 1, end);
    merge(arr, start, mid, end);
};

const mergeSort = arr => {
    if (!arr) return;
    sort(arr, 0, arr.length - 1);
};

module.exports = mergeSort;