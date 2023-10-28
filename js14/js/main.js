// // var, let, const

// // use const for constants, values that you know are not going to change.  use let when you know a value is going to be changed

// // legacy code
// // const x = 1;
// // const x = 2;
// // console.log(x)


// // This leads to a discussion of scope...

// // global scope

// var x = 1;
// let y = 2;
// const z = 3;

// // local scope

// {
//     let y =4;
//     console.log(y)
// }

// // local scope
// function myfunc() {
//     const z = 5;

//     {
//         let y = 4;
//         console.log(y)
//     }
// }

// myfunc()

// the global scope is available to everything

// global scope
var x = 1; // function scoped
let y = 2; // block scoped
const z = 3;

console.log(`global:" ${x}`);
console.log(`global:" ${y}`);
console.log(`global:" ${z}`);

function myFunc () {
    var x = 10;
    const z = 5;

    {
        var x = 11; // function scoped
        const z = 6; //block scoped
        console.log(`block:" ${x}`);
        console.log(`block:" ${y}`);
        console.log(`block:" ${z}`);
    }

    console.log(`function:" ${x}`);
    console.log(`function:" ${y}`);
    console.log(`function:" ${z}`);
}

myFunc();