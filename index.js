const popup = document.querySelector(".container");

popup.style.display = "none";

document.addEventListener("mousemove", (e) => {
  if (e.clientY > 10) {
    popup.style.display = "block";
  }
});
