let boxes = document.querySelectorAll(".box");
let btn = document.querySelector("#resetBtn");
let msgcon = document.querySelector(".msgCon");
let hide = document.querySelector(".hide");
let msg = document.querySelector("#msg");
let newBtn = document.querySelector("#newBtn");

let turnO = true;

const winPatter = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],

];

const resetGame = () => {
    turnO = true;
    enableboxes();
    msgcon.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if (turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});


const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;

    }
}

const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations Winner is ${winner}`;
    msgcon.classList.remove("hide");
    disableboxes();
}

const checkWinner = () => {
    for (let pattern of winPatter) {
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);

        let posVal1 = boxes[pattern[0]].innerText
        let posVal2 = boxes[pattern[1]].innerText
        let posVal3 = boxes[pattern[2]].innerText;

        if (posVal1 != "" && posVal2 != "" && posVal3 != "") {
            if (posVal1 === posVal2 && posVal2 === posVal3) {

                showWinner(posVal1);
            }
        }

    }
};

newBtn.addEventListener("click", resetGame)
resetBtn.addEventListener("click", resetGame)

