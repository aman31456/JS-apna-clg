alert("Hello World");

let fullName = prompt("Enter the Name");  // prompt is use to take the input from the user
console.log(fullName);

//Practice Question 1

let num = prompt("Enter the Number:");
if (num % 5 === 0) {
    console.log(num, "is multiple of 5");
}
else {
    console.log(num, "is not multiple of 5");
}

//Practice Question 2

let score = prompt("Enter your Score");
if (score >= 80 && score <= 100) {
    console.log("A Grade");
}
else if (score >= 70 && score <= 79) {
    console.log("B Grade");
}
else if (score >= 60 && score <= 69) {
    console.log("C Grade");
}
else if (score >= 50 && score <= 59) {
    console.log("D Grade");
}
else {
    console.log("F Grade");
}