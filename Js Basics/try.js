var my_fruit = "kiwi";

function getFruit(fruit_name) {
    if (fruit_name == "Hazy") {
        console.log("Hazy it is!");
    } else {
        console.log("You're fruit is not good lol.");
    }
}

var fruit_obj = {
    1: 'Banana',
    "second": getFruit("Apple"),
    "special_fruit": my_fruit
};

console.log(fruit_obj[1]);
console.log(fruit_obj.second);
console.log(fruit_obj.special_fruit);