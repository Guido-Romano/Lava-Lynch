"use strict";

//------------------------------------------------------------------------------------------------------

console.clear();
console.log("La consola ha sido limpiada.");


//  ANIMACION NAVBAR 

(function() {
  function ejecutarCodigo() {
    var navbar = document.querySelector(".navbar");
    var timeoutId; // Variable para almacenar el ID del temporizador

    function ocultarNavbar() {
      navbar.style.top = "-50px"; // Ocultar el navbar
    }

    if (window.innerWidth >= 1439) {
      var prevScrollPos = window.pageYOffset;
      var prevMouseX = 0;
      var prevMouseY = 0;

      function reiniciarTemporizador() {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(ocultarNavbar, 2000); // Ocultar el navbar después de 5 segundos de inactividad
      }

      window.onscroll = function() {
        reiniciarTemporizador();
        var currentScrollPos = window.pageYOffset;
        if (prevScrollPos > currentScrollPos) {
          navbar.style.top = "0";
        } else {
          navbar.style.top = "-50px";
        }
        prevScrollPos = currentScrollPos;
      };

      document.addEventListener("mousemove", function(event) {
        reiniciarTemporizador();
        var currentMouseX = event.clientX;
        var currentMouseY = event.clientY;
        if (currentMouseX !== prevMouseX || currentMouseY !== prevMouseY) {
          navbar.style.top = "0";
          prevMouseX = currentMouseX;
          prevMouseY = currentMouseY;
        }
      });
    } else {
      navbar.style.top = "0"; // Forzar el navbar a bajar cuando la resolución es menor a 1280px
      window.onscroll = null;
      document.removeEventListener("mousemove", function() {
        // Aquí va la función que manejaba el evento
      });
    }
  }

  // Verificar la resolución al cargar y redimensionar la ventana
  window.addEventListener('load', function() {
    if (window.innerWidth >= 1439) {
      ejecutarCodigo();
    }
  });
  window.addEventListener('resize', ejecutarCodigo);
})();


//------------------------------------------------------------------------------------------------------


// LOGO ANIMACION

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function () {
    var logo = document.querySelector(".logo");
    if (logo) {
      logo.classList.add("slide-left"); // Agrega la clase para iniciar la animación de desplazamiento
    }
  }, 2500); // Espera 2 segundos antes de ejecutar el desplazamiento
});

//------------------------------------------------------------------------------------------------------


// OCULTAR Y MOSTRAR TEXTO ANIMACION

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains('hidden')) {
        entry.target.classList.add('show'); // Agrega la clase 'show'
      }
    } else {
      if (entry.target.classList.contains('hidden')) {
        entry.target.classList.remove('show'); // Remueve la clase 'show'
      }
    }
  });
});

// Selecciona todos los elementos con la clase 'hidden'
const hiddenElements = document.querySelectorAll('.hidden'); 
hiddenElements.forEach((el) => observer.observe(el));


function animarTitulos() {
  var titulo1 = document.getElementById("titulo1");
  var titulo2 = document.getElementById("titulo2");
  var titulo3 = document.getElementById("titulo3");
  var titulo4 = document.getElementById("titulo4");

  // Oculta todos los títulos al principio
  titulo1.style.display = "none";
  titulo2.style.display = "none";
  titulo3.style.display = "none";
  titulo4.style.display = "none";

  // Después de que la opacidad de titulo1 sea 0, haz que titulo2 aparezca
  setTimeout(function() {
    titulo1.style.display = "block";
    setTimeout(function() {
      titulo1.style.display = "none";
      setTimeout(function() {
        titulo2.style.display = "block";
        setTimeout(function() {
          titulo2.style.display = "none";
          setTimeout(function() {
            titulo3.style.display = "block";
            setTimeout(function() {
              titulo3.style.display = "none";
              setTimeout(function() {
                titulo4.style.display = "block";
                setTimeout(function() {
                  titulo4.style.display = "none";
                  // Repite el ciclo
                  animarTitulos();
                }, 9000); // Tiempo para mostrar titulo4
              }, 1000); // Tiempo para ocultar titulo3
            }, 9000); // Tiempo para mostrar titulo3
          }, 1000); // Tiempo para ocultar titulo2
        }, 9000); // Tiempo para mostrar titulo2
      }, 1000); // Tiempo para ocultar titulo1
    }, 9000); // Tiempo para mostrar titulo1
  }, 1000); // Tiempo para ocultar titulo1 inicialmente
}
animarTitulos();


//--------------------------------------------------------------------------------


// VIBRACION DE ICONO DE WASAP 

const whatsappIcon = document.getElementById('whatsappIcon');

function vibrateIcon() {
  whatsappIcon.style.animation = 'vibrate 0.5s ease-in-out';
  setTimeout(() => {
    whatsappIcon.style.animation = '';
  }, 2000);
}

setInterval(vibrateIcon, 5000);

//------------------------------------------------------------------------------------------------------


// TRANSFORMACION DE MI BOTON

$(document).ready(function(){
  $(".enviar").click(function(event){
    event.preventDefault(); // Evita que el formulario se envíe normalmente
    var $boton = $(this);
    $boton.addClass('enviado'); // Agrega la clase 'enviado' al botón
    $boton.fadeOut('slow', function() {
        $boton.html('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00ff5e" class="bi bi-check2-square" viewBox="0 0 16 16" style="cursor: default;"><path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"/><path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"/></svg>').fadeIn('slow');
    });
    // Desactiva el hover
    $boton.css('pointer-events', 'none');
    // Aquí puedes agregar tu código para enviar el formulario mediante AJAX si lo deseas
  });
});

//  ALERTA DE FORMULARIO ENVIADO
document.addEventListener("DOMContentLoaded", function() {
  var botonEnviar = document.querySelector('.enviar');
  botonEnviar.addEventListener('click', function() {
    alert("Tu formulario se ha enviado correctamente");
  });
});



//REINICIO DE ANIMACION LAVAROPAS

function reiniciarAnimacion() {
  
  document.querySelectorAll('.image-2, .image-3, .image-4').forEach(img => {
    img.classList.add('animation-reset');
    void img.offsetWidth; 
    img.classList.remove('animation-reset');
  });
}

setInterval(reiniciarAnimacion, 40000);











