let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (item) {
    item.addEventListener("click", function (event) {

        const type_of_btn = event.currentTarget.classList;

        if (type_of_btn.contains('decrease')) {
            count--;
        }
        else if (type_of_btn.contains('reset')) {
            count = 0;
        }
        else {
            count++;
        }
        if(count>0)
        {
            value.style.color = "green";
        }
        else if(count<0)
        {
            value.style.color = "red";
        }
        else
        {
            value.style.color = "black";
        }
        value.textContent = count;
    })
})