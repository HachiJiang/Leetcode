define(function(require) {

  var qunit = require('qunit');

  //Problem 7
  var problem7 = require('problem7');

  QUnit.test("leetcode test - Problem 7", function(assert) {
    var paras = [
      { args: undefined, expected: null }, 
      { args: 1, expected: 1 }, 
      { args: -1, expected: -1 }, 
      { args: 123, expected: 321 }, 
      { args: -123, expected: -321 }, 
      { args: 1000, expected: 1 }, 
      { args: 1534236469, expected: 0 }
    ];

    paras.forEach(function(para) {
      var actual = problem7.reverse(para.args);
      assert.equal(
        actual,
        para.expected,
        " expects: " + actual + " equal to " + para.expected);
    });
  });

  //Problem 4
  var problem4 = require('problem4');

  QUnit.test("leetcode test - Problem 4", function(assert) {
    var paras = [
      { args1: undefined, args2: undefined, expected: null }, 
      { args1: [1, 2, 2], args2: [], expected: 2 }, 
      { args1: [1, 2, 2], args2: [1, 2, 3], expected: 2 }, 
      { args1: [1, 1], args2: [2, 2, 2, 3], expected: 2 }, 
      { args1: [1, 3, 4], args2: [1, 2, 5], expected: 2.5 }, 
      { args1: [0, 3, 4], args2: [1, 2, 5, 8, 9], expected: 3.5 }, 
      { args1: [1, 2], args2: [1, 1], expected: 1 }, 
      { args1: [1], args2: [1], expected: 1 }, 
      { args1: [1, 1], args2: [1, 2], expected: 1 }, 
      { args1: [0, 0, 1, 1], args2: [0, 0, 1, 2], expected: 0.5 }, 
    ];

    paras.forEach(function(para) {
      var actual = problem4.findMedianSortedArrays(para.args1, para.args2);
      assert.equal(
        actual,
        para.expected,
        " expects: " + actual + " equal to " + para.expected);
    });
  });

});
