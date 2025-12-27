// Cuando la página carga
document.addEventListener("DOMContentLoaded", () => {
  console.log("Sitio cargado correctamente");

  // Botón WhatsApp (si existe)
  const boton = document.querySelector(".btn");

  if (boton) {
    boton.addEventListener("click", () => {
      console.log("Click en botón de contacto");
    });
  }
});
