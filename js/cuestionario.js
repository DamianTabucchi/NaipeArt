// Preguntas basadas en tus páginas (Fundamentos, Tutoriales, Recursos)
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
    enunciado: "Tutoriales — ¿Cuál video trata sobre perspectiva de dos puntos?",
    opciones: [
      "6 hábitos para mejorar la calidad de tus líneas.",
      "Perspectiva de dos puntos (Dibujo simplificado).",
      "Dibuja cabezas rápidamente con el método de Loomis.",
      "Sombras y valores tonales avanzados."
    ],
    correcta: 1
  },
  {
    enunciado: "Recursos — ¿Cuál de los siguientes autores está asociado al 'método Loomis'?",
    opciones: ["Andrew Loomis", "Betty Edwards", "Bert Dodson", "Joseph Albers"],
    correcta: 0
  },
  {
    enunciado: "Fundamentos — Según la práctica sugerida, ¿qué hábito es útil para calentar?",
    opciones: [
      "Planchas de líneas rectas y curvas unos minutos diarios.",
      "Usar solo lápices 8B.",
      "Evitar las líneas diagonales.",
      "Dibujar en pantalla sin referencias."
    ],
    correcta: 0
  }
];

// Render simple
const $quiz = document.getElementById("quiz");
const $resultado = document.getElementById("resultado");

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

  document.getElementById("corregir").addEventListener("click", corregir);
}

function corregir() {
  let aciertos = 0;

  preguntas.forEach((p, i) => {
    const marcado = document.querySelector(`input[name="q${i}"]:checked`);
    if (marcado && Number(marcado.value) === p.correcta) aciertos++;
  });

  $resultado.textContent = `Resultado: ${aciertos} / ${preguntas.length}`;
}

render();
