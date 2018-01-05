var button = document.querySelector('button');
var para = document.querySelector('p');

button.addEventListener('click', titleColor);

function titleColor() {
    document.querySelector('h1').style.color = 'deepskyblue';
    para.style.color = 'deepskyblue';
}