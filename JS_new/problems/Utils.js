/**
 * Utils
 */

const swap = (arr, start, end) => {
    if (!arr) return;

    const tmp = arr[start];
    arr[start] = arr[end];
    arr[end] = tmp;
};

const partition = (arr, start, end) => {
    if (!arr) return;

    let ref = arr[start];
    let low = start + 1;
    let high = end;

    while (low <= high) {
        while (arr[high] > ref) {
            high--;
        }
        while (low <= high && arr[low] <= ref) {
            low++;
        }
        if (low < high && arr[low] > arr[high]) {
            swap(arr, low, high);
            low++;
            high--;
        }
    }
    swap(arr, start, high);
    return high;
};

/**
 * Copy array as part of another array
 * @param {Array} srcArr
 * @param {Array} destArr
 * @param {number} start
 * @param {number} end
 */
const copyArr = (srcArr, destArr, start = 0, end = 0) => {
    if (!srcArr || !destArr || start === null || end === null || end < start) return;

    for (let i = start; i <= end; i++) {
        destArr[i] = srcArr[i - start];
    }
};

module.exports = {
    swap,
    partition,
    copyArr
};
