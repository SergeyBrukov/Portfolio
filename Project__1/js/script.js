
let ready = (callback) => {
	if (document.readyState != "loading") callback();
	else document.addEventListener("DOMContentLoaded", callback);
}


ready(() => {

	//MENU
		let iconMenu=document.querySelector(".icon-menu");
		let body=document.querySelector("body");
		let menuBody=document.querySelector(".menu__body");
	iconMenu.addEventListener("click", (e) => {
		iconMenu.classList.toggle("active");
		body.classList.toggle("lock");
		menuBody.classList.toggle("active");
	});

});

