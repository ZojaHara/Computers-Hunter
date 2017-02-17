;(function() {

		var form = document.querySelector("#myForm");
		var select = document.querySelectorAll(".select");

		var elemsTip = document.querySelector(".display__elems-tip");
		var elemsAlert = document.querySelector(".display__elems-alert");
		var elemsPhoto = document.querySelector(".display__elems-photo");

		var productLoader = document.querySelector(".product__loader");

		var arrowSelect = document.querySelector(".arrow__select");
		var chApplication = document.querySelector("#ch__application");



		function randomNumber(max, min) {
		 	return	Math.round(Math.random() * (max - min) + min);
		}


		var numbersArray = [0];

		function imgSource() {

			var theLast = numbersArray[numbersArray.length-1];
			console.log(theLast);

			var imageNumber = randomNumber(1,9);
			console.log(imageNumber);


			while(theLast===imageNumber) {
				imageNumber = randomNumber(1,9);
			}

			numbersArray.push(imageNumber);
			console.log(numbersArray);

			elemsPhoto.src = "pic/comp_" + imageNumber + ".jpg";

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
			arrowSelect.style.opacity = 0;
			productLoader.style.transition = "opacity 0s linear";
			opacity();
			displayBox();

		}, false);

		// scroll down to product
		var selectDistance = document.querySelector(".select__container").offsetTop;
		var productDistance = document.querySelector(".product__container").offsetTop;

		var contHeight = document.querySelector(".product__container").offsetHeight;
		var productHeight = document.querySelector(".product__loader").offsetHeight;


		var differance = productDistance - selectDistance;
		var plusPixels = (contHeight - productHeight)/4;
		var scrollValue = productDistance + plusPixels;
		console.log(plusPixels);
		
		form.addEventListener("click", function() {
			if(differance > 0) {
				window.scrollTo(0, scrollValue);
			}
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
