/** Problem 3
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (!s) return 0;
  if (s.length === 1) return 1;

  var max = 0;
  var hashMap = {};
  hashMap[s[0]] = 0;
  for (var i = 1, j = 0; i < s.length; i++) {
    if (hashMap[s[i]] !== undefined) {
      j = Math.max(j, hashMap[s[i]] + 1);
    }
    hashMap[s[i]] = i;
    max = Math.max(max, i - j + 1);
  }
  return max;
};