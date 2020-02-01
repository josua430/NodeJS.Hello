/*var myArr = ['foo', 'bar', 'baz'];
myArr.length = 0;
myArr.push('bin');
console.log(myArr);*/
/*
function my_function(number, callback) {
    number = number % 10;
    callback(number); }
    my_function(13, function(response) {
    console.log('The response is' +response); });
*/
/*
function fun_func(x_loc, y_loc) {
    x_loc = x_loc+1;
    y_loc.myNum = y_loc.myNum + 1;
    console.log(x_loc);
    console.log(y_loc);
    }
    var x = 1, y = {'myNum': 1};
    fun_func(x, y);
*/
/*
function aaa() { return { test: 1 }; }
console.log(typeof aaa());

console.log(Number("1") - 1 == 0);
*/
/*
var full_name = "Joe Cool4";
var obj = {
full_name: "Andrew Carson1", properties: {
full_name: "Tom Fool",
get_full_name: function () { return this.full_name;
} } }
console.log(obj.properties.get_full_name());
//var test = ; 
console.log(obj.properties.get_full_name());
*/
/*
var y = 1;
if (function f(){}) { y += typeof f; }
console.log(y);
*/
var Employee = { company: 'xyz' };
var emp1 = Object.create(Employee);
delete emp1.company; console.log(emp1.company);
