function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");

const onChangeColor = () => {
  const color = getRandomHexColor();
  spanEl.textContent = color;
  document.body.style.backgroundColor = color;
};

btnEl.addEventListener("click", onChangeColor);
