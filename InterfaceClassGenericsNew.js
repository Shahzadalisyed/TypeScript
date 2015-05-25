/*
Examnples :
1-Inheritance
2-Interface
3-Constructor Overloading with Super
4-Method Overriding
5-Javascript Closure
6-Factory Design Pattern
 */
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
console.log("-- Inheritance, Constructor Overloading with Super, Method Overriding--");
var BaseClassWithConstructor = (function () {
    function BaseClassWithConstructor(id) {
        this._id = id;
    }
    BaseClassWithConstructor.prototype.getProperties = function () {
        return " id : " + this._id;
    };
    return BaseClassWithConstructor;
})();
var DrivedClassWithConstructor = (function (_super) {
    __extends(DrivedClassWithConstructor, _super);
    function DrivedClassWithConstructor(id, name) {
        this._name = name;
        _super.call(this, id);
    }
    DrivedClassWithConstructor.prototype.getProperties = function () {
        return " name : " + this._name + _super.prototype.getProperties.call(this);
    };
    return DrivedClassWithConstructor;
})(BaseClassWithConstructor);
var objDrive = new DrivedClassWithConstructor(1, "TypeScript");
console.log(objDrive.getProperties());
//console.log("-- Inheritance--")
/*
remembers enviroment variable value
 */
console.log("-----Javascript Closure-----");
function TestClosure(value, counter) {
    this._value = value;
    this._counter = counter;
    function printValue() {
        console.log("Value : " + this._value + " , Counter :  " + this._counter);
        //console.log(this._counter);
        this._counter = this._counter + 1;
    }
    return printValue;
}
var myClosure = TestClosure(10, 10);
myClosure();
myClosure = TestClosure(true, 20);
myClosure();
myClosure = TestClosure({ id: 1, name: 'test' }, 30);
myClosure();
myClosure();
myClosure();
myClosure();
myClosure();
console.log("----Factory Design Pattern----");
var Person = (function () {
    function Person(dateOfBirth) {
        this._dateOfBirth = dateOfBirth;
    }
    Person.prototype.getDateOfBirth = function () {
        return this._dateOfBirth.toDateString();
    };
    return Person;
})();
var Infant = (function (_super) {
    __extends(Infant, _super);
    function Infant() {
        _super.apply(this, arguments);
    }
    Infant.prototype.getPersonCategory = function () {
        return "Infant";
    };
    Infant.prototype.canSignContract = function () {
        return false;
    };
    return Infant;
})(Person);
var Child = (function (_super) {
    __extends(Child, _super);
    function Child() {
        _super.apply(this, arguments);
    }
    Child.prototype.getPersonCategory = function () {
        return "Child";
    };
    Child.prototype.canSignContract = function () {
        return false;
    };
    return Child;
})(Person);
var Adult = (function (_super) {
    __extends(Adult, _super);
    function Adult() {
        _super.apply(this, arguments);
    }
    Adult.prototype.getPersonCategory = function () {
        return "Adult";
    };
    Adult.prototype.canSignContract = function () {
        return true;
    };
    return Adult;
})(Person);
var PersonFactoryCalss = (function () {
    function PersonFactoryCalss() {
    }
    PersonFactoryCalss.prototype.getPerson = function (dateOfBirth) {
        var dateNow = new Date();
        var dateTwoYearsAgo = new Date(dateNow.getFullYear() - 2, dateNow.getMonth(), dateNow.getDay());
        var dateEighteenYearsAgo = new Date(dateNow.getFullYear() - 18, dateNow.getMonth(), dateNow.getDay());
        if (dateOfBirth >= dateTwoYearsAgo) {
            return new Infant(dateOfBirth);
        }
        else if (dateOfBirth >= dateEighteenYearsAgo) {
            return new Child(dateOfBirth);
        }
        else {
            return new Adult(dateOfBirth);
        }
    };
    return PersonFactoryCalss;
})();
var objPersonFactoryClass = new PersonFactoryCalss();
var arrPerson = new Array();
arrPerson.push(objPersonFactoryClass.getPerson(new Date(2013, 5, 26))); //infant 
arrPerson.push(objPersonFactoryClass.getPerson(new Date(2000, 5, 26))); // Child
arrPerson.push(objPersonFactoryClass.getPerson(new Date(1980, 5, 26))); // Adult 
var objIPerson;
for (var index = 0; index < arrPerson.length; index++) {
    objIPerson = arrPerson[index];
    if (objIPerson != null) {
        console.log("A person with a birth date of : " + objIPerson.getDateOfBirth()
            + " is categorised as : " + objIPerson.getPersonCategory()
            + "  and " + (objIPerson.canSignContract() == true ? "can sign " : "can not sign ") + "contract");
    }
}
