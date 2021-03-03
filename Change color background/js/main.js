const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');

const colors_array = ['blue', 'orange', 'red', 'green', 'yellow', 'black', 'purple', '#00008B'];

colorBtn.addEventListener('click', changeBgColor);

function changeBgColor() {
    let random = Math.floor(Math.random() * colors_array.length);
    bodyBcg.style.backgroundColor = colors_array[random];
}