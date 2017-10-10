/** Problem 6
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
define(function(require, exports, module) {

  function getRowIdx(unit, numRows, pos) {
    if (pos === 0) return 1;
    if (pos <= numRows) return --pos;
    if (pos > numRows) return 2 * numRows - pos - 1;
  }
	
	var convert = function(s, numRows) {
    if (!s || numRows <= 1 || s.length <= numRows) return s;

    var result = "";
    var s_len = s.length;
    var unit = (numRows - 1) * 2;
    var i, row_idx;
    var num_in_row = [];

    for (i = 0; i < numRows; i++) {
    	num_in_row[i] = "";
    }
    for (i = 0; i < s_len; i++) {
    	row_idx = getRowIdx(unit, numRows, (i + 1) % unit);
    	num_in_row[row_idx] += s[i];
    }
    for (i = 0; i < numRows; i++) {
    	result += num_in_row[i];
    }
    return result;
  };
  
  exports.convert = convert;
});
