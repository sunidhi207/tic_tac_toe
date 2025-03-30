let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let para = document.querySelector(".demo");
let newBtn = document.querySelector(".newbtn");
let turnO = true;
let count = 0;
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO === true) {
      count++;
      box.innerText = "O";
      turnO = false;
    } else {
      count++;
      box.innerText = "X";
      turnO = true;
    }
    box.style.backgroundColor = "#EDE8DC";
    box.style.color = "black";
    box.style.fontSize = "50px";
    box.disabled = true;
    if (checkWinner()) {
      return;
    }
    if (count === 9) {
      para.innerText = "Draw";
    }
  });
});

let winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 5],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
function checkWinner() {
  for (let pattern of winPatterns) {
    if (
      boxes[pattern[0]].innerText != "" &&
      boxes[pattern[1]].innerText != "" &&
      boxes[pattern[2]].innerText != ""
    ) {
      if (
        boxes[pattern[0]].innerText === boxes[pattern[1]].innerText &&
        boxes[pattern[1]].innerText === boxes[pattern[2]].innerText &&
        boxes[pattern[0]].innerText === boxes[pattern[2]].innerText
      ) {
        showWinner(boxes[pattern[0]].innerText);
        return true;
      }
    }
  }
  return false;
}
function showWinner(s) {
  para.innerText = `Congratulations ${s} Won`;
  para.style.color = "black";
  boxes.forEach((box) => {
    box.disabled = true;
  });
  newBtn.style.visibility = "visible";
}
resetBtn.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
    turnO = true;
    count = 0;
    box.disabled = false;
    box.style.backgroundColor = "white";
    para.innerText = "";
    newBtn.style.visibility = "hidden";
  });
});
newBtn.addEventListener("click", () => {
  boxes.forEach((box) => {
    turnO = true;
    count = 0;
    box.innerText = "";
    box.disabled = false;
    box.style.backgroundColor = "white";
    para.innerText = "";
    newBtn.style.visibility = "hidden";
  });
});
