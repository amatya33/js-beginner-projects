/*
===============================
CONTROL FLOW AND ERROR HANDLING
===============================
*/

/*
===============
BLOCK STATEMENT
===============
*/

// used to group statements

// {
//  statement_1;
//  statement_2;
//  .
//  .
//  statement_n;  
// }

// Used with control flow statements(if, for, while)

var x = 1;
while (x < 10) {
    x++;
} // {x++;} is a block statement

var y = 1; {
    var y = 2;
}
console.log(y); // output:2
// because y statement within the block is same scope as var statement before block

// let and const are block scoped

/*
======================
CONDITIONAL STATEMENTS
======================
*/

// if ... else STATEMENT

// if (condition_1) {
//     statement_1;
// } 
// else if(condition_2) {
//     statement_2;
// } 
// else if (){
// 
// }

// best practice if .. else statement

if (condition) {
    statement_1_runs_if_condition_is_true;
    statement_2_runs_if_condition_is_true;
} else {
    statement_1_runs_if_condition_is_false;
    statement_2_runs_if_condition_is_false;
}

// FALSY VALUES

// - false (Do not confuse between primitive boolean values true and false with the true and false of values of boolean object)
// - undefined
// - null
// - 0
// - NaN
// -  the empty string("")

// A program in which function checkData returns true if number of characters in a Text object is three. Otherwise, it displays an alert and returns false.
function checkData() {
    if (document.form1.threeChar.value.length == 3) {
        return true;
    } else {
        alert('Enter exactly three characters. ' +
            `{document.form1.threeChar.value} is not valid.`);
        return false;
    }
}

/*
=================
SWITCH STATEMENTS
=================
*/

// syntax

switch (expression) {
    case 1:
        statement;
        break;
    case label_2:
        statement;
        break;
    case label_3:
        statement;
        break;
    default:
        statement_def;
        break;
}

// WAP with switch statement to know the price of fruits

switch (YourFruit) {
    case 'Apple':
        console.log('Apple costs Rs.100 per kg.')
        break;
    case 'Banana':
        console.log('Bananas cost Rs.150 per kg.');
        break;
    case 'Cherry':
        console.log('Cherries cost Rs.300 per kg.');
        break;
    default:
        console.log(`Sorry, we are out of {YourFruit}`);
        break;
}
console.log("Is there anything you'd like?");

/*
==================
EXCEPTION HANDLING
==================
*/

// - throw exceptions using the throw statement 
// - handle using try ... catch statement

/* 
---------------
THROW STATEMENT
---------------
        - Used to throw an exception
        - A throw statement specifies the value to be thrown.
*/

throw 'Error2'; // String type
throw 12; // Number type
throw true; // Boolean type
throw {
    toString: function () {
        return "I'm an object!";
    }
};

// Create an object type UserException

function UserException(message) {
    this.message = message;
    this.name = 'UserException';
}

// Make the exception convert to a pretty string when used as a string
// (e.g. by the error console)

UserException.prototype.toString = function () {
    return `${this.name}: "${this.message}"`;
}

// Create an instance of the object type and throw it
throw new UserException('Value too high');

/*
-----------------------
TRY ... CATCH STATEMENT
-----------------------

- a block of statements to try 
- specifies one or more responses should an exception be thrown
- if an exception is thrown, the try catch statement catches it
- TRY BLOCK: lest you test a block of code for errors.
- CATCH BLOCK: lets you handle the error.
- THROW BLOCK: lets you create custom errors.

*/

// Simple syntax

try {
    //block of statements;
} catch (error) {
    console.log(error.message);
}

// short example

try {
    alert('hel');
} catch (error) {
    document.write(error.message);
}

try {
    adlert("Welcome guest!");
} catch (err) {
    document.getElementById("demo").innerHTML = err.message;
}

//