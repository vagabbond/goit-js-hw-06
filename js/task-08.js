const form = document.querySelector(".login-form");
const inputEmailEl = document.querySelector('.login-form input[name="email"]');
const inputPasswordEl = document.querySelector(
  '.login-form input[name="password"]'
);
const formDone = (event) => {
  event.preventDefault();
  if (inputEmailEl.value === "" || inputPasswordEl.value === "") {
    return alert("Не всі поля заповнені!");
  }
  const formEl = event.currentTarget.elements;

  const email = formEl.email.value;
  const password = formEl.password.value;
  const formData = {
    email,
    password,
  };
  console.log(formData);
  return formData;
};
form.addEventListener("submit", formDone);
