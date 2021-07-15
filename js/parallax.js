$(document).ready(function(){

	$(window).scroll(function(){
		var windowWidth = $(window).width();
		if(windowWidth>800){
			var scroll = $(window).scrollTop();
			$("header .textos").css({
				"transform": "translate(0px, " + scroll / 2 + "%)"
			});

				$(".acerca-de article").css({
				"transform": "translate(0px, -" + scroll / 4 + "%)"
			});
		}
	});

// DETENER PARALLAX DETENER PARALLAX DETENER PARALLAX--------------


	$(window).stop(function(){
		var windowWidth = $(window).width();
		if(windowWidth<800){
			$(".acerca-de article").css({
				"transform": "translate(0px,0px)"
			});

		}
	});


});