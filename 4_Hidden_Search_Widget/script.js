const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  search.classList.toggle("active"); // toggle() method is used to add a class if it doesn't exist, or remove it if it does exist. Essentially, toggle() switches the state of a CSS class on or off.
  input.focus();
});
