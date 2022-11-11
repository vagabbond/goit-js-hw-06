const ulEl = document.querySelector("#categories");
const liEl = ulEl.querySelectorAll(".item");
console.log("Number of categories:", liEl.length);
const counter = liEl.forEach((el) => {
  console.log("Category:", el.firstElementChild.textContent);
  console.log("Elements:", el.getElementsByTagName("li").length);
});
