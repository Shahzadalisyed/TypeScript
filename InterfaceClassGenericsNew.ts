/*
Examnples : 
1-Inheritance
2-Interface
3-Constructor Overloading with Super
4-Method Overriding
5-Javascript Closure
6-Factory Design Pattern 
 */

console.log("-- Inheritance, Constructor Overloading with Super, Method Overriding--")

class BaseClassWithConstructor
{
	_id : number;
	
	constructor(id : number)
	{
		this._id = id;
	} 
	getProperties() : string 
	{
		return  " id : " + this._id;    
	}
}

class DrivedClassWithConstructor extends BaseClassWithConstructor
{
	_name : string;
	constructor(id : number , name : string)
	{
		this._name = name;
		super(id);  
	} 
	
	getProperties() : string 
	{
		return " name : " + this._name + super.getProperties(); 
	} 
}

 var objDrive : DrivedClassWithConstructor = new  DrivedClassWithConstructor(1,"TypeScript");
 console.log(objDrive.getProperties());
 //console.log("-- Inheritance--")
 /*
 remembers enviroment variable value 
  */
  console.log("-----Javascript Closure-----")
 function TestClosure(value,counter)
 {
	 this._value = value;
	 this._counter = counter ;
	 function printValue()
	 {
		 console.log("Value : " + this._value + " , Counter :  " + this._counter);
		 //console.log(this._counter);
		 this._counter = this._counter + 1 ;
	 }
	 return printValue;	   
 }  
 
 var  myClosure  = TestClosure(10,10);  
 myClosure();
 myClosure  = TestClosure(true,20);
 myClosure();
 myClosure  = TestClosure({ id : 1 , name : 'test'},30);
 myClosure();
 myClosure();
 myClosure();
 myClosure();
 myClosure();
 
 console.log("----Factory Design Pattern----")
 
 interface IPerson
 {
	 getPersonCategory() : string ;
	 canSignContract() : boolean;
	 getDateOfBirth() : string; 
 }
 
 class Person {
	 _dateOfBirth : Date;
	 
	 constructor(dateOfBirth : Date)
	 {
		 this._dateOfBirth = dateOfBirth;
	 }
	 
	 getDateOfBirth() : string
	 {
		 return this._dateOfBirth.toDateString();
	 } 
 }
 
 class Infant extends Person implements IPerson{
	 getPersonCategory() : string 
	 {
		 return "Infant";
	 }
	 canSignContract() : boolean
	 {
		 return false;
	 }
 } 
 
 class Child extends Person implements IPerson{
	 getPersonCategory() : string 
	 {
		 return "Child";
	 }
	 canSignContract() : boolean
	 {
		return false; 
	 }
 } 
 class Adult extends Person implements IPerson{
	 getPersonCategory() : string 
	 {
		 return "Adult";
	 }
	 canSignContract() : boolean
	 {
		 return true;
	 }	 
 }  
 
 class PersonFactoryCalss {
	 
	 getPerson(dateOfBirth : Date) : IPerson
	 {
       var dateNow = new Date();
	   var dateTwoYearsAgo = new Date(dateNow.getFullYear() -2,dateNow.getMonth(),dateNow.getDay());
	   var dateEighteenYearsAgo = new Date(dateNow.getFullYear() - 18,dateNow.getMonth(),dateNow.getDay());
	   
	   if(dateOfBirth >= dateTwoYearsAgo)
	   {
		   return new Infant(dateOfBirth);
	   }	    
	   else if (dateOfBirth >= dateEighteenYearsAgo)
	   {
		   return new Child(dateOfBirth);
	   }
	   else
	   {
		  return new Adult(dateOfBirth);   
	   }	 
	   
	 }
 }
 
 
 var objPersonFactoryClass : PersonFactoryCalss = new PersonFactoryCalss();
 
 var arrPerson :IPerson[] = new Array();
 
 arrPerson.push(objPersonFactoryClass.getPerson(new Date(2013,5,26))); //infant 
 arrPerson.push(objPersonFactoryClass.getPerson(new Date(2000,5,26))); // Child
 arrPerson.push(objPersonFactoryClass.getPerson(new Date(1980,5,26))); // Adult 
  
  var objIPerson : IPerson;
  
 for (var index = 0; index < arrPerson.length; index++) {
	  objIPerson = arrPerson[index];
	  
	  if(objIPerson != null)
	  {
		  console.log(
			  "A person with a birth date of : " + objIPerson.getDateOfBirth()
		  + " is categorised as : " + objIPerson.getPersonCategory()	
		  + "  and " + (objIPerson.canSignContract() == true ? "can sign " : "can not sign ") + "contract"   
		  );
	  }
	  
  }