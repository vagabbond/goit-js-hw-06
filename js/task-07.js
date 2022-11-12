const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
const textChange = () => {
  return (textEl.style.fontSize = `${inputEl.value}px`);
};
inputEl.addEventListener("input", textChange);
