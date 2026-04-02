// --- Datos del Usuario ---

let nombreUsuario = prompt("¿Cual es tu nombre?");

// --- Si el usuario no decide compartir su nombre ---

if (!nombreUsuario) {
    nombreUsuario = "Jugador";
}

let entradaEdad = prompt("¿Cuantos años tienes?");

// --- Si el usuario no decidio compartir su edad ---

while (entradaEdad === null || entradaEdad === "") {
    alert(`Por favor ${nombreUsuario}, introduzca una edad para continuar.`);
    entradaEdad = prompt("Cuantos años tiene? (Es obligatorio)");

    if (entradaEdad === null || entradaEdad === "") {
        alert("❌ Acceso Denegado. Es imposible continuar sin registrar su edad.");
        location.reload();
        throw "Deteniendo ejecución";
    }
}

let edadUsuario = Number(entradaEdad);

// --- Verificacion de edad ---

if (edadUsuario >= 18) {
    alert(`¡Bienvenido ${nombreUsuario}! Puedes adivinar 🧠.`);
} else {
    alert(`Hola ${nombreUsuario}. Eres menor y todavia no puedes adivinar 👺.`);
    location.reload();
    throw "Menor de edad";
}

// --- Actualización de la Interfaz ---

document.getElementById('nombre-jugador').textContent = nombreUsuario;

// --- Cerebro del Programa ---

// --- Numero Secreto ---

let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

// --- Procesador de Intentos ---

function verificarIntento()  {
    const input = document.getElementById("inputNumero");
    const mensaje = document.getElementById("mensaje");
    const contadorTexto = document.getElementById("contador");
    const listaHistorica = document.getElementById("listaIntentos");
    const btnReiniciar = document.getElementById("btnReiniciar");

    let suposicion = Number(input.value);

    // --- Verificacion de que la caja no este vacia ---

    if (!input.value || isNaN(suposicion) || suposicion < 1 || suposicion > 100) {
        mensaje.textContent = "⚠️ Por favor, escribe un número entre 1 y 100.";
        return;
    }

    intentos++;
    contadorTexto.textContent = intentos;

    // --- Logica de comparacion ---

    if (suposicion === numeroSecreto) {
        mensaje.textContent = `🎉 ¡Felicidades ${nombreUsuario}! El número era ${numeroSecreto}.`;
        mensaje.style.color = "#2ecc71"; // Un toque de verde para la victoria
        btnReiniciar.style.display = "block"; // Mostramos el botón de reiniciar
        input.disabled = true; // Bloqueamos el input para que no siga escribiendo
    } else {
        const nuevoLi = document.createElement("li");
        
        if (suposicion < numeroSecreto) {
            mensaje.textContent = "📈 El número está por encima de tu intuición. Intenta de nuevo.";
            nuevoLi.textContent = `Intento ${intentos}: ${suposicion} (El número es mayor 🎯)`;
        } else {
            mensaje.textContent = "📉 El número está por debajo de tu intuición. Intenta de nuevo.";
            nuevoLi.textContent = `Intento ${intentos}: ${suposicion} (El número es menor 🎯)`;
        }
        
        listaHistorica.appendChild(nuevoLi);
    }
    
    input.value = "";
    input.focus();
}

// --- Eventos ---

document.getElementById("btnAdivinar").onclick = verificarIntento;

// --- Al hacer click al boton "Jugar de Nuevo" ---

document.getElementById("btnReiniciar").onclick = function() {
    location.reload();
};

// --- Funcion de la tecla "Enter" ---

document.getElementById("inputNumero").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        verificarIntento();
    }
});

const btnTema = document.getElementById("btnTema");

btnTema.onclick = function() {
    // Alternamos la clase en el BODY
    document.body.classList.toggle("dark-mode");
    
    // Verificamos si se aplicó para cambiar el emoji
    if (document.body.classList.contains("dark-mode")) {
        btnTema.textContent = "☀️";
        console.log("Modo oscuro activado");
    } else {
        btnTema.textContent = "🌙";
        console.log("Modo claro activado");
    }
};