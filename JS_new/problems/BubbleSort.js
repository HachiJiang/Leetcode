/**
 * Created by jiang on 11/7/17.
 */

const Utils = require('./Utils');

const bubbleSort = arr => {
    if (!arr) return;

    for (let i = 0, len = arr.length; i < len; i++) {
        for (let j = 0, jl = len - i - 1; j < jl; j++) {
            if (arr[j] > arr[j + 1]) {
                Utils.swap(arr, j, j + 1);
            }
        }
    }
};

module.exports = bubbleSort;