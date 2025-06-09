let inputBox = document.querySelector('.input-box');
let searchBtn = document.querySelector(".search");
let closeBtn = document.querySelector('#close');

console.log(closeBtn);
searchBtn.addEventListener('click', () => {
    inputBox.classList.add("open"); 
    document.getElementById("input").placeholder="Search..."
});

closeBtn.addEventListener('click', () => {
    inputBox.classList.remove("open");
    document.getElementById("input").placeholder=""
})
