/**
 * @param {string} str
 * @return {number}
 */
define(function(require, exports, module) {
  var myAtoi = function(str) {
  	if (str === undefined) return str;
  	return Math.max(Math.min(parseInt(str) || 0, 2147483647), -2147483648)
  };
  exports.myAtoi = myAtoi;
});
