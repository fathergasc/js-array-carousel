const images = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];

let firstImage = 0;

const sliderDom = document.querySelector('.slider');

for (let i = 0; i < images.length; i++) {
    sliderDom.innerHTML += `<div class="card"><img class="card-img" src="${images[i]}"></div>`
}

const imagesList = document.querySelectorAll('.card');
imagesList[firstImage].classList.add('show');

const nextDom = document.getElementsByClassName('next')
const previousDom = document.getElementsByClassName('previous')