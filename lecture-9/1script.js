let box = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#btn");

let newGameButton = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let message = document.querySelector("#msg");


let turnO = true;   //player X, player O

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

box.forEach((box) => {

    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turnO) {
        // player O    
        box.innerText = "O";
        turnO = false;
      }
      else{
        // player X
        box.innerText = "X";
        turnO = true;
      }
      box.disabled = true;

      checkWinner();
    });
});

const showWinner = (winner) => {
     msg.innerText = `Congratulations,Winner is ${winner}`;
     msgContainer.classList.remove("hide");
};

const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1Val = box[pattern[0]].innerText;
        let pos2Val = box[pattern[1]].innerText;
        let pos3Val = box[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner",pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};