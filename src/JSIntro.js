/*
OVERVIEW: 	Write a function that sums 2 integers.

INPUTS: 	num1, num2: numbers

OUTPUT: 	sum of num1 and num2

ERROR CASES: None.


*/

exports.Sum = function(num1, num2){
	if(typeof(num1)!=='number' || typeof(num2)!=='number')
		return NaN;
	else
	return num1+num2;
}




