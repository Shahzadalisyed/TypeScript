/*
Function  Example
1- Callback Fun JS
2- Callback Fun TS
3- Fun Signature
4- JavaScript Lexical Scoping
5- Function Overload in JS and TS
6- UNION Type
7- Aliases Union Type
8- Aliases fun signature
*/
// Callback function 
console.log("--------------------CallBack JavaScript Function---------------------");
function myCallBack(text) {
    console.log("myCallBack : " + text);
}
function myCallingFunction(initText, myCallBack) {
    console.log("myCallingFunction : " + initText);
    myCallBack(initText);
}
myCallingFunction("Shahzad Ali", myCallBack);
console.log("--------------------CallBack JavaScript Function---------------------");
// Call Function Error
function myCallBackFunctionNew(initText, myCallback) {
    console.log("myCallBackFunctionNew :" + initText);
    if (typeof (myCallback) === "function") {
        myCallback(initText);
    }
    else {
        console.log("myCallBack is not a function : " + myCallback);
    }
}
myCallBackFunctionNew("Test 123", myCallBack);
myCallBackFunctionNew("Test 1", "Test 2");
console.log("--------------------CallBack JavaScript Function---------------------");
console.log("--------------------CallBack TypeScript Function---------------------");
// function signature Above Example in TS 
function myCallBackTs(text) {
    console.log("myCallBaclTS : " + text);
}
function myCallBackCallingFunctionTs(initText, myCallBackTs) {
    console.log("myCallBackCallingFunctionTs : " + initText);
    myCallBackTs(initText);
}
myCallBackCallingFunctionTs("Test TS CallBack", myCallBackTs);
/*
 Error Call
myCallBackCallingFunctionTs("Test TS CallBack 1","Test TS CallBack 2");
*/
console.log("--------------------CallBack TypeScript Function---------------------");
console.log("--------------------JavaScript Lexical Scoping---------------------");
function parentFunction() {
    var testScope = "Parent";
    childFunction();
    function childFunction() {
        console.log(testScope);
    }
}
parentFunction();
/*
Error calling
console.log(testScope);
*/
console.log("--------------------JavaScript Leical Scoping---------------------");
console.log("--------------------JavaScript Function Overloads---------------------");
function add(arg1, arg2) {
    return arg1 + arg2;
}
console.log("add(1,1)" + add(1, 1));
console.log("add('1','1')" + add('1', '1'));
console.log("add(false,true)" + add(false, true));
console.log("--------------------TypeScript Function Overloads---------------------");
function addTs(arg1, arg2) {
    return arg1 + arg2;
}
console.log("addTs(1,1)" + add(1, 1));
console.log("addTs('1','1')" + add('1', '1'));
console.log("addTs(false,true)" + add(false, true));
console.log("--------------------TypeScript Function Overloads---------------------");
console.log("--------------------TypeScript Union Type---------------------");
function fnUnionType(arg1, arg2) {
    if (typeof (arg1) === "number") {
        return arg1 + " : is a number";
    }
    if (typeof (arg1) === "string") {
        return arg1 + " : is a string";
    }
    if (typeof (arg1) === "boolean") {
        return arg1 + " : is a boolean";
    }
}
console.log("arg1 : " + fnUnionType(1, 1));
console.log("arg1 : " + fnUnionType('1', '1'));
console.log("arg1 : " + fnUnionType(false, true));
console.log("--------------------TypeScript Union Type---------------------");
console.log("--------------------TypeScript Type Aliases---------------------");
function fnUnionTypeByAliases(arg1, arg2) {
    if (typeof (arg1) === "number") {
        return arg1 + " : is a number";
    }
    if (typeof (arg1) === "string") {
        return arg1 + " : is a string";
    }
    if (typeof (arg1) === "boolean") {
        return arg1 + " : is a boolean";
    }
}
console.log("fnUnionTypeByAliases arg1 : " + fnUnionTypeByAliases(1, 1));
console.log("fnUnionTypeByAliases arg1 : " + fnUnionTypeByAliases('1', '1'));
console.log("fnUnionTypeByAliases arg1 : " + fnUnionTypeByAliases(false, true));
console.log("--------------------TypeScript Type Aliases---------------------");
console.log("--------------------TypeScript Type Aliases for Function Signature---------------------");
function myCallBackType(initText) {
    console.log("myCallBackTpe : " + initText);
}
function myCallBackTypeCalling(initText, myCallBackType) {
    myCallBackType(initText);
}
myCallBackTypeCalling("Testing ....", myCallBackType);
console.log("--------------------TypeScript Type Aliases for Function Signature---------------------");
