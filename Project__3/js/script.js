"use strict"
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}



let icon = document.querySelector(".dark-white");
icon.onclick = function(){
	document.body.classList.toggle("dark-theme");
}




$('.video').parent().click(function () {

	if($(this).children(".video").get(0).paused){       
   $(this).children(".video").get(0).play();   
  $(this).children(".playpause").fadeOut();
  
	  }else{      
   $(this).children(".video").get(0).pause();
  
	$(this).children(".playpause").fadeIn();
	  }
  });



  $('.converter__form').on('input', 'input[maxlength]', function(){
	if (this.value.length > this.maxLength){
		this.value = this.value.slice(0, this.maxLength);
	}
	this.value = this.value.replace(/[^0-9]/g, '');
});



function moneyConverter(valNum){
	document.getElementById("outputbit").innerHTML=valNum*10127.49;
}

///form///

document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('form');
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		
		let error = formValidate(form);
		if (error === 0) {
		} else {
			alert('Заповніть обовязкові поля');
			e.preventDefault();
		}

	}

	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.classList.contains('_email')) {
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
			} else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}
		}
		return error;
	}
	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}
	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}

});
//////////////////////



