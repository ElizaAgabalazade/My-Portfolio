const button = document.getElementById("contactMe");
const dp_box = document.getElementById("dp_box");

button.addEventListener("click", () => {
    dp_box.classList.toggle("phone_css");
});
