const inputEl = document.querySelector("#name-input");

let nameEl = document.querySelector("#name-output");
console.log(inputEl.value);
const typeName = () => {
  return inputEl.value !== ""
    ? (nameEl.textContent = inputEl.value)
    : (nameEl.textContent = "Anonymous");
};
inputEl.addEventListener("input", typeName);
