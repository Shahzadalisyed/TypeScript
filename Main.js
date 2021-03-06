/*
Examples : Day 1st

Array
Enum
Explicit Casting
Loop
Any
Object
Random
TypeOf
 */
var myString = "test";
var myNumber = 1;
var myBoolean = true;
myString = myNumber.toString();
myBoolean = (myString === "1");
if (myBoolean == true) {
    myString = "matched";
}
else {
    myString = "not matched";
}
console.log("Number :" + myNumber);
var complexType = { name: "my Name1", id: 1 };
var complexType1 = { id: 1, name: "my Name" };
complexType = complexType1;
if (complexType === complexType1) {
    console.log("complex type is same \n\r Values are different");
}
else {
    console.log("complex type is different");
}
// Using Type of keyword
if (typeof (complexType) == typeof (complexType1)) {
    console.log("complex type is same (typeof)");
}
else {
    console.log("complex type is different (typeof)");
}
/*
Error case  :  Properties name and no of properties need to be same, sequence and value do not matter,

complexType = {id:2};
complexType = {name: "new name" };
complexType = { address : "new address"};
*/
// Array With loop
var myNumberArray = [1, 2, 3];
myNumberArray = [4, 5, 6];
for (var index = 0; index < myNumberArray.length; index++) {
    console.log("Element  at [" + index + "] : " + myNumberArray[index]);
}
//Error case 
/*
myNumberArray = ["4","5","6"];
*/
//Any
var item1 = { firstName: " Deo ", lastName: "Jhon" };
item1 = { firstName: " Deo" };
console.log("First Name : " + item1.firstName);
/*
Error Case

var item1 = {firstName : " Deo " , lastName : "Jhon" };
item1 = {firstName : " Deo"  };
*/
// Explicit Casting 
var item2 = { firstName: " Deo ", lastName: "Jhon" };
item2 = { firstName: " Deo" };
console.log("First Name  : " + item2.firstName);
console.log("Last Name (Undefined) : " + item2.lastName); // Run Time Undefined 
item2 = { firstName: " Deo ", lastName: "Jhon" };
console.log("First Name : " + item2.lastName);
// Enum 
var DoorState;
(function (DoorState) {
    DoorState[DoorState["Open"] = 0] = "Open";
    DoorState[DoorState["Close"] = 1] = "Close";
    DoorState[DoorState["Ajar"] = 2] = "Ajar";
})(DoorState || (DoorState = {}));
var rndNumber = Math.floor((Math.random() * 3));
if (rndNumber == DoorState.Open) {
    console.log("Door : Open");
}
else if (rndNumber == DoorState.Close) {
    console.log("Door : Closed");
}
else if (rndNumber == DoorState.Ajar) {
    console.log("Door : Half Cloded");
}
var DoorStateNew;
(function (DoorStateNew) {
    DoorStateNew[DoorStateNew["Open"] = 3] = "Open";
    DoorStateNew[DoorStateNew["Closed"] = 7] = "Closed";
    DoorStateNew[DoorStateNew["Ajar"] = 10] = "Ajar";
})(DoorStateNew || (DoorStateNew = {}));
console.log("Open : " + DoorStateNew["Open"] + " OR By " + DoorStateNew[3]);
console.log("Closed : " + DoorStateNew["Closed"] + " OR By " + DoorStateNew[7]);
console.log("Ajar : " + DoorStateNew["Ajar"] + " OR By " + DoorStateNew[10]);
