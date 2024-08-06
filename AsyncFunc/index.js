// Synchronous 

// console.log("Start exe...");

// console.log("Code exe...");

// console.log("Execution completed...");


//Asynchronous

// console.log("Start exe...");

// setTimeout(() => {
//     console.log("Code exe...");
// }, 3000);

// console.log("Execution completed...");


// Problems with asynchronous

// let a=10
// let b=0

// setTimeout(() => {
//     b=10
// }, 2000);

// console.log(a+b); //output should be 20 instead of 10


//To solve the above problem use Promise

let a=10;
let b=0;

const waitingData= new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 2000);
})

waitingData.then((res)=>{
    console.log(a+res)
})
