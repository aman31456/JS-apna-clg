let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let para = document.querySelector("p");
console.log(para.getAttribute("class"));
console.log(para.setAttribute("class","Aman"));

let div2 = document.querySelector(".box");
console.log(div2);
div2.style.backgroundColor = "red";
div2.style.fontSize = "20px";
div2.innerText = "hello";
console.log(div2.innerText);
// div2.style.visibility = "Hidden";  element hide ho jayega webpage se

// Insert Element ---
// 1) create element

let element = document.createElement("button");  // sirf ye likhane se button webpage par nhi dhikega
element.innerText = "click me";
console.dir(element);
console.log(element);

// 2) Add element 
let div3 = document.querySelector("div");  //first we access the element(div) in which we want to add our new element.
div3.append(element);           // add the new element in the starting 
// div3.prepend(element);       // add the new element in the end


let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi , I am new!</i>";
document.querySelector("body").prepend(newHeading);
// newHeading.remove();   to remove the heading from webpage