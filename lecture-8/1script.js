let button = document.querySelector("#btn1");
button.onclick = () => {
     console.log("Aman Thakur");
     alert("Jai shree Ram");
};

let div = document.querySelector("#divid");
div.onmouseover = () => {
    console.log("you are inside div");
};

// event object e
button.onclick = (e) => {
    console.log(e);
    console.log(e.type);  // event ka type 
    console.log(e.target); // event ka target
    console.log(e.clientX,e.clientY);
};

// event listeners
button.addEventListener("click", (e) => {
    console.log("button aman was clicked - handler 1")
    // console.log(e);
    // console.log(e.type);
    // console.log(e.target);
});

button.addEventListener("click", () => {
    console.log("button aman was clicked - handler 2")
});

const handler3 =() => {
    console.log("button aman was clicked - handler 3")
};
button.addEventListener("click", handler3);

const  handler4 = () => {
    console.log("button aman was clicked - handler 4")
};
button.addEventListener("click", handler4);

// if we want to remove 3rd event handler
button.removeEventListener("click",handler3);
button.removeEventListener("click",handler4);