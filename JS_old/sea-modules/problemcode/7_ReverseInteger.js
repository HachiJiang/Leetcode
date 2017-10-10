/** Problem 7
 * @param {number} x
 * @return {number}
 */
define(function(require, exports, module) {
  var reverse = function(x) {
    if (!x) return x;

    var s = x.toString();
    var len = s.length, tmp = 0;
    var result = [];

    if (s[0] === "-") {
      result.push("-");
      tmp = 1;
    }
    for (var i = len - 1; i >= tmp; i--) {
      result.push(s[i]);
    }
    
    tmp = parseInt(result.join(""));
    if (tmp > 2147483647 || tmp < -2147483648)
    	tmp = 0;
    return tmp;
  };
  exports.reverse = reverse;
});
