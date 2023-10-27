// User input

// let myBoolean = confirm("Ok === True\nCancel === False")

// console.log(myBoolean)

let myName = prompt("Please enter your name.");

if (myName) {
    console.log(myName.length);
    console.log(myName.trim().length);
    console.log(myName.trim());
    console.log(myName);
} else {
    console.log("You didn't enter your name")
}

// ?? is the nullish coalescing operator
// console.log(myName ?? "You didn't enter a name");