// // Conditionals: If statements

// let customerIsBanned = false;
// let soup = "chicken noodle soup";
// let crackers = true;
// let reply;

// if (customerIsBanned) {
//     reply = "No soup for you!";
// } else if (soup && crackers) {
//     reply = `Here's your order of ${soup} & crackers`;
// } else if (soup) {
//     reply = `Here's your order of ${soup}`;
// } else {
//     reply = `Sorry, we're out of soup`;
// }

// console.log(reply)

// let testScore = 50;
// let collegeStudent = false;
// let grade;

// if (testScore >= 90) {
//     grade = "A";
// } else if (testScore >= 80) {
//     grade = "B";
// } else if (testScore >= 70) {
//     grade = "C";
// } else if (testScore >= 60) {
//     grade = "D";
// } else {
//     if (collegeStudent) {
//         grade = "U";
//     } else {
//         grade = "F";
//     }
// }

// console.log(grade)

let playerOne = "rock"
let computer = "rock"

if (playerOne === computer) {
    //tie game
    console.log("Tie game")
} else if (playerOne === "rock") {
    if (computer === "paper") {
        //computer wins
        console.log("Computer wins with paper")
    } else {
        //player one wins
        console.log("Player one wins with rock")
    }
} else if (playerOne === "paper") {
    if (computer === "scissors") {
        //computer wins
        console.log("Computer wins with scissors")
    } else {
        //player one wins
        console.log("Player one with with paper")
    }
} else {
    if (computer === "rock") {
        //computer wins
        console.log("Computer wins with rock")
    } else {
        //player one wins
        console.log("Player one wins with scissors")
    }
}