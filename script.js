var button = document.querySelector('button');

button.addEventListener('click', titleColor);

function titleColor() {
    document.querySelector('h1').style.color = 'green';
}