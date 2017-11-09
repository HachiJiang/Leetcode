/**
 * Created by jiang on 11/9/17.
 */

const { InsertSortByStep } = require('./InsertSort');

const ShellSort = arr => {
    if (!arr) return;

    let len = arr.length;
    let step = Math.floor(len / 2);
    while (step >= 1) {
        for (let i = 0; i + step < len; i++) {
            InsertSortByStep(arr, step, i);
        }
        step = Math.floor(step / 2);
    }
};

module.exports = ShellSort;