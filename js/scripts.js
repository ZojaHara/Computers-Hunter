;(function() {

		var form = document.querySelector("#myForm");
		var select = document.querySelectorAll(".select");

		var elemsTip = document.querySelector(".display__elems-tip");
		var elemsAlert = document.querySelector(".display__elems-alert");
		var elemsPhoto = document.querySelector(".display__elems-photo");

		var productLoader = document.querySelector(".product__loader");

		function randomNumber(max, min) {
		 	return	Math.round(Math.random() * (max - min) + min);
		}



		function imgSource() {
			var imageNumber = randomNumber(1,9);
			// var numbersArray = [];
			// numbersArray.push(imageNumber);
			// console.log(numbersArray[0]);

			elemsPhoto.src = "../pictures/comp_" + imageNumber + ".jpg";

			// while(numbersArray[0]===imageNumber) {
			// 	imageNumber = randomNumber(1,9);
			// }

			console.log(imageNumber);
		}


			var elems = [];
			function selectValue() {
				for(var i=0;i<select.length;i++) {
					if(select[i].value==="") {
						elems.push(i);
					}
				}
				console.log(elems);
			}


			function displayBox() {
				selectValue();
				if(elems.length===0) {
					elemsAlert.classList.add("nonvisible");
					elemsTip.classList.add("nonvisible");
					elemsPhoto.classList.remove("nonvisible");
					imgSource();
				}else {
					elems = [];
					elemsAlert.classList.remove("nonvisible");
					elemsTip.classList.add("nonvisible");
					elemsPhoto.classList.add("nonvisible");
				}

			}

			function opacity() {
				productLoader.style.opacity = 1;

				setTimeout(function(){
						productLoader.style.cssText = "opacity:0;transition:opacity 1s linear";
				}, 2500);
			}

		form.addEventListener("submit", function(e){

			e.preventDefault();
			productLoader.style.transition = "opacity 0s linear";
			opacity();
			displayBox();


		}, false);


})();


(function($) {


	$(document).ready(function() {

		$('a').on('click', function(event) {

		var target = $( $(this).attr('href') );

			if( target.length ) {
				event.preventDefault();
				$('html, body').animate({
				scrollTop: target.offset().top
			}, 700);
		}
	});

});



	$(".menu__pic-hamburger").on("click", function() {

		$(this).animate({
			opacity:0
		}, 400, "linear");

		$(".menu__pic-arrow").delay(600).animate({
			opacity:1,
			zIndex:3
		},500,"linear");

			$(".menu__items").each(function() {
				$(this).animate({
					top:0
				},1000, "linear");
			});

			$(".menu__words-blue").each(function() {
				$(this).animate({
					fontSize:0
				},1000, "linear");
			});
	});

	$(".menu__pic-arrow").on("click", function() {

		$(this).animate({
			opacity:0,
			zIndex:1
		}, 400, "linear");

		$(".menu__pic-hamburger").delay(600).animate({
			opacity:1,
		},500,"linear");

			$(".menu__items-left").animate({
					top:"-75%"
			},1000, "linear");

			$(".menu__items-right").animate({
					top:"75%"
			},1000, "linear");

			$(".menu__words-blue").each(function() {
				$(this).animate({
					fontSize:"9vmin"
				},1000, "linear");
			});


	});

})(jQuery);
