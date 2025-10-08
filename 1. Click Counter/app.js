const decrease = document.querySelector("#decrease");
const increase = document.querySelector("#increase");
const number = document.querySelector("#number");

let count = 0;

function updateDisplay() {
    number.textContent = count;
}

increase.addEventListener("click", function() {
    count++;
    updateDisplay();
})

decrease.addEventListener("click", function(){
    count--;
    updateDisplay();
})