//Problem 4
QUnit.test( "leetcode test - Problem 4", function( assert ) {
	var paras = [
		{args1:undefined, args2:undefined, expected:null},
		{args1:"134", args2:"125", expected:3}
	];

	for (var i = 0; i < paras.length; i++) {
		assert.equal( 
			findMedianSortedArrays(paras[i].args1, paras[i].args2), 
			paras[i].expected,
			" expects: " + paras[i].args + " equal to " + paras[i].expected);
	};
});

