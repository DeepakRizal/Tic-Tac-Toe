const reset = document.getElementById("reset");
const boxText = document.querySelectorAll(".boxText");
const line = document.querySelector(".line");
const info = document.querySelector(".info");
let turn = "X";
let isGameOver = false;

//function to change the turn
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

//Function to check for win
const checkWin = () => {
  let boxtexts = boxText;
  let wins = [
    [0, 1, 2, 5, 5, 0],
    [3, 4, 5, 5, 15, 0],
    [6, 7, 8, 5, 25, 0],
    [0, 3, 6, -5, 15, 90],
    [1, 4, 7, 5, 15, 90],
    [2, 5, 8, 15, 15, 90],
    [0, 4, 8, 5, 15, 45],
    [2, 4, 6, 5, 15, 135],
  ];
  wins.forEach((el) => {
    if (
      boxtexts[el[0]].innerText === boxtexts[el[1]].innerText &&
      boxtexts[el[2]].innerText === boxtexts[el[1]].innerText &&
      boxtexts[el[0]].innerText !== ""
    ) {
      info.innerText = boxtexts[el[0]].innerText + " Won";
      isGameOver === true;
      line.style.width = "20vw";
      line.style.transform = `translate(${el[3]}vw,${el[4]}vw) rotate(${el[5]}deg)`;
    }
  });
};

//Game logic
let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach((el) => {
  let boxtext = el.querySelector(".boxText");
  el.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      checkWin();
      if (!isGameOver) {
        info.innerText = "Turn for  " + turn;
      }
    }
  });
});

// Add onclick listener to reset button
reset.addEventListener("click", () => {
  let boxtexts = boxText;
  Array.from(boxtexts).forEach((el) => {
    el.innerText = "";
  });
  turn = "X";
  isGameOver = false;
  info.innerText = "Turn for  " + turn;
  line.style.transform = "none";
  line.style.width = "0";
});
