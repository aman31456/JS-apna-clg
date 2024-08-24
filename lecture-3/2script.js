let str = "ApnaCollege";
console.log("String length :",str.length);
console.log(str[3]);

let name = "AmanThakur";
console.log("String length :",name.length);

// Template literals
let sentence = `This is template literal`;
console.log(sentence);

let obj = {
    item: "pen",
    price: 10
};
console.log("The cost of", obj.item , "is", obj.price , "rupees");

//Now we write the above thing of console.log in a simplified way using template literals

let output = `The cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

let str2 = `This is a template literal ${1 + 2 + 3}`;
console.log(str2);

let abc = "apnacollege";
let abcStr = abc.toUpperCase();
console.log(abc);
console.log(abcStr);


let abc1 = "apnacollege";
abc1 = abc1.toUpperCase();
console.log(abc1);


// practice Question 3

let fullName = prompt("Enter your Full Name without space:");
let userName = `@${fullName}${fullName.length}`;
// let userName = "@" + fullName + fullName.length; 
console.log("User Name is :", userName);

















