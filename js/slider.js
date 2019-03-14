var slider = document.querySelector(".slider-list");

var sliderSwitchButton1 = document.querySelector(".slider-switch-btn-1");
var sliderSwitchButton2 = document.querySelector(".slider-switch-btn-2");

var sliderIndicatorButton1 = document.querySelector(".slider-indicator-btn-1");
var sliderIndicatorButton2 = document.querySelector(".slider-indicator-btn-2");

var sliderItem1 = document.querySelector(".slider-item-1");
var sliderItem2 = document.querySelector(".slider-item-2");

sliderSwitchButton1.addEventListener("click", function(evt) {
	evt.preventDefault();

	sliderItem1.classList.toggle("slider-item-current");
	sliderIndicatorButton1.classList.toggle("slider-btn-current");

	sliderItem2.classList.toggle("slider-item-current");
	sliderIndicatorButton2.classList.toggle("slider-btn-current");
});

sliderSwitchButton2.addEventListener("click", function(evt) {
	evt.preventDefault();

	sliderItem1.classList.toggle("slider-item-current");
	sliderIndicatorButton1.classList.toggle("slider-btn-current");

	sliderItem2.classList.toggle("slider-item-current");
	sliderIndicatorButton2.classList.toggle("slider-btn-current");
});

sliderIndicatorButton1.addEventListener("click", function(evt) {
	evt.preventDefault();

	sliderItem1.classList.add("slider-item-current");
	sliderIndicatorButton1.classList.add("slider-btn-current");

	sliderItem2.classList.remove("slider-item-current");
	sliderIndicatorButton2.classList.remove("slider-btn-current");
});

sliderIndicatorButton2.addEventListener("click", function(evt) {
	evt.preventDefault();

	sliderItem1.classList.remove("slider-item-current");
	sliderIndicatorButton1.classList.remove("slider-btn-current");

	sliderItem2.classList.add("slider-item-current");
	sliderIndicatorButton2.classList.add("slider-btn-current");
});
