const form = document.querySelector(".login-form");
const inputEmailEl = document.querySelector('.login-form input[name="email"]');
const inputPasswordEl = document.querySelector(
  '.login-form input[name="password"]'
);
const formDone = (event) => {
  event.preventDefault();
  if (inputEmailEl.value === "" || inputPasswordEl.value === "") {
    alert("Не всі поля заповнені!");
  }
  const formData = new FormData(event.currentTarget);
  const formDataLog = formData.forEach((name, key) => {
    console.log(key, ":", name);
  });
  return formData;
};
form.addEventListener("submit", formDone);
