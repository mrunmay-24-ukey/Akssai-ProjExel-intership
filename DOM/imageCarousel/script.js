const carouselImages = document.querySelector('.img-container');
const images = document.querySelectorAll('.img-container img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;

function updater() {
  carouselImages.style.transform = `translateX(${-index * 600}px)`;
}

nextBtn.addEventListener('click', () => {
  index++;
  if (index >= images.length) index = 0;
  updater();
});

prevBtn.addEventListener('click', () => {
  index--;
  if (index < 0) index = images.length - 1;
  updater();
});
