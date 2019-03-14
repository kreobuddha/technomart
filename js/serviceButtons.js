var services = document.querySelector(".services-list");

var serviceButton1 = document.querySelector(".service-switch-button-1");
var serviceButton2 = document.querySelector(".service-switch-button-2");
var serviceButton3 = document.querySelector(".service-switch-button-3");

var serviceItem1 = document.querySelector(".service-item-1");
var serviceItem2 = document.querySelector(".service-item-2");
var serviceItem3 = document.querySelector(".service-item-3");

serviceButton1.addEventListener("click", function(evt) {
	evt.preventDefault();

	if (!this.classList.contains("service-switch-item-current")) {
		serviceButton1.parentElement.classList.add("service-switch-item-current");
		serviceItem1.classList.add("service-item-current");

		serviceButton2.parentElement.classList.remove("service-switch-item-current");
		serviceItem2.classList.remove("service-item-current");

		serviceButton3.parentElement.classList.remove("service-switch-item-current");
		serviceItem3.classList.remove("service-item-current");
	}
});

serviceButton2.addEventListener("click", function(evt) {
	evt.preventDefault();

	if (!this.classList.contains("service-switch-item-current")) {
		serviceButton1.parentElement.classList.remove("service-switch-item-current");
		serviceItem1.classList.remove("service-item-current");

		serviceButton2.parentElement.classList.add("service-switch-item-current");
		serviceItem2.classList.add("service-item-current");

		serviceButton3.parentElement.classList.remove("service-switch-item-current");
		serviceItem3.classList.remove("service-item-current");
	}
});

serviceButton3.addEventListener("click", function(evt) {
	evt.preventDefault();

	if (!this.classList.contains("service-switch-item-current")) {
		serviceButton1.parentElement.classList.remove("service-switch-item-current");
		serviceItem1.classList.remove("service-item-current");

		serviceButton2.parentElement.classList.remove("service-switch-item-current");
		serviceItem2.classList.remove("service-item-current");

		serviceButton3.parentElement.classList.add("service-switch-item-current");
		serviceItem3.classList.add("service-item-current");
	}
});