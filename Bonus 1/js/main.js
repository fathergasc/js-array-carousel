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
        
        if (activeImage == imagesList.length - 1) {
            activeImage = 0;
        } else {
            activeImage++;
        }
        imagesList[activeImage].classList.add('show');

        
    }
)

previousDom.addEventListener('click',
    function () {
        imagesList[activeImage].classList.remove('show');
        
        if (activeImage == 0) {
            activeImage = imagesList.length - 1;
        } else {
            activeImage--;
        }
        imagesList[activeImage].classList.add('show');

        
    }
)