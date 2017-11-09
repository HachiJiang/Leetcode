/**
 * Created by jiang on 11/7/17.
 */

const Utils = require('./Utils');

const InsertSortByStep = (arr, step, start) => {
    if (!arr || step < 1 || start < 0) return;

    for (let i = start + step, len = arr.length; i < len; i += step) {
        // use current value as target to insert
        let target = arr[i];
        let j = i;
        while(j > 0) {
            if (arr[j - step] <= target) {
                break;
            }
            arr[j] = arr[j - step];
            j -= step;
        }
        arr[j] = target;
    }
};

const InsertSort = arr => {
    if (!arr) return;

    InsertSortByStep(arr, 1, 0);
};

module.exports = {
    InsertSort,
    InsertSortByStep
};