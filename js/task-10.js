function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumEl = document.querySelector("#controls input");
const btnCreateEl = document.querySelector("#controls button[data-create]");
const btnDestroyEl = document.querySelector("#controls button[data-destroy]");
const boxEl = document.querySelector("#boxes");
let width = 30;
let heigth = 30;
const tempArr = [];

const createBoxes = (amout) => {
  for (let i = 0; i < amout; i += 1) {
    const color = getRandomHexColor();
    const templ = document.createElement("div");
    templ.style.width = `${width}px`;
    templ.style.height = `${heigth}px`;
    templ.style.backgroundColor = color;
    width += 10;
    heigth += 10;
    tempArr.push(templ);
  }
  return tempArr;
};

inputNumEl.addEventListener("blur", () => {
  const amout = inputNumEl.value;
  createBoxes(amout);
});

const addDivEl = () => {
  boxEl.append(...tempArr);
};
btnCreateEl.addEventListener("click", addDivEl);
const destroyBoxes = () => {
  while (boxEl.firstChild) {
    boxEl.firstChild.remove();
  }
};
btnDestroyEl.addEventListener("click", destroyBoxes);
