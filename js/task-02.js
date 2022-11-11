const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ulEl = document.querySelector("#ingredients");
const addIngredients = ingredients.map((el) => {
  const tempo = document.createElement("li");
  tempo.classList.add("item");
  tempo.textContent = el;
  return tempo;
});
ulEl.append(...addIngredients);
