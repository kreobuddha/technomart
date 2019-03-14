var buyLink = document.querySelector(".js-modal-buy");

var inCart = document.querySelector(".modal-item-in-cart");
var inCartClose = inCart.querySelector(".modal-close");

var checkOut = inCart.querySelector(".modal-checkout")
var inCartContinue = inCart.querySelector(".modal-continue")



buyLink.addEventListener("click", function(evt) {
	evt.preventDefault();
	inCart.classList.add("modal-show");
});

inCartClose.addEventListener("click", function(evt) {
	evt.preventDefault();
	inCart.classList.remove("modal-show");
	inCart.classList.remove("modal-error");
});

inCartContinue.addEventListener("click", function(evt) {
	evt.preventDefault();
	inCart.classList.remove("modal-show");
	inCart.classList.remove("modal-error");
});


window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		if (inCart.classList.contains("modal-show")) {
			evt.preventDefault();
			inCart.classList.remove("modal-show");
			inCart.classList.remove("modal-error");
		}
	}
});