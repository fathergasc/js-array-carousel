const images = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];

let activeImage = 0;

const sliderDom = document.querySelector('.slider');

for (let i = 0; i < images.length; i++) {
    sliderDom.innerHTML += `<div class="card"><img class="card-img" src="${images[i]}"></div>`
}

const imagesList = document.querySelectorAll('.card');
imagesList[activeImage].classList.add('show');

const nextDom = document.getElementById('next');
const previousDom = document.getElementById('previous');

nextDom.addEventListener('click',
    function () {
        imagesList[activeImage].classList.remove('show');
        activeImage++;
        imagesList[activeImage].classList.add('show');

        previousDom.classList.remove('d-none')

        if (activeImage == imagesList.length - 1) {
            nextDom.classList.add('d-none')
        }
    }
)

previousDom.addEventListener('click',
    function () {
        imagesList[activeImage].classList.remove('show');
        activeImage--;
        imagesList[activeImage].classList.add('show');

        nextDom.classList.remove('d-none')

        if (activeImage == 0) {
            previousDom.classList.add('d-none')
        }
    }
)