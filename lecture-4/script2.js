// Array Methods

let foodItems = ["patato","litchi","orange","mango"];
foodItems.push("chips");
console.log(foodItems);

foodItems.pop();
let deletedItem = foodItems.pop();
console.log(foodItems);
console.log(deletedItem);


let color = ["yellow","green","black","blue"];
console.log(color);
console.log(color.toString());

// Practice Question 3
 
let companies = ["Bloombarg","Microsoft","Uber","Google","IBM","Netflix"];
//a
companies.shift();
console.log(companies);

let companies2 = ["Bloombarg","Microsoft","Uber","Google","IBM","Netflix"];
//b
companies2.splice(2,1,"ola");
console.log(companies2);


let companies3 = ["Bloombarg","Microsoft","Uber","Google","IBM","Netflix"];
//c
companies3.push("Amazon");
console.log(companies3);




