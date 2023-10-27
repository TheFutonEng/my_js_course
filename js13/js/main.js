// functions

// function declaration syntax:

// function sum(num1, num2) {
//     if (num2 === undefined) {
//         return num1 + num1
//     }
//     return num1 + num2;
// }

// console.log(sum(2, 10))



// function getUserNameFromEmail(email) {
//     return email.slice(0,email.indexOf("@"));
// }

// console.log(getUserNameFromEmail("rob.mengert@gmail.com"))

// -------------------------------------------------

// Anonymous functions are a thing?  Basically there is no name for the function

// const getUserNameFromEmail = function (email) {
//     return email.slice(0, email.indexOf("@"));
// }

// console.log(getUserNameFromEmail("rob@rob.com"))

// -------------------------------------------------

// Arrow functions are also a thing!

// const getUserNameFromEmail = (email) => {
//     return email.slice(0, email.indexOf("@"));
// }

// console.log(getUserNameFromEmail("john@rob.com"))

const toProperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

console.log(toProperCase("dAve"))