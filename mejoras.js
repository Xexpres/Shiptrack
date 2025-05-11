document.addEventListener("DOMContentLoaded", () => {
  // Mostrar fecha actual en el encabezado
  const header = document.querySelector("header");
  const p = document.createElement("p");
  p.textContent = "Fecha actual: " + new Date().toLocaleDateString("es-CO");
  header.appendChild(p);

  // Chatbot mejorado
  document.querySelector(".chatbot-button").addEventListener("click", () => {
    alert("¿En qué puedo ayudarte?\n- ¿Qué es un BL?\n- ¿Cómo rastrear tu carga?\n- ¿Cómo usar el simulador?");
  });
});
