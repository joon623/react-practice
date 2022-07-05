function identity(arg) {
    return arg;
}
function identity2(arg) {
    return arg;
}
function identity3(arg) {
    return arg;
}
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};
function loggingIdentity(arg) {
    // 이제 a .length 속성을 아니까 더 이상 에러가 없다.
    console.log(arg.length);
    return arg;
}
function getProperty(obj, key) {
    return obj[key];
}
var x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, "a");
// getProperty(x, "m");
// Argument of type 'm' is not assignable to parameter of type 'a' | 'b' | 'c' | 'd'
function create(c) {
    return new c();
}
function f() {
    return { x: 10, y: 3 };
}
function createLabel(nameOrId) {
    throw "unimplemented";
}
function foo(arg) {
    console.log(arg);
}
foo("asad");
