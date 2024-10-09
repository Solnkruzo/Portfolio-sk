document.addEventListener("DOMContentLoaded", function() {
  const scrollUpBtn = document.getElementById("scrollUpBtn");

  // Mostrar el botón cuando el usuario haya hecho scroll hacia abajo
  window.addEventListener("scroll", function() {
      if (window.pageYOffset > 200) { // Muestra el botón al bajar 200px
          scrollUpBtn.style.display = "block";
      } else {
          scrollUpBtn.style.display = "none";
      }
  });

  // Acción al hacer clic en el botón: vuelve arriba
  scrollUpBtn.addEventListener("click", function() {
      window.scrollTo({
          top: 0,
          behavior: "smooth" // Scroll suave
      });
  });
});


document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const submitBtn = document.getElementById("submitBtn");
    submitBtn.classList.add("btn-loading");
  
    // Simular envío del formulario (aquí iría la lógica real de envío)
    setTimeout(function() {
      // Reiniciar botón y formulario después de "enviar"
      submitBtn.classList.remove("btn-loading");
      alert("¡Formulario enviado con éxito!");
  
      // Aquí puedes resetear el formulario si es necesario
      document.getElementById("contactForm").reset();
    }, 2000);
  });
  
  