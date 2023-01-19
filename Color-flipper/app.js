const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");


btn.addEventListener("click", function () {

    const randomNumber = getRandom_index();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});


function getRandom_index() {

    return Math.floor(Math.random() * colors.length);

}
