/*
  ===============================================
  CUESTIONARIO DINÁMICO INTERACTIVO
  ===============================================
  Archivo: cuestionario.js
  Descripción: Genera un quiz interactivo sobre fundamentos
                del dibujo con corrección automática
  ===============================================
*/

// ===== Base de datos de preguntas =====
// Array con preguntas de opción múltiple sobre contenido del sitio
const preguntas = [
  {
    enunciado: "Fundamentos — ¿Qué describe mejor la 'línea' en dibujo?",
    opciones: [
      "Un contorno rígido sin variaciones.",
      "La huella del movimiento: dirección, grosor y ritmo.",
      "Únicamente los bordes de una figura.",
      "Solo las sombras del dibujo."
    ],
    correcta: 1
  },
  {
    enunciado: "Fundamentos — El 'trazo' se relaciona principalmente con…",
    opciones: [
      "El color y la saturación.",
      "La presión, velocidad, textura y fluidez del movimiento.",
      "La resolución de impresión.",
      "El tamaño del papel."
    ],
    correcta: 1
  },
  {
    enunciado: "¿Para que sirve la perspectiva de dos puntos?",
    opciones: [
      "Se usa para medir proporciones del cuerpo humano en el dibujo.",
      "Sirve para representar objetos con una vista totalmente frontal sin profundidad.",
      "Sirve para representar objetos tridimensionales en un plano, mostrando profundidad y volumen mediante dos puntos de fuga.",
      "Se utiliza para mezclar colores y crear degradados en una pintura."
    ],
    correcta: 2
  },
  {
    enunciado: "¿A que hace referencia el 'método Loomis'?",
    opciones: ["Es un método para construir la cabeza y el cuerpo humano.", "Es una técnica de pintura al óleo basada en capas de color.", "Es un método de perspectiva utilizado para dibujar edificios.", "Es un sistema de mezcla de colores desarrollado para la ilustración digital."],
    correcta: 0
  },
  {
    enunciado: "Fundamentos — Según la práctica sugerida, ¿qué hábito es útil para calentar?",
    opciones: [
      "Dibujar en pantalla sin referencias.",
      "Planchas de líneas rectas y curvas unos minutos diarios.",
      "Usar solo lápices 8B.",
      "Evitar las líneas diagonales."
    ],
    correcta: 1
  }
];

// ===== Referencias a elementos del DOM =====
const $quiz = document.getElementById("quiz");
const $resultado = document.getElementById("resultado");

// ===== Función: Renderizar el cuestionario =====
// Genera dinámicamente el HTML de las preguntas y opciones
function render() {
  const html = preguntas.map((p, i) => {
    const name = `q${i}`;
    const radios = p.opciones.map((op, j) => `
      <label>
        <input type="radio" name="${name}" value="${j}">
        ${op}
      </label>
    `).join("<br>");
    return `
      <fieldset style="margin:12px 0; padding:10px;">
        <legend><strong>${i + 1}.</strong> ${p.enunciado}</legend>
        ${radios}
      </fieldset>
    `;
  }).join("");

  $quiz.innerHTML = html + `
    <p class="center">
      <button type="button" id="corregir">Corregir</button>
    </p>
  `;

  // Agregar evento al botón de corrección
  document.getElementById("corregir").addEventListener("click", corregir);
}

// ===== Función: Corregir respuestas =====
// Compara las respuestas seleccionadas con las correctas
function corregir() {
  let aciertos = 0;

  preguntas.forEach((p, i) => {
    const marcado = document.querySelector(`input[name="q${i}"]:checked`);
    if (marcado && Number(marcado.value) === p.correcta) aciertos++;
  });

  // Mostrar resultado al usuario
  $resultado.textContent = `Resultado: ${aciertos} / ${preguntas.length}`;
}

// ===== Inicialización =====
// Renderizar el cuestionario al cargar la página
render();
