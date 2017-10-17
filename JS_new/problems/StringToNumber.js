/**
 * Convert string to number
 * @param {String} str
 */

const getNumber = str => str - '';

const toNumber = str => {
    if (!str) {
        return null;
    }

    // js 原生支持 str - '', 自动转换为number
    // 非原生写法如下:
    let res = 0,
        len = str.length,
        flag = 1,
        i = 0,
        tmp = str[0];

    // if the length is 1
    if (len === 1) {
        tmp -= '';
        return (tmp >= 0 && tmp <= 9) ? tmp : null;
    }

    // if the length is larger than 1
    if (tmp === '-') {
        flag = -1;
        i++;
    } else if (tmp === '+') {
        i++;
    }

    while(i < len) {
        tmp = str[i] - '';
        if (isNaN(tmp)) {
            return null;
        }

        res += tmp * Math.pow(10, len - i - 1);
        i++;
    }

    return res * flag;
};

module.exports = toNumber;