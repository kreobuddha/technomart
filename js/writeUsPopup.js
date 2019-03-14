var writeUsLink = document.querySelector(".js-write-us");

var writeUs = document.querySelector(".modal-write-us");
var writeUsClose = writeUs.querySelector(".modal-close");

var writeUsForm = writeUs.querySelector(".modal-write-us-form")
var writeUsName = writeUs.querySelector("[name=write-us-name]")
var writeUsMail = writeUs.querySelector("[name=write-us-mail]")
var writeUsTextarea = writeUs.querySelector("[name=write-us-letter]")


writeUsLink.addEventListener("click", function(evt) {
	evt.preventDefault();
	writeUs.classList.add("modal-show");

	writeUsName.focus();
});

writeUsClose.addEventListener("click", function(evt) {
	evt.preventDefault();
	writeUs.classList.remove("modal-show");
	writeUs.classList.remove("modal-error");
});

writeUsForm.addEventListener("submit", function(evt) {
	if(!writeUsName.value || !writeUsMail.value || !writeUsTextarea.value) {
		evt.preventDefault();
		writeUs.classList.remove("modal-error");
		writeUs.offsetWidth = writeUs.offsetWidth;
		writeUs.classList.add("modal-error");
		if (!writeUsName.value) {
			writeUsName.focus();
		} else if (!writeUsMail.value) {
			writeUsMail.focus();
		} else if (!writeUsTextarea.value) {
			writeUsTextarea.focus();
		}
	}
});

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		if (writeUs.classList.contains("modal-show")) {
			evt.preventDefault();
			writeUs.classList.remove("modal-show");
			writeUs.classList.remove("modal-error");
		}
	}
});