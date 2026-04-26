// =========================
// 🔹 MOSTRAR DETALLE
// =========================
function ver(id) {

    document.getElementById("lista").style.display = "none";
    document.getElementById("detalle").style.display = "block";

    const productos = document.querySelectorAll(".info-candidato");

    productos.forEach(producto => {
        producto.style.display = "none";
    });

    document.getElementById("producto-" + id).style.display = "block";
}


// =========================
// 🔹 VOLVER
// =========================
function volver() {

    document.getElementById("lista").style.display = "block";
    document.getElementById("detalle").style.display = "none";

}


// =========================
// 🔥 ABRIR / CERRAR CHAT
// =========================
function toggleChat(){
    const chat = document.getElementById("chatbox");

    if(chat.style.display === "flex"){
        chat.style.display = "none";
    } else {
        chat.style.display = "flex";
    }
}


// =========================
// 🤖 CHATBOT PASTELERÍA
// =========================
const respuestas = {

    "hola":"Hola 👋 Bienvenido a Dulce Aroma ¿Qué deseas?",
    "menu":"Tenemos panes, tortas, donas y más",
    "pan":"Pan francés S/0.50",
    "croissant":"Croissant S/4",
    "torta":"Tortas desde S/30",
    "chocolate":"Torta de chocolate S/35",
    "fresa":"Torta de fresa S/40",
    "donas":"Donas S/3.50",
    "galletas":"Galletas S/5",
    "brownies":"Brownies S/7",
    "empanadas":"Empanadas S/6",
    "pizza":"Pizza S/18",
    "sandwich":"Sándwich S/10",
    "postres":"Tenemos gran variedad de postres 🍰",
    "precio":"Los precios están en la sección productos",
    "pedido":"Puedes pedir por la página o WhatsApp",
    "delivery":"Sí hacemos delivery 🚚",
    "envio":"Delivery disponible en Lima",
    "pago":"Aceptamos Yape, Plin, efectivo y tarjeta",
    "ubicacion":"Estamos en Lima, Perú",
    "horario":"Atendemos de 6am a 10pm",
    "promociones":"Revisa nuestras promociones 🔥",
    "ofertas":"Tenemos ofertas diarias",
    "cumpleaños":"Hacemos tortas personalizadas 🎂",
    "reserva":"Puedes reservar con anticipación",
    "tiempo":"Pedidos listos en 30 minutos",
    "contacto":"Puedes escribirnos por WhatsApp",
    "whatsapp":"Escanea el QR o usa el botón",
    "gracias":"Gracias por tu preferencia ❤️",
    "adios":"Hasta pronto 👋"

};


// =========================
// 💬 FUNCION CHAT
// =========================
document.addEventListener("DOMContentLoaded", function(){

    const input = document.getElementById("chatInput");
    const chat = document.getElementById("chatBody");

    if(input){

        input.addEventListener("keypress", function(e){

            if(e.key === "Enter"){

                let texto = input.value.toLowerCase().trim();

                let respuesta = respuestas[texto] || 
                "No entendí 🤔 intenta: pan, torta, horario, delivery";

                chat.innerHTML += `<p><b>Tú:</b> ${texto}</p>`;
                chat.innerHTML += `<p><b>Bot:</b> ${respuesta}</p>`;

                input.value = "";
                chat.scrollTop = chat.scrollHeight;

            }

        });

    }

});