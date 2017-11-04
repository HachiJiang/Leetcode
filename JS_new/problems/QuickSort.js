/**
 * Created by jiang on 11/4/17.
 */

const Utils = require('./Utils');

const sort = (arr, start, end) => {
    if (start < end) {
        const mid = Utils.partition(arr, start, end);
        sort(arr, start, mid - 1);
        sort(arr, mid + 1, end);
    }
};

const quickSort = arr => {
    if (!arr) return;
    // 1. shuffle the array
    // 2. sort
    sort(arr, 0, arr.length - 1);
};

module.exports = quickSort;