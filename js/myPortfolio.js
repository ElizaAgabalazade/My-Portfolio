const menuBtn = document.querySelector(".menu");
const cancelBtn = document.querySelector(".cancel");
const dropdown = document.querySelector(".dropdown");

menuBtn.addEventListener("click", () => {
  dropdown.classList.add("active");
});

cancelBtn.addEventListener("click", () => {
  dropdown.classList.remove("active");
});