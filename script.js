// --- Datos del Usuario ---
let nombreUsuario = "";

// --- Pantalla de Inicio ---
document.getElementById("btnJugar").onclick = function () {
  const inputNombre = document.getElementById("inputNombre").value.trim();
  const inputEdad = document.getElementById("inputEdad").value.trim();
  const errorRegistro = document.getElementById("error-registro");

  // --- Validacion de edad ---
  if (!inputEdad) {
    errorRegistro.textContent = "⚠️ Por favor, ingresa tu edad para continuar.";
    errorRegistro.classList.remove("hidden");
    return;
  }

  const edadUsuario = Number(inputEdad);

  if (edadUsuario < 5) {
    errorRegistro.textContent =
      "❌ Lo sentimos, debes tener al menos 5 años para jugar.";
    errorRegistro.classList.remove("hidden");
    return;
  }

  // --- Nombre opcional ---
  nombreUsuario = inputNombre || "Jugador";

  // --- Actualizar interfaz ---
  document.getElementById("nombre-jugador").textContent = nombreUsuario;

  // --- Cambiar de vista ---
  document.getElementById("pantalla-inicio").classList.add("hidden");
  document.getElementById("game-container").classList.remove("hidden");
};

// --- Cerebro del Programa ---

// --- Numero Secreto ---

let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

// --- Procesador de Intentos ---

function verificarIntento() {
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
    mensaje.style.color = "#2ecc71";
    btnReiniciar.style.display = "block";
    input.disabled = true;
  } else {
    const nuevoLi = document.createElement("li");

    if (suposicion < numeroSecreto) {
      mensaje.textContent =
        "📈 El número está por encima de tu intuición. Intenta de nuevo.";
      nuevoLi.textContent = `Intento ${intentos}: ${suposicion} (El número es mayor 🎯)`;
    } else {
      mensaje.textContent =
        "📉 El número está por debajo de tu intuición. Intenta de nuevo.";
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

document.getElementById("btnReiniciar").onclick = function () {
  location.reload();
};

// --- Funcion de la tecla "Enter" ---

document
  .getElementById("inputNumero")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      verificarIntento();
    }
  });

const btnTema = document.getElementById("btnTema");

btnTema.onclick = function () {
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