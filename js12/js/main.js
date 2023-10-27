// loops

// let myNumber = 50;

// while(myNumber < 50) {
//     myNumber++; // functionally equivalent to myNumber += 1
//     console.log(myNumber);
// }


// do {
// // do/while loop will execute at least once compared to a while loop
// console.log(myNumber);
// } while (myNumber < 50);

// let myNmae = "Rob";

// for (let i = 0; i < myNmae.length; i++) {
//     console.log(myNmae.charAt(i));
// }

let myName = "Rob";
let counter = 0;
let myLetter;

while (true) {
    myLetter = myName[counter];
    console.log(myLetter)
    if (myLetter === "o") break;
    counter++;
}