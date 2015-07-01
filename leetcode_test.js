QUnit.module( "group current" );
//Problem 5
QUnit.skip( "leetcode test - Problem 5", function( assert ) {
	var paras = [
		{args:undefined, expected:null},
	];

	for (var i = 0; i < paras.length; i++) {
		var actual = longestPalindrome(paras[i].args);
		assert.equal( 
			actual, 
			paras[i].expected,
			" expects: " + actual + " equal to " + paras[i].expected);
	};
});

QUnit.module( "group other" );
//Problem 4
QUnit.test( "leetcode test - Problem 4", function( assert ) {
	var paras = [
		{args1:undefined, args2:undefined, expected:null},
		{args1:[1,2,2], args2:[], expected:2},
		{args1:[1,2,2], args2:[1,2,3], expected:2},
		{args1:[1,1], args2:[2,2,2,3], expected:2},
		{args1:[1,3,4], args2:[1,2,5], expected:2.5},
		{args1:[0,3,4], args2:[1,2,5,8,9], expected:3.5},		
		{args1:[1,2], args2:[1,1], expected:1},
		{args1:[1], args2:[1], expected:1},
		{args1:[1,1], args2:[1,2], expected:1},
		{args1:[0,0,1,1], args2:[0,0,1,2], expected:0.5},
	];

	for (var i = 0; i < paras.length; i++) {
		var actual = findMedianSortedArrays(paras[i].args1, paras[i].args2);
		assert.equal( 
			actual, 
			paras[i].expected,
			" expects: " + actual + " equal to " + paras[i].expected);
	};
});

