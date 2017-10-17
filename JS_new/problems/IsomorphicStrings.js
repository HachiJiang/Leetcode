/**
 *
 * @param {String} s
 * @param {String} t
 * @returns {boolean}
 */

const isIsomorphic = function (s, t) {
    if (s === undefined || s === null || t === undefined || t === null || s.length !== t.length) {
        return false;
    }

    let len = s.length,
        mapS = {},
        mapT = {},
        c0, c1;

    if (len === 1) {
        return true;
    }

    for (let i = 0; i < len; i++) {
        c0 = s[i];
        if (mapS[c0] === undefined) {
            mapS[c0] = i;
        }

        c1 = t[i];
        if (mapT[c1] === undefined) {
            mapT[c1] = i;
        }

        if (mapS[c0] !== mapT[c1]) {
            return false;
        }
    }

    return true;
};

module.exports = isIsomorphic;