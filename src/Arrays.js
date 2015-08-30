/*
OVERVIEW: 	Implement a function that sums all the numbers in the given array.
			Example: SumOfArray([1,2,3]) should return a value of 6.

INPUTS: 	arrayOfNums: An array of numbers

OUTPUT: 	Sum of all the numbers

ERROR CASES: If arrayOfNums is null, return NaN.
			 If arrayOfNums is not an array, return NaN. Since Javascript is weakly typed, it is possible to
			 invoke calls such SumOfArray("hello").
			 You can use instanceof operator as described in the project page to check this.
*/
exports.SumOfArray = function(arrayOfNums){
	if(arrayOfNums instanceof Array)
	{
		var sum=0;
		for(var i=0;i<arrayOfNums.length;i++)
			sum+=arrayOfNums[i];
		return sum;
	}	
	else
	return NaN;

}

/*
OVERVIEW: 	Implement a function that sums only the unique umbers in the given array.
			Example: SumOfUniqueNumbers([2,3,3,2]) should return a value of 2+3=5.

INPUTS: 	arrayOfNums: An array of numbers

OUTPUT: 	Sum of the unique numbers

ERROR CASES: If arrayOfNums is null, return NaN.
			 If arrayOfNums is not an array, return NaN. Since Javascript is weakly typed, it is possible to
			 invoke calls such SumOfArray("hello").
			 You can use instanceof operator as described in the project page to check this.
*/

exports.SumOfUniqueNumbers = function(arrayOfNums){
		if(arrayOfNums instanceof Array)
		{
			var uniquearr=[];
			for(var i=0;i<arrayOfNums.length;i++)
				if(uniquearr.indexOf(arrayOfNums[i])==-1)
					uniquearr.push(arrayOfNums[i]);
			return exports.SumOfArray(uniquearr);
		}
		else
			return NaN;

}

/*
OVERVIEW: 	Implement a function that sums the diagonal elements in the given array.
			Example: SumOfUniqueNumbers([[11,12,13],[12,13,14],[13,14,15]]) should sum the elements at indexes (1,1),(2,2),(3,3).
			This will be sum of 11 + 13 + 15 = 39

INPUTS: 	array2d: An array of numbers

OUTPUT: 	Sum of the diagonal cells of the array.

ERROR CASES: If array2d is null, return NaN.
			 If array2d is not an array, return NaN. 
			 If array2d is not a 2-d array, return NaN.
			 If array2d is a 2-d array with different dimensions, return NaN.
*/

exports.SumOfDiagonalCells = function(array2d){
	if (array2d instanceof Array)
	{
		var num=0,sum=0;
		for(var i=0;i<array2d.length;i++)
		{
			if(array2d[i] instanceof Array && array2d[i].length==array2d.length)
			{
				if(typeof(array2d[num][num])==='number')
					{
						sum+=array2d[num][num];
						num++;
					}
				else
					return NaN;
			}
			else
				return NaN;
		}
		return sum;
	}
	else
	return NaN;

}
