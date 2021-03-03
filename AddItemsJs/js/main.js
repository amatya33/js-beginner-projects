var itemCounter = 1;
// var ourList = document.getElementById("our-list");
// OR
var ourList = document.querySelector("#our-list");

var ourButton = document.getElementById("our-button");
var ourHeadline = document.getElementById("our-headline");

// var listItems = document.getElementById("our-list").getElementsByTagName("li");
// OR
var listItems = document.querySelectorAll("#our-list li");

// Iterate over the list of items
// for (i = 0; i < listItems.length; i++) {
//     listItems[i].addEventListener("click", activateItem);
// }

ourList.addEventListener("click", activateItem);

// Display iterated(selected) item in the headline
// Function that runs when list item is clicked on
function activateItem(e) {
    if (e.target.nodeName == "LI") {
        ourHeadline.innerHTML = e.target.innerHTML;
        for (i = 0; i < e.target.parentNode.children.length; i++) {
            e.target.parentNode.children[i].classList.remove("active");
        }
        e.target.classList.add("active");
    }
}

ourButton.addEventListener("click", createNewItem);

function createNewItem() {
    ourList.innerHTML += "<li>Add this " + itemCounter + "</li>";
    itemCounter++;
}



// 'user strict'
// console.log('Hello world!')

// // Variable declaration
// var Age;
// var FirstName, LastName = "Atom",
//     Height = 5;
// // Constant
// const TEMP = 12.3,
//     NAME = "Dal";
// // Variable
// Age = 24;
// FirstName = "Daka";

// // Display variable name
// console.log(Age);
// console.log(FirstName, LastName, Height);

// // Display constant
// console.log(TEMP, NAME);

// // Fixed values: LITERALS vs variable values: variables
// let a_literal = "I'm a literal" // Here I'm a literal is a literal
// var a_variable;

// let a; // a is undefined here

// console.log(a_literal);
// console.log(a_variable);