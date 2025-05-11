document.addEventListener("DOMContentLoaded", () => {
    // 1. Mostrar fecha actual en el encabezado
    const header = document.querySelector("header");
    const p = document.createElement("p");
    p.textContent = "Fecha actual: " + new Date().toLocaleDateString("es-CO");
    header.appendChild(p);

    // 2. Chatbot mejorado
    const chatbot = document.querySelector(".chatbot-button");
    if (chatbot) {
        chatbot.addEventListener("click", () => {
            alert("¿En qué puedo ayudarte?\n- ¿Qué es un BL?\n- ¿Cómo rastrear tu carga?\n- ¿Cómo usar el simulador?");
        });
    }

    // 3. Función mejorada del simulador
    window.simularCarga = function () {
        const origen = document.getElementById("origen").value.trim();
        const destino = document.getElementById("destino").value.trim();
        const peso = parseFloat(document.getElementById("peso").value.trim());
        const res = document.getElementById("simuladorResultado");

        if (!origen || !destino || isNaN(peso) || peso <= 0) {
            res.innerHTML = "Por favor ingrese datos válidos.";
            return;
        }

        // Tarifas estimadas por ruta (USD por kg)
        const tarifas = {
            "Shanghai-Buenaventura": 0.45,
            "Qingdao-Busan-Buenaventura": 0.50,
            "Busan-Buenaventura": 0.42,
            "Shanghai-Singapur": 0.30
        };

        const claveRuta = `${origen}-${destino}`;
        const tarifa = tarifas[claveRuta];

        if (!tarifa) {
            res.innerHTML = `Ruta de ${origen} a ${destino} no registrada.<br>Consulta con soporte para una cotización manual.`;
            return;
        }

        const tiempoEstimado = 12 + Math.floor(Math.random() * 5);
        const costo = tarifa * peso;

        res.innerHTML = `
            <strong>Resultado de simulación:</strong><br>
            De <b>${origen}</b> a <b>${destino}</b><br>
            Peso estimado: <b>${peso} kg</b><br>
            Tarifa por kg: <b>$${tarifa.toFixed(2)} USD</b><br>
            <u><b>Costo total estimado: $${costo.toFixed(2)} USD</b></u><br>
            Tiempo estimado de tránsito: <b>${tiempoEstimado} días</b>
        `;
    };
});
