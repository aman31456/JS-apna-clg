function hello(){
    console.log("hello");
}
setTimeout(hello,2000);   // 2sec = 2000millisecond Timeout

//here we directly write function as an arrow function inside the setTimeout()
setTimeout(() => {
    console.log("hello");
},4000);

//here below we write multiple instructions , all these instructions execute asynchronously (means agar koi instruction time le rha hai execute hone me to uske baad wale inst. jaldi execute honjyange, aur uss instructin ka bhi execution parallely chalta rahega)
console.log("Aman");
console.log("Aman");

setTimeout(() => {
    console.log("hello");
},4000);

console.log("Aman");
console.log("Aman");

//Call back function 

function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,sumCallback){
      sumCallback(a,b);
}
calculator(2,3,sum);  // here we give sum function as a callback function

     //OR

function calculator(a,b,sumCallback){
    sumCallback(a,b);
}
calculator(1, 9, (a,b) => {
    console.log(a+b);
});