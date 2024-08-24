// print apna college 5 times

for (let i = 1; i <= 5; i++) {
    console.log("apna college");
}

//calculate sum of 1 to 5

let sum = 0;
for(let i = 1; i <= 5; i++){
    sum = sum + i;
}
console.log("Sum =", sum);

//calculate sum of 1 to n

let sum_ = 0;
let n = prompt("Enter the Number")
for(let i = 1; i <= n; i++){
    sum_ = sum_ + i;
}
console.log("Sum =", sum_);

// print the value of i 

for (let i = 1; i <= 5; i++) {
    console.log("i =", i);
}
let i = 9;
console.log(i);

// for-of loop 
// we use this loop to store the characters of strings in a variable

let str = "ApnaCollege"
for(let i of str){
    console.log("i =", i);
}

//we also use this loop to calculate the size of the string

let str1 = "ApnaCollege";
let size = 0;

for(let i of str1){
    // console.log("i =", i);
    size++;
}
console.log("String size =", size);

// for-in loop

let student = {
    name: "Aman Thakur",
    age: 20,
    cgpa: 7.5,
    isPass: true 
};
for(let i in student) {
    console.log("Key =",i, "Value =", student[i]);
}

// Practice Questions
//Q1 print all the even numbers from 0 to 100.

for(let i = 0; i <= 100; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

// for odd Numbers
for(let i = 0; i <= 100; i++){
    if(i % 2 !== 0){
        console.log(i);
    }
}

//Q2 Create a game where you start with any random game Number . Ask the user to keep guessing the game number until the user enters correct value.

let gameNum = 10;
let userNum = prompt("Guess the game number : ");
while(userNum != gameNum){
    userNum = prompt("You entered wrong number,Guess Again ");
}
alert("Congratulations, You entered right number");
// console.log("Congratulations, You entered right number");
