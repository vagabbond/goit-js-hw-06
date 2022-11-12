const inputEl = document.querySelector("#validation-input");
const inputValidation = () => {
  inputEl.classList.remove("valid", "invalid");
  return inputEl.value.length <= inputEl.dataset.length
    ? inputEl.classList.add("valid")
    : inputEl.classList.add("invalid");
};
inputEl.addEventListener("blur", inputValidation);
