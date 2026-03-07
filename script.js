const questions = [
  "¿Te gusta el reguetón?",
  "¿Has dejado el carrito del supermercado en el parking?",
  "¿Escuchas audios de WhatsApp en público?",
  "¿Te levantas del avión al aterrizar aunque la puerta esté cerrada?",
  "¿Has puesto música en altavoz en transporte público?",
  "¿Has dicho 'solo es un momento' al aparcar en doble fila?",
  "¿Usas 'responder a todos' en correos innecesarios?",
  "¿Lees spoilers?",
  "¿Ignoras los 'buenos días' en el ascensor?",
  "¿Has fingido no ver a alguien para no saludar?",
  "¿Te comes comida de otros diciendo 'solo una'?",
  "¿Te haces selfies poniendo morritos?",
  "¿Has visto una serie sin esperar a alguien?",
  "¿Dejas el microondas del trabajo sucio?",
  "¿Has abierto snacks ruidosamente en el cine?",
  "¿Miras el móvil mientras alguien habla contigo?",
  "¿Usas contraseñas tipo 123456?",
  "¿Mandas audios de WhatsApp de más de 3 minutos?",
  "¿Publicas en Instagram tu tostada de aguacate?",
  "¿Has dicho 'luego lo miro' sin intención de hacerlo?"
]

let score = 0
const answeredPoints = Array(questions.length).fill(null)

let selfieMorritos = false
let audiosLargos = false
let tostadaInstagram = false

const container = document.getElementById("questions")
const submitBtn = document.getElementById("submitBtn")

questions.forEach((q, i) => {
  const div = document.createElement("div")
  div.className = "question"

  const title = document.createElement("p")
  title.textContent = `${i + 1}. ${q}`

  const answers = document.createElement("div")
  answers.className = "answers"

  const options = [
    { label: "Sí", points: 10 },
    { label: "A veces", points: 5 },
    { label: "No", points: 0 }
  ]

  options.forEach(({ label, points }) => {
    const btn = document.createElement("button")
    btn.type = "button"
    btn.textContent = label
    btn.addEventListener("click", () => answer(i, points, btn))
    answers.appendChild(btn)
  })

  div.appendChild(title)
  div.appendChild(answers)
  container.appendChild(div)
})

function answer(id, points, buttonEl) {
  if (answeredPoints[id] !== null) {
    score -= answeredPoints[id]
  }

  score += points
  answeredPoints[id] = points

  // PECADOS ESPECIALES (sobrescriben el resultado final, sin mostrar ventanas emergentes)
  selfieMorritos = answeredPoints[11] === 10
  audiosLargos = answeredPoints[17] === 10
  tostadaInstagram = answeredPoints[18] === 10

  const questionEl = document.getElementsByClassName("question")[id]
  questionEl.classList.add("answered")

  const answerButtons = questionEl.querySelectorAll(".answers button")
  answerButtons.forEach((btn) => btn.classList.remove("selected"))
  buttonEl.classList.add("selected")

  updateSubmitState()
}

function updateSubmitState() {
  const answeredCount = answeredPoints.filter((p) => p !== null).length
  submitBtn.disabled = answeredCount !== questions.length
}

document.getElementById("startBtn").onclick = () => {
  document.getElementById("quiz").classList.remove("hidden")
  document.getElementById("startBtn").style.display = "none"
}

document.getElementById("submitBtn").onclick = showResult

function showResult() {
  if (answeredPoints.some((value) => value === null)) {
    alert("Responde todas las preguntas antes de calcular tu nivel de maldad 😈")
    return
  }

  document.getElementById("quiz").classList.add("hidden")
  document.getElementById("resultSection").classList.remove("hidden")

  let category = ""
  let penitence = ""

  if (selfieMorritos) {
    category = "📸 Narcisista Compulsivo"

    penitence = `
Durante 24 horas deberás:

- pasar un día entero sin usar la cámara frontal
- mirar un espejo solo 3 veces
- y dar un like sincero a la foto de otra persona sin compararte
`
  } else if (audiosLargos) {
    category = "🎤 Criminal Sonoro de WhatsApp"

    penitence = `
Penitencia obligatoria:

escuchar <strong>"Despacito"</strong> ralentizado y en bucle  
hasta que comprendas el sufrimiento que causas  
cuando envías audios interminables.
`
  } else if (tostadaInstagram) {
    category = "🥑 Ansiedad Crónica por los Likes"

    penitence = `
Deberás publicar una foto completamente aburrida  
(un vaso de agua o un calcetín)  
y resistir la tentación de mirar cuántos likes tiene durante 6 horas.
`
  } else {
    if (score <= 30) {
      category = "😇 Humano Decente"
      penitence = "Ninguna penitencia. Pero vigila… nadie es perfecto."
    } else if (score <= 60) {
      category = "😈 Pecador Leve"
      penitence = `Durante las próximas 24 horas deberás: 
      - decir “gracias” de forma exageradamente amable a tres desconocidos
      - dejar pasar a alguien en una cola 
      - y resistir la tentación de enviar un audio de WhatsApp.`
    } else if (score <= 100) {
      category = "👿 Villano Cotidiano"
      penitence = `Has sido condenado a: 
      - escuchar un audio de WhatsApp de 4 minutos sin acelerar
      - ver un vídeo vertical grabado en horizontal 
      - y leer los comentarios de una noticia de internet sin enfadarte.`
    } else if (score <= 150) {
      category = "🧨 Amenaza Social"
      penitence = `El tribunal considera que tu comportamiento requiere medidas correctivas. Deberás: 
      - pasar 12 horas sin mirar el móvil
      - decir “perdón” aunque no tengas la culpa 
      - y ver el final de una serie sin saltarte los créditos.`
    } else {
      category = "💀 Supervillano Absoluto"
      penitence = `Tu caso ha sido clasificado como grave para la convivencia humana. Penitencia obligatoria:
      - escuchar un audio de WhatsApp grabado mientras alguien camina por la calle con viento
      - intentar cancelar una suscripción online que no se puede cancelar
      - y esperar en un servicio de atención telefónica escuchando música de ascensor.`
    }
  }

  const resultText = `Tu puntuación de maldad es ${score}. <br><strong>${category}</strong>`
  const resultTextPlain = `Tu puntuación de maldad es ${score}. ${category}`

  document.getElementById("result").innerHTML = resultText
  document.getElementById("penitence").innerHTML = penitence

  setupShare(resultTextPlain, penitence)
}

function setupShare(result, penitence) {
  const cleanPenitence = penitence
    .replace(/<[^>]*>/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim()

  const text = `Mi resultado en el Test Científico de Maldad Humana:\n${result}\n\nPenitencia:\n${cleanPenitence}\n\nHaz el test aquí: https://vcastellar.github.io/testmaldad/`

  document.getElementById("shareWhatsapp").onclick = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`)
  }

  document.getElementById("shareFacebook").onclick = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=&quote=${encodeURIComponent(text)}`)
  }

  document.getElementById("shareInstagram").onclick = () => {
    alert("Instagram no permite compartir enlaces directamente. Copia tu resultado y súbelo a una historia 😈")
  }
}

updateSubmitState()
