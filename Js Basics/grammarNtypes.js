// One line Comment
/*
    Multi line comment
*/

/*
============
DECLARATIONS
============
*/

/*  
var: Declares a variable, optionally initialize it to a value
let: Declares a Block Scoped local variable, optionally initialize it to a value
const: Declares a Block Scoped read only named constant
*/

var age = 3;
let name = "Ram";
const TEMP = 24;
const my_object = {
    'key': 'value'
};
const my_array = ['HTML', 'CSS'];

// undefined
var hem;
console.log(hem); // returns undefined

/*
=================
VARIABLE HOISTING
=================
*/

x = 5;
console.log(x);
var x; //decaration of x is hoisted to the top

console.log(yo); // returns undefined 
var yo = 5; // only declarations get hoisted to the top
// not initializations

/*
===============
GLOBAL VARIABLE
===============
*/

// properties of global object
// In webpages, global object is window
// it can be set and accessed through, window.variable syntax

/*
==========
DATA TYPES
==========
*/

// - NUMBER: integer or floating type.
// - STRING: sequence of characters, representing text value.
// - OBJECT: container for values: consists of key value pairs.
// - BOOLEAN: true or false.
// - null: a special keyword denoting a null value.
// - BigInt: an integer with arbitrary precision. eg. 3123123123123n.
// - undefined: a top-level property whose value is not defined.
// - SYMBOL: a datatype whose instances are UNIQUE and IMMUTABLE.

/*
====================
DATA TYPE CONVERSION
====================
*/

// Js is dynamically typed language
// eg.
var my_var$ = "hey";
my_var$ = 2;
// no need to specify data type of a variable
// doesn't throw error on reassigning

/*
========================
NUMBERS AND '+' OPERATOR
========================
*/

console.log("The ans is " + 32); // The ans is 32
console.log("a" + 2); // a2
console.log('37' - 7); // 30

/*
============================
CONVERTING STRING TO NUMBERS
============================
*/

parseInt(); // only returns whole numbers 
// another way is using unary + operator
(+'1.1') + (+'1.1');

parseFloat();

/*
========
LITERALS
========
*/

// Literals represent values in Javascript
// These are fixed values - not variables

/*
- Array literals 
    - its a type of object initializers / also called array objects
    - eg. 
        let caste = ['newar', 'magar', 'chhetri'];
    - Extra comma in between array literals gives value undefined
    - eg.
        let car = ['toyota', ,'tata'];
        // here car[1] is undefined
    
- Boolean literals
    - has two literal values
    - true and false

- Floating-point literals
    - decimal integer(preceeded by + or -)
    - a decimal point
    - a fraction
    - an exponent(e or E)

- Numeric literals
    - Number and BigInt

- Object literals
    - var car = {toyota: 'micro', tata: 'bus', suzuki:{bike:'ninja', car: 'taxi'}};

- RegExp literals
    - a pattern enclosed between SLASHES.
    eg.
        var re = /ab+c/;

- String literals
    - zero or more characters enclosed in quotation marks.
    eg.
        'foo'
        "bar"
        '1234'
        "Ma'am is here."
    
    - TEMPLATE LITERALS are enclosed by the back-tick(`) instead of quotation marks.
    - Template literals are string literals allowing embedded expressions.
    - You can use multi-line strings and string interpolation.
    - Template string provides syntatic sugar for constructing strings.

    Eg.
        // Basic literal string creation
        `In JavaScript '\n' is a line-feed.
        
        // Multiline strings
        'In JavaScript, template strings can run over 
        multiple lines, but double and single quoted strings
        cannot.`

        // String Interpolation
        var name = 'Romeo', time = 'today';
        `Hello ${name}, how are you ${today}?`

        // Construct an HTTP request prefix used to interpret the replacements and construction
        POST`http://foo.org/bar?a=${a}&b=${b}
             Content-Type: application/json
             X-Credentials: ${credentials}
             {
                 "foo": ${foo},
                 "bar": ${bar}
             }`(myOnReadyStateChangeHandler);
             `
- Special Characters in Strings
    \b - Backspace
    \n - New Line
    \t - Tab

*/