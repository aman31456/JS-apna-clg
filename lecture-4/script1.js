// ARRAYS

let marks = [95, 45, 65, 97];
console.log(marks);
console.log(marks.length); // here length is the property , diff. b/w property and method is that property returns us the some value and method bo jo hume koi kam karke de
typeof marks;

console.log(marks[0]);  // we can access the value of array by it index no.

marks[2] = 18; // we can also change the value of array by its index no.
console.log(marks[2]);

// looping on the arrays 
let names = ["Aman","Yash","Nikhil","Khushi"];

for(let i = 0; i < names.length; i++){
        console.log(names[i]);
}
//we can also use for-of loop to print the values of array

let cities = ["Gwalior","Delhi","Agra","Pune"];
for(let city of cities){
    console.log(city);
}
for(let city of cities){
    console.log(city.toUpperCase());  // to print name of cities in uppercase
}

// Practice Question 1

let marks1 = [85,97,44,37,76,60];

let sum = 0;
for(let i = 0; i < marks1.length; i++){
    sum = sum + marks1[i];
}

//  for (let val of marks1){
//     sum = sum + val;   // sum += val; 
// }

let avg = sum / marks.length;
console.log(`average marks of class = ${avg}`);

//Practice Question 2

let items = [250,645,300,900,50];

for(let i = 0; i < items.length; i++){
    console.log(`Value at index ${i} = ${items[i]}`);
    let offer = items[i] / 10;
    items[i] = items[i] - offer;
    console.log(`Value after offer = ${items[i]}`);
}
    console.log(items);
    