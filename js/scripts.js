const swiper = new Swiper('.spec__slider', {
	loop: true,
	speed: 1000,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	}
});


const swiperMenu = new Swiper('.menu__slider', {
	slidesPerView: 2,
	slidesPerColumn: 2,
	speed: 500,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	}
});




let tabs = document.querySelector('.tabs');
let menuSlider = document.querySelectorAll('.menu__slider-block');

tabs.addEventListener('click', function (e) {
	if (e.target.classList.contains('tabs__item')) {
		this.querySelectorAll('.tabs__item').forEach(item => item.classList.remove('active'));
		e.target.classList.add('active');
	}

	menuSlider.forEach(slider => slider.classList.remove('show'));
	let tabIndex = e.target.dataset.tab;
	let thisSwiper = document.querySelector(tabIndex);
	thisSwiper.classList.add('show');

});


window.addEventListener('load', overflowTabs);
window.addEventListener('resize', overflowTabs);

function overflowTabs() {
	let outerTabs = document.querySelector('.tabs__container');
	let innerTabs = document.querySelector('.tabs');
	if (innerTabs.offsetWidth > outerTabs.offsetWidth) {
		innerTabs.classList.add('overflow');
	} else {
		innerTabs.classList.remove('overflow');
	}
}


// Слайдер 2, для подвала

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
// конец второго слайдера