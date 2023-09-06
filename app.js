const leftSide = document.querySelector(".left-side");
const middleSide = document.querySelector(".middle-side");
const rightSide = document.querySelector(".right-side");
const select = document.getElementById("select");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const reset = document.getElementById("reset");

let counter1 = 0;
let counter2 = 0;
// console.log(select.children[2].innerHTML);
let selectedValue;

select.addEventListener("change", (e) => {
  selectedValue = Number(e.target.value);
});

player1.addEventListener("click", () => {
  while (counter1 < selectedValue) {
    counter1++;
    if (counter1 == selectedValue) {
      leftSide.innerHTML = counter1;
      leftSide.style.color = "red";
      return;
    }
    leftSide.innerHTML = counter1;
    // leftSide.style.color = "r";
    return;
  }
  //   leftSide.innerHTML = counter1;
});

player2.addEventListener("click", () => {
  while (counter2 < selectedValue) {
    counter2++;
    if (counter2 == selectedValue) {
      rightSide.innerHTML = counter2;
      rightSide.style.color = "red";
      return;
    }
    rightSide.innerHTML = counter2;
    // leftSide.style.color = "r";
    return;
  }
  rightSide.innerHTML = counter2;
});

reset.addEventListener("click", () => {
  counter1 = 0;
  counter2 = 0;
  leftSide.innerHTML = counter1;
  rightSide.innerHTML = counter2;
});
