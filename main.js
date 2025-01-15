
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const popup = document.querySelector('.popup');
const popupImage = popup.querySelector('img');
const popupClose = document.querySelector('.popup-close');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentSlide = 0;

// Set active slide
function setActiveSlide(index) {
  const offset = -index * 100;
  document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
  currentSlide = index;
}

// Show popup
function showPopup(index) {
  popup.classList.add('active');
  popupImage.src = slides[index].querySelector('img').src;
  currentSlide = index;
}

// Close popup
function closePopup() {
  popup.classList.remove('active');
}

// Navigate popup
function navigatePopup(direction) {
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  popupImage.src = slides[currentSlide].querySelector('img').src;
}

// Event listeners
slides.forEach((slide, index) => {
  slide.addEventListener('click', () => showPopup(index));
});

dots.forEach(dot => {
  dot.addEventListener('click', () => setActiveSlide(dot.dataset.index));
});

popupClose.addEventListener('click', closePopup);
prevButton.addEventListener('click', () => navigatePopup(-1));
nextButton.addEventListener('click', () => navigatePopup(1));

// Initialize
setActiveSlide(0);

