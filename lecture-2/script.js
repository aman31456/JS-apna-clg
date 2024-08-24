let a = 12;
let b = 4;
let c = a + b;
console.log("a + b = ", c);
console.log("a =",a ," & b =",b);
console.log("a + b = ", a + b );
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);

// modulus operator
console.log("a % b =", a % b);

// exponentiation operator
console.log("a ** b =" , a ** b);

// unary operator

// increment (++)
let d = 4;
let e = 5;
d++; //d = d+1
e++; //e = e+1
console.log("d =", d ,"e =",e);

// decrement operator
d--;
e--;
console.log("d =", d , "e =", e)

//assignment operator
a += 4;   // a = a + 4
b += 3;   // b = b + 3
console.log("a =",a,"b =",b)

b **= 2;  // b = b ** 2
console.log("b =", b);

// comparison operator

console.log("a == b", a == b);
console.log("a != b", a != b);

let f = 3;
let g = "3";
console.log("f === g", f === g);
console.log("f !== g", f !== g);

// logical operator
let cond1 = a > b;
let cond2 = f == g;
console.log("cond1 && cond2 =" , cond1 && cond2);


//conditionals statements

//if statement
let age = 25;
let age2 = 13;
if(age > 18){
    console.log("You can vote");
}
if(age2 < 18){
    console.log("You cannot vote");
}

let mode = "dark";
let color;
if(mode === "dark"){
    color = "black";
}
if(mode === "light"){
    color = "white";
}
console.log(color);

// ternary operator
let price = 32;
price >= 20 ? console.log("costly") : console.log("cheaper");
