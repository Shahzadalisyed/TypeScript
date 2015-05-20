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
var objComplexType1 = {
    id: 1,
    name: "One"
};
var objComplexType2 = {
    id: 2,
    name: "Two"
};
var objComplexType3 = {
    id: 3,
    name: "Three",
    firstName: "first Name"
};
if (typeof (objComplexType1) == typeof (objComplexType2)) {
    console.log("obj1 and obj2  types are equal ... ");
}
else {
    console.log("obj1 and obj2  types are NOT equal");
}
if (typeof (objComplexType1) == typeof (objComplexType3)) {
    console.log("obj1 and obj3  types are equal ... ");
}
else {
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
var myClass = (function () {
    function myClass() {
    }
    myClass.prototype.print = function () {
        return "id : " + this.id + " , name : " + this.name;
    };
    return myClass;
})();
var obj1 = new myClass();
obj1.id = 1;
obj1.name = "obj1";
console.log(obj1.print());
var obj2 = new myClass();
obj2.id = 2;
obj2.name = "obj2";
window.onload = function () {
    console.log(obj2.print());
};
console.log("Class Ends");
console.log("Constructor Starts");
var myClassNew = (function () {
    function myClassNew(id, name) {
        this.id = id;
        this.name = name;
    }
    myClassNew.prototype.print = function () {
        return " id :  " + this.id + " :  name : " + this.name;
    };
    return myClassNew;
})();
var obj3 = new myClassNew(3, "obj3");
console.log(obj3.print());
console.log("Constructor Ends");
console.log("Class functions Starts");
var myClassExample = (function () {
    function myClassExample(id, name) {
        //this.id = id;  // Also Valid  
        this.id = typeof (id) == "number" ? id : 0;
        this.name = name;
    }
    myClassExample.prototype.print = function () {
        return "id : " + this.id + ", name : " + this.name;
    };
    myClassExample.prototype.usingTheAnyKeyword = function (id) {
        this.id = id;
        //this.id = typeof(id) == "number" ? id : 0; // Also Valid 		
        this.name = "usingTheAnyKeyword";
    };
    myClassExample.prototype.usingOpionalparamter = function (id) {
        if (id != null) {
            this.id = id;
        }
        else {
            this.id = 0;
        }
        name = "usingOpionalparamter";
    };
    myClassExample.prototype.usingDefaultParameter = function (id) {
        if (id === void 0) { id = 0; }
        this.id = id;
        this.name = "usingDefaultParameter";
    };
    myClassExample.prototype.usingRestSyntax = function () {
        var id = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            id[_i - 0] = arguments[_i];
        }
        if (id.length > 0) {
            for (var index = 0; index < id.length; index++) {
                console.log("[" + index + "]" + " : " + id[index]);
            }
        }
    };
    myClassExample.prototype.usingFunctionCallBack = function (myCallBack) {
        return myCallBack(1111, "10101");
    };
    return myClassExample;
})();
console.log("Constructor");
var objMyClassExample1 = new myClassExample(11, "22");
var objMyClassExample2 = new myClassExample("22__", "33");
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
objMyClassExample1.usingRestSyntax(1, 2, 3);
console.log("----");
objMyClassExample2.usingRestSyntax(1, 2, 3, 4);
console.log("usingFunctionCallBack");
function myUsingCallBack(id, name) {
    return ("Id : " + id + " , name :" + name);
}
console.log(objMyClassExample1.usingFunctionCallBack(myUsingCallBack));
console.log("Class functions Ends");
