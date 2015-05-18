/*
Enum Const and Function examples 

1-Cont Enum
2-function 
3-Anonymous function 
4-Optional Param
5-Default Param
6-rest paramter or three dot (...) syntex 
7-argument variable 
 
 */

// Const Enum 
// always inject number in js and removes string reprsentation   
 const enum DoorStateConst
{
	Open,
	Close,
	Ajar
}	
	console.log(DoorStateConst.Close);
	
	
function  addNumbers(a : number, b : number) : number
{
   return a+b;	
}	

console.log("Function Result : " +  addNumbers(1,2));
//console.log(addNumbers("1","2"));

//Anonymous Function 

var myAddFn =  
function (a : number, b : number) : number
{
	return a + b ;
}  

console.log("Anonymous function " +  myAddFn(11,44));

/* Error Case 
console.log("Anonymous function " +  myAddFn("11","44"));
*/

// Optional param 

function concatString(a: string, b: string, c: string) : string
{
	return a+b+c;
}  
console.log(concatString("1","2","3"));
/* Error Case
console.log(concatString("1","2"));
*/

function concatStringNew(a: string, b: string,c? : string, d? : string ) : string
{
	console.log("a : "  + a);
	console.log("b : "  + b);
	console.log("c : "  + c);
	console.log("d : "  + d);
	
	return a+b+c+d ;
}
console.log("Optioal Paramter function : " + concatStringNew("1","2","3","4"));  
console.log("Optioal Paramter function : " + concatStringNew("1","2","3"));
console.log("Optioal Paramter function : " + concatStringNew("1","2"));

// Default Value 
var myDefaultValueFunction =  
function(a : string, b: string, c: string  = "c" ) 
{
	return a +  b + c;
}

 console.log("Default Paramter function : " + myDefaultValueFunction("a","b","c"));  
 console.log("Default Paramter function : " + myDefaultValueFunction("a","b"));

// rest Parameters or three dots (...) Syntex 

function testParams(arg1: string,  arg2: string,... params : number[])
{
   if(params.length > 0 )
   {
	    console.log( "--------------------Rest Params---------------------");
	   for (var index = 0; index < params.length; index++) {
		   console.log("Params " + index  + " =  "   +  params[index]);		   		   
	   }	    
	    console.log( "--------------------Rest Params---------------------");
		
		console.log( "--------------------argument variable---------------------");
		for (var index = 0; index < arguments.length; index++) {		
		   console.log("Arguments " + index  + " =  "   +  arguments[index]);		   		   
	   }
	   console.log( "--------------------argument variable---------------------");
		
		console.log( "--------------------normal param---------------------");
		console.log("arg1 = " + arg1);
		console.log("arg2 = " + arg2);
		console.log( "--------------------normal param---------------------");
		
   }	
}

testParams("arg1","arg2",1,2,3,4,5);