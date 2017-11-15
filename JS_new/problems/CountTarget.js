/**
 * Created by jiang on 11/9/17.
 */

const getFirstIdx = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    let mid, tmp, ret;

    while (right > left) {
        mid = Math.floor((right + left) / 2);
        tmp = arr[mid];
        if (tmp === target) {
            if (mid === 0 || arr[mid + 1] !== target) {
                ret = mid;
                break;
            }
            right = mid;
        } else if (tmp < target) {
            left = mid;
        } else {
            right = mid;
        }
    }

    return ret;
};

const getLastIdx = (arr, target) => {
    let len = arr.length;
    let left = 0;
    let right = arr.length - 1;
    let mid, tmp, ret;

    while (right > left) {
        mid = Math.floor((right - left / 2));
        tmp = arr[mid];
        if (tmp >= target) {
            if (tmp === target && (mid === len - 1 || arr[mid + 1] !== target)) {
                ret = mid;
                break;
            }
            right = mid;
        } else if (tmp < target) {
            left = mid;
        }
    }

    return ret;
};

/**
 * Find the count of input target in the sorted array
 * @param {Array} arr
 * @param {number} target
 * @constructor
 */
const CountTarget = (arr, target) => {
    if (!arr || target === null || target === undefined) return; // throw invalid params error

    const firstIdx = getFirstIdx(arr, target);
    if (firstIdx >= 0) {
        const lastIdx = getLastIdx(arr, target);
        return lastIdx - firstIdx + 1;
    }
    return 0;
};

module.exports = CountTarget;