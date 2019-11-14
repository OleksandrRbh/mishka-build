var link = document.querySelectorAll(".open-modal-btn");
var popup = document.querySelector(".modal-to-cart");
var overlay = document.querySelector(".overlay");
var form = popup.querySelector("form");

var link = document.querySelectorAll(".open-modal-btn");  // querySelectorAll ведет себя как массив

for (var i = 0; i < link.length; i++) {                   // с помощью цикла перебираем все кнопки с классом ".open-modal-btn"
  link[i].addEventListener('click', function(evt) {
    evt.preventDefault();	
	  popup.classList.add("modal-show");
  	overlay.classList.add("overlay--show");
  })
}

form.addEventListener("submit", function (evt) {    
     	evt.preventDefault();
      popup.classList.remove("modal-show");
      overlay.classList.remove("overlay--show");     
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        overlay.classList.remove("overlay--show");
      }
    }
});

overlay.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    overlay.classList.remove("overlay--show");
});
