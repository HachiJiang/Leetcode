/**
 * Created by jiang on 11/7/17.
 */

const Utils = require('./Utils');

const InsertSort = arr => {
    if (!arr) return;

    for (let i = 1, len = arr.length; i < len; i++) {
        // use current value as target to insert
        let target = arr[i];
        let j = i;
        while(j > 0) {
            if (arr[j - 1] <= target) {
                break;
            }
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = target;
    }
};

module.exports = InsertSort;