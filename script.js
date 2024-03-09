let boxes = document.querySelectorAll(".box");
let rstbtn = document.querySelector(".reset");
let msg = document.querySelector(".msg");
let msgcon = document.querySelector(".msg-con");
let newgame = document.querySelector(".newgame");
let turn0 = true;
let count = 0;

let winpat = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerHTML = "O";
            turn0 = false;
        }
        else {
            box.innerHTML = "X";
            turn0 = true;
        }
        box.disabled = true;
        count++;
        let winner = checkWinner();

        if (count === 9 &&  !checkWinner()) {
            clkcount();
        }
    });
});



const clkcount = () => {
    msg.innerText = `This game is a draw`;
    msgcon.classList.remove("hide");
    disable();
}


const checkWinner = () => {
    for (let pattern of winpat) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 == pos2 && pos2 == pos3) {
                showmsg(pos1);
            }
        }
    }
}

const showmsg = (winner) => {
    msg.innerText = `Congartulations, ${winner} is the winner`;
    msgcon.classList.remove("hide");
    disable();
}

const rstgame = () => {
    turn0 = true;
    enable();
}

const disable = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}


const enable = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        msgcon.classList.add("hide");
    }
}

rstbtn.addEventListener("click", rstgame);
newgame.addEventListener("click", rstgame);
