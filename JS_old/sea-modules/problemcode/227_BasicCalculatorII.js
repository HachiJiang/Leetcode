/** Problem 227
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  if (!s) return null;

  var array0 = s.match(/[\+\-\*\/]|\d+/g);
  if (!array0) return null;
  if (array0.length === 1) return parseInt(array0[0]);

  var result = 0;
  var array_tmp = [];
  var flag = 1;
  for (var i = 1; i <= array0.length; i += 2) {
    if (array0[i] === '*') {
      array0[i + 1] = array0[i - 1] * array0[i + 1];
    } else if (array0[i] === '/') {
      array0[i + 1] = Math.floor(array0[i - 1] / array0[i + 1]);
    } else if (array0[i] === '-') {
      array_tmp.push(array0[i - 1] * flag);
      flag = -1;
    } else {
      array_tmp.push(array0[i - 1] * flag);
      flag = 1;
    }
  }

  for (var i = 0; i < array_tmp.length; i++) {
    result += array_tmp[i];
  }
  return result;
};