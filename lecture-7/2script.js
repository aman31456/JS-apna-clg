//Practice Question 1

let button = document.createElement("button");
console.log(button);
button.innerText = "click me";
button.style.backgroundColor = "red";
button.style.color = "white";
let body = document.querySelector("body");
body.prepend(button);

// Practice Question 2

let para = document.querySelector("p");
// para.setAttribute("class","para1");   
para.classList.add("para1");