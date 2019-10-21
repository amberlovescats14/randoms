// Method boolean tells us if the variable is true or false
const randomBoolean = Boolean(Math.round(Math.random()));

const randomPositiveNumber = Math.ceil(Math.random() * 100);
const randomNegativeNumber = Math.ceil(Math.random() * 100) * -1;

//! between 4-10
//! if you want to put a range
//!put the minimum outside the ()
//!Then subtract the max from the min IE: the amount of numbers between the max and the min, goes inside the ()
const betweenFourAndTen = Math.floor(Math.random() * 6) + 4
console.log(betweenFourAndTen)

const exampleObject = { "firstName": "Grace", "lastName": "Hopper"};
const exampleArray = ['Grace Hopper', 'Ada Lovelace', 'Margaret Hamilton', 'Sandi Metz'];
const exampleString = "Grace Hopper";

const randomIndex = Math.floor(Math.random() * exampleArray.length);

const randomString = exampleArray[randomIndex];





