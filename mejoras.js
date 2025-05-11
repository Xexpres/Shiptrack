document.addEventListener("DOMContentLoaded", () => {
    // Agrega fecha al encabezado
    const header = document.querySelector("header");
    const now = new Date().toLocaleString("es-CO");
    const timeInfo = document.createElement("p");
    timeInfo.textContent = `Fecha actual: ${now}`;
    header.appendChild(timeInfo);

    // Mejora para el chatbot
    const chatbot = document.querySelector(".chatbot-button");
    if (chatbot) {
        chatbot.addEventListener("click", () => {
            alert("¿Necesitas ayuda?\n- ¿Qué es un BL?\n- ¿Cómo rastrear tu carga?\n- ¿Cómo usar el simulador?");
        });
    }
});
