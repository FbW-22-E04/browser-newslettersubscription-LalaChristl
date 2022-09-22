// const body = document.querySelector('body')
// const button = document.querySelector("button");
const popup = document.querySelector(".container");
// const close = document.querySelector(".pop-up-close");

popup.style.display = 'none';

// button.addEventListener("click", () => {
//   popup.style.display = "block";
// });

// close.addEventListener("click", ()=> {
//     popup.style.display ="none"
// })

// popup.addEventListener("click", () => {
//     popup.style.display="none";
// })





document.addEventListener('mousemove', (e) => {
    if(e.clientY >10) {
        popup.style.display = 'block';
    }
})