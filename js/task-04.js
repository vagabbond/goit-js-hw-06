const inputMinus = document.querySelector(
  '#counter button[data-action="decrement"]'
);
const inputPlus = document.querySelector(
  '#counter button[data-action="increment"]'
);
const counter = document.querySelector("#counter #value");
let counterValue = 0;

const inputIncrement = () => (counter.textContent = counterValue += 1);
const inputDecrement = () => (counter.textContent = counterValue -= 1);
inputPlus.addEventListener("click", inputIncrement);
inputMinus.addEventListener("click", inputDecrement);
