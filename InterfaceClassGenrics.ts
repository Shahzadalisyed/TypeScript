/*
Interface, Class, Constructor, class functions Example
1-Interface
2-Class
3-Constructor
4-Function
5-Any Keyword
6-Optional Paramter
7-Default Parameter   
8-Rest syntax
9-CallBack
*/

console.log("Interface Sarts");

interface IComplexType
{
	id : number;
	name : string ; 
} 

var objComplexType1 : IComplexType =
{
	id: 1,
	name:  "One"
}

var objComplexType2 : IComplexType = 
{
	id: 2,
	name: "Two"
} 

var objComplexType3 : IComplexType =
{	
  id: 3,
  name: "Three",
  firstName : "first Name"
}

if(typeof(objComplexType1) == typeof(objComplexType2) )
{
	console.log("obj1 and obj2  types are equal ... ");
}
else
{	
	console.log("obj1 and obj2  types are NOT equal");
}

if(typeof(objComplexType1) == typeof(objComplexType3) )
{
	console.log("obj1 and obj3  types are equal ... ");
}
else
{	
	console.log("obj1 and obj3  types are NOT equal");
}

/*
Error Case 

var objComplexType3 : IComplexType = 
{
	 id: 4,
	 Description : "Description"	 
}  
  
*/
console.log("Interface Ends");

console.log("Class Starts");

interface IMyInterface
{
	id : number ;
	name : string ;
	print() : string;   
}

class myClass implements IMyInterface
{
	id: number;
	name : string ;
	
	print() : string
	{
		return "id : " + this.id  +  " , name : " + this.name ;
	}   
} 

var obj1 : myClass = new myClass(); 	
obj1.id = 1 ;
obj1.name = "obj1";

console.log(obj1.print());


var obj2 : myClass = new myClass();
obj2.id =2 ; obj2.name = "obj2"; 

window.onload = ()  =>
{
	console.log(obj2.print());
} 
console.log("Class Ends");

console.log("Constructor Starts");

class myClassNew implements IMyInterface
{
	id : number ;
	name : string;
	
	constructor(id : number , name : string)
	{
		this.id = id ;
		this.name = name; 
	}
	
	print() : string  
	{
		return " id :  " + this.id  + " :  name : " + this.name; 
	}  
}
  
  var obj3 : myClassNew = new myClassNew(3,"obj3");
  console.log(obj3.print());
  
console.log("Constructor Ends");

console.log("Class functions Starts");

class myClassExample implements IComplexType  
{
	id : number;
	name : string;
	
	constructor(id : number  , name : string);
	constructor(id : string, name : string);
	constructor(id : any , name : any)
	{
		//this.id = id;  // Also Valid  
		this.id = typeof(id) == "number" ? id  : 0;			
		this.name = name; 
	} 
	
	print() : string 
	{
	  return  "id : " + this.id  + ", name : " + this.name;  
	}
	
	usingTheAnyKeyword(id : any ) : any
	{
		 this.id = id;
		//this.id = typeof(id) == "number" ? id : 0; // Also Valid 		
		this.name = "usingTheAnyKeyword"; 
	}
	usingOpionalparamter(id?: number)
	{
		if(id != null)
		{
			this.id = id; 
		}
		else
		{
			this.id = 0; 
		}
		name = "usingOpionalparamter";
	}
	usingDefaultParameter(id : number = 0)
	{
		this.id = id; 
		this.name  = "usingDefaultParameter"
	} 
	usingRestSyntax (...id : number[])
	{
		if(id.length > 0)
		{
			for (var index = 0; index < id.length; index++) {
				console.log("[" + index + "]" + " : " +  id[index]);				
			}
		}
	}
	
	usingFunctionCallBack(myCallBack : (id : number, name : string ) => string) : string
	{
	  return myCallBack(1111 , "10101");
	}	 
	
}
console.log("Constructor");
var objMyClassExample1 : myClassExample = new myClassExample(11,"22"); 
var objMyClassExample2 : myClassExample = new myClassExample("22__","33");
/*
Error Case 
va objMyClassExample3 : myClassExample = new myClassExample(true,true);
*/  
console.log(objMyClassExample1.print());
console.log(objMyClassExample2.print());

console.log("usingTheAnyKeyword");
objMyClassExample1.usingTheAnyKeyword(true);
objMyClassExample2.usingTheAnyKeyword(123);
console.log(objMyClassExample1.print());
console.log(objMyClassExample2.print());

console.log("usingOpionalparamter");
objMyClassExample1.usingOpionalparamter();
objMyClassExample2.usingOpionalparamter(125);
console.log(objMyClassExample1.print());
console.log(objMyClassExample2.print());

console.log("usingDefaultparamter");
objMyClassExample1.usingDefaultParameter();
objMyClassExample2.usingDefaultParameter(0.5);
console.log(objMyClassExample1.print());
console.log(objMyClassExample2.print());

console.log("usingRestSyntax");
objMyClassExample1.usingRestSyntax(1,2,3);
console.log("----");
objMyClassExample2.usingRestSyntax(1,2,3,4);

console.log("usingFunctionCallBack");
 function myUsingCallBack(id: number , name : string ) : string 
	 {
		 return ("Id : " + id + " , name :"  + name);
	 } 
console.log(objMyClassExample1.usingFunctionCallBack(myUsingCallBack));


console.log("Class functions Ends");


	
