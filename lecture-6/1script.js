console.dir(document.body);
console.log(document.body);

// Practice Question 1

let asd = document.querySelector("h2");
console.dir(asd);
console.log(asd);
console.dir(asd.innerText);
asd.innerText = asd.innerText + " from Apna College students";

//Practice Question 2

let divs = document.querySelectorAll(".box");
console.log(divs);
console.log(divs[0], divs[1], divs[2]);

//method 1 of changing innertext of each div
divs[0].innerText = "new unique value 1";
divs[1].innerText = "new unique value 2";
divs[2].innerText = "new unique value 3";

//method 2 of changing innertext of each div using for-loop (simplest way)
let num = 1;
for(div of divs){
    div.innerText = `new unique value ${num}`;
    num++;
}