$(document).ready(function(){

// MENU MENU MENU MENU------------------
	
	
	$(".menu a").each(function(index, elemento){
		$(this).css({
			"top": "-300px"
		});

		$(this).animate({top : 0}, 2000 + (index * 500));
	});



// HEADER Hielo y Carbon-- HEADER Hielo y Carbon-- HEADER Hielo y Carbon--

	if( $(window).width() > 800 ){
		$("header .textos").css({
		
		opacity: 0,
		marginTop: 0, 
		});

		$("header .textos").animate({
			opacity: 1,
			marginTop: "-52px"
		}, 1500);

	};

//  ELEMENTOS DEL MENU ELEMENTOS DEL MENU ELEMENTOS DEL MENU-------

	var acercaDe = $("#acerca-de").offset().top,
		menu = $("#menu").offset().top,
		galeria = $("#galeria").offset().top,
		ubicacion = $("#ubicacion").offset().top;


//QUIENES SOMOS QUIENES SOMOS QUIENES SOMOS---------------

		$("#btn-acerca-de").on("click", function(e){
			e.preventDefault();
			$("html, body").animate({
				scrollTop: acercaDe - 300
			}, 500);
	});


// HIELO Y CARBON HIELO Y CARBON HIELO Y CARBON HIELO Y CARBON-----------------

		$("#btn-menu").on("click", function(e){
			e.preventDefault();
			$("html, body").animate({
				scrollTop: menu + 500
			}, 500);
	});


//  GALERIA GALERIA GALERIA GALERIA GALERIA-------------------


		$("#btn-galeria").on("click", function(e){
			e.preventDefault();
			$("html, body").animate({
				scrollTop: galeria - 90
			}, 500);
	});


//CONTACTO CONTACTO CONTACTO CONTACTO CONTACTO-------------------------

		$("#btn-ubicacion").on("click", function(e){
			e.preventDefault();
			$("html, body").animate({
				scrollTop: ubicacion + 20
			}, 500);
	});



// QUERIES BOTONES 800	 QUERIES BOTONES  QUERIES BOTONES------------

	if( $(window).width() < 800 ){
	
		$("#btn-ubicacion").on("click", function(e){
			e.preventDefault();
			$("html, body").animate({
				scrollTop: ubicacion +100
			}, 500);
		});
	}

	if( $(window).width() < 800 ){
	
		$("#btn-galeria").on("click", function(e){
			e.preventDefault();
			$("html, body").animate({
				scrollTop: galeria - 100
			}, 500);
	});
	}


	if( $(window).width() < 800 ){
	
		$("#btn-menu").on("click", function(e){
			e.preventDefault();
			$("html, body").animate({
				scrollTop: menu + 600
			}, 500);
	});
	}









// FORMULARIO FORMULARIO FORMULARIO FORMULARIO FORMULARIO------------


	(function(){

		var formulario = document.getElementById("formulario"),
			nombre = formulario.nombre,
			correo = formulario.correo,
			mensaje = formulario.mensaje,
			terminos = formulario.terminos,
			error = document.getElementById("error");
		
		function validarNombre(e){
			if(nombre.value == "" || nombre.value == null){
				console.log("Por favor completa el nombre");
				error.style.display = "block";
				error.innerHTML = error.innerHTML + "<li>Por Favor Completa el Nombre</li>";
				e.preventDefault();
			}
		}
		
		
		function validarCorreo(e){
			if(correo.value == "" || correo.value == null){
				console.log("Por favor completa el correo");
				error.style.display = "block";
				error.innerHTML = error.innerHTML + "<li>Por Favor Completa el Correo</li>";
				e.preventDefault();
			}
		}
		
		
		
		function validarMensaje(e){
		if(mensaje.value == "" || mensaje.value == null){
				console.log("Por favor completa el mensaje");
				error.style.display = "block";
				error.innerHTML = error.innerHTML + "<li>Por Favor Completa el Mensaje</li>";
				e.preventDefault();
			}
		
		}
		
		
		 function validarTerminos(e){
			 if(terminos.checked == false) {
				 console.log("Por favor acepta los terminos");
				 error.style.display = "block";
				error.innerHTML = error.innerHTML + "<li>Por Favor acepta los Terminos</li>";
				e.preventDefault();
			 }
		 }
		
		
		
		
		function validarFormulario(e){
			error.innerHTML = "";
			validarNombre(e);
			validarCorreo(e);
			validarMensaje(e);
			validarTerminos(e);
		}
		
		
		  formulario.addEventListener("submit", validarFormulario);
		  }())
});






