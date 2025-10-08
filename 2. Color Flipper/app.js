const colors = ['red', 'blue', 'green', 'yellow'];

function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color;
}

// Store the generated random color in a variable
const randomColor = generateRandomColor();

const changeColorBtn = document.querySelector("#changeColor");

changeColorBtn.addEventListener("click", function() {
    document.body.style.backgroundColor = randomColor;
})



