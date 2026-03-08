// Banco completo de preguntas del test satírico.
const QUESTION_BANK = [
  "¿Has fingido no ver a alguien para evitar saludarlo?",
  "¿Has cruzado la calle para evitar una conversación incómoda?",
  "¿Has dicho “te aviso” sabiendo que nunca avisarías?",
  "¿Has devuelto una llamada solo porque necesitabas algo?",
  "¿Has respondido “qué pena” sin sentir ninguna pena?",
  "¿Has dado un consejo que tú mismo no seguirías?",
  "¿Has asentido fingiendo interés en una historia aburrida?",
  "¿Has interrumpido a alguien para contar tu propia historia?",
  "¿Has dicho “no tengo hambre” y luego comido del plato de otro?",
  "¿Has cogido la última porción diciendo “si nadie la quiere…”?",
  "¿Has criticado algo que en realidad te gusta?",
  "¿Has dicho “no me gusta la polémica” justo antes de crear una?",
  "¿Has leído un mensaje y tardado en responder para parecer ocupado?",
  "¿Has dejado que alguien se equivoque sin corregirlo?",
  "¿Has corregido a alguien solo para demostrar que tenías razón?",
  "¿Has hecho una pregunta cuya respuesta ya sabías?",
  "¿Has fingido sorpresa ante algo que ya sabías?",
  "¿Has contado un secreto que te pidieron no contar?",
  "¿Has exagerado una historia para que parezca mejor?",
  "¿Has hecho un comentario sarcástico que alguien no entendió?",
  "¿Has culpado al tráfico aunque saliste tarde de casa?",
  "¿Has dicho “estoy llegando” cuando aún estabas en casa?",
  "¿Has dicho “cinco minutos” sabiendo que eran quince?",
  "¿Has prometido algo que sabías que no cumplirías?",
  "¿Has dicho “luego lo hago” y lo olvidaste convenientemente?",
  "¿Has fingido que no escuchaste algo incómodo?",
  "¿Has mirado el móvil para evitar una conversación?",
  "¿Has hecho una broma a costa de alguien presente?",
  "¿Has repetido un chisme empezando por “no debería decir esto…”?",
  "¿Has soltado un spoiler “sin querer”?",
  "¿Has ocupado más espacio del necesario en transporte público?",
  "¿Has caminado lento bloqueando el paso sin darte cuenta… o sí?",
  "¿Has intentado colarte sutilmente en una fila?",
  "¿Has usado “solo es un momento” para justificar algo molesto?",
  "¿Has puesto cara de inocente después de causar un pequeño caos?",
  "¿Has dejado que otro pague una cuenta que podrías haber dividido?",
  "¿Has aceptado comida gratis sin ofrecer pagar?",
  "¿Has hecho un comentario pasivo-agresivo?",
  "¿Has fingido estar ocupado para evitar ayudar?",
  "¿Has dicho “yo no fui” demasiado rápido?",
  "¿Has respondido con un meme para evitar una conversación seria?",
  "¿Has enviado un mensaje ambiguo para que otro lo interprete?",
  "¿Has cambiado de tema para evitar admitir un error?",
  "¿Has reído cuando alguien tropezó?",
  "¿Has esperado a que alguien termine de hablar solo para contradecirlo?",
  "¿Has disfrutado secretamente cuando alguien que te cae mal se equivoca?",
  "¿Has dicho “era broma” después de un comentario incómodo?",
  "¿Has dejado que alguien crea que tu idea era mejor de lo que era?",
  "¿Has repetido una historia haciéndote quedar mejor?",
  "¿Has pensado alguna vez: “esto es un poco malvado… pero divertido”?",
  "¿Has aplaudido cuando aterriza el avión?",
  "¿Has dicho “vamos viendo” sin ninguna intención real de quedar?",
  "¿Has dicho “qué ilusión verte” cuando no te hacía ninguna ilusión?",
  "¿Has respondido “jajaja” a algo que no te hizo gracia?",
  "¿Has enviado un audio diciendo 'seré breve' y duró más de dos minutos?",
  "¿Has dicho “solo será un minuto” sabiendo que no lo sería?",
  "¿Has usado el altavoz del móvil en un sitio público lleno de gente?",
  "¿Has mirado el móvil mientras alguien te contaba algo importante?",
  "¿Has dicho “yo invito la próxima” esperando que nadie lo recuerde?",
  "¿Has fingido no ver un mensaje para no responder?",
  "¿Has dicho “te escribo luego” sabiendo que no lo harías?",
  "¿Has visto una serie con alguien y luego seguiste viéndola sin esa persona?",
  "¿Has soltado un spoiler diciendo “no es spoiler pero…”?",
  "¿Has preguntado algo que acababan de explicar porque no estabas escuchando?",
  "¿Has fingido que sabías algo que en realidad no tenías ni idea?",
  "¿Has corregido a alguien en público solo para tener razón?",
  "¿Has ocupado dos asientos en transporte público con tu mochila?",
  "¿Has fingido interés mientras pensabas en otra cosa?",
  "¿Has dicho “salgo ya” cuando aún estabas en pijama?",
  "¿Has dicho “no pasa nada” esperando claramente que sí pase algo?",
  "¿Has respondido “haz lo que quieras” esperando que no lo hagan?",
  "¿Has dicho “no tengo opinión” para evitar discutir aunque sí la tenías?",
  "¿Has fingido que no sabías algo para evitar responsabilidad?",
  "¿Has soltado un “yo ya lo dije” después de que algo saliera mal?",
  "¿Has hecho una broma pasivo-agresiva que parecía un cumplido?",
  "¿Has dicho “qué raro…” insinuando que alguien hizo algo mal?",
  "¿Has mirado el móvil mientras alguien hablaba contigo cara a cara?",
  "¿Has fingido que escuchabas mientras pensabas en otra cosa?",
  "¿Has dicho “claro, claro” sin saber de qué hablaban?",
  "¿Has asentido con la cabeza para terminar antes una conversación?",
  "¿Has dicho “te aviso” sin intención de avisar?",
  "¿Has dicho “solo una cosa rápida” y luego hablaste diez minutos?",
  "¿Has contado una historia exagerando tu papel heroico?",
  "¿Has omitido un detalle importante para parecer más listo?",
  "¿Has dicho “yo no dije eso” cuando sí lo dijiste?",
  "¿Has cambiado ligeramente una historia cada vez que la cuentas?",
  "¿Has usado “según estudios” sin saber qué estudios?",
  "¿Has citado algo que leíste en internet como si fuera seguro?",
  "¿Has dicho “todo el mundo dice que…” cuando no era cierto?",
  "¿Has fingido saber de qué hablaban para no quedar mal?",
  "¿Has dicho “sí, claro” esperando que no te pidan hacerlo?",
  "¿Has mirado al móvil para escapar de una charla incómoda?",
  "¿Has dicho “te queda genial” cuando claramente no era así?",
  "¿Has dicho “no soy cotilla pero…” justo antes de cotillear?",
  "¿Has escuchado un chisme con mucho interés aunque fingías lo contrario?",
  "¿Has contado algo confidencial “solo a una persona”?",
  "¿Has soltado una indirecta esperando que alguien la entienda?",
  "¿Has fingido no entender una indirecta incómoda?",
  "¿Has dicho “qué interesante…” para terminar una conversación aburrida?",
  "¿Has respondido con un emoji para evitar seguir hablando?",
  "¿Alguna vez has pensado:\n“esto es un poco malvado… pero nadie se dará cuenta”?",
  "¿Publicas selfies haciendo morritos?",
  "¿Publicas en Instagram tu tostada de aguacate?"
]

// Reglas de puntuación base.
const ANSWERS = [
  { label: "Sí", points: 10 },
  { label: "A veces", points: 5 },
  { label: "No", points: 0 }
]

// Preguntas especiales: si se responde YES, se corta el quiz y se impone resultado directo.
const SPECIAL_TRIGGERS = {
  "¿Publicas selfies haciendo morritos?": "Narcisista compulsivo",
  "¿Publicas en Instagram tu tostada de aguacate?": "Narciso digital",
  "¿Has enviado un audio diciendo 'seré breve' y duró más de dos minutos?": "Terrorista del WhatsApp"
}

// Resultados y penitencias (incluye normales y especiales).
const RESULTS = {
  "Humano sospechosamente normal": {
    penitence: "El tribunal ha decidido vigilarte discretamente."
  },
  "Anómalo social": {
    penitence: "Debes escuchar una conversación de ascensor completa sin mirar el móvil."
  },
  "Inadaptado funcional": {
    penitence: "Escuchar un audio de WhatsApp de 4 minutos sin acelerarlo."
  },
  "Anarquista de la convivencia": {
    penitence: "Responder con educación a todos los mensajes pendientes durante 24h."
  },
  "Maestro del caos social": {
    penitence: "Intentar cancelar una suscripción online imposible de cancelar."
  },
  "Narcisista compulsivo": {
    penitence: "48 horas sin cámara frontal y obligación de subir una foto de una planta sin filtros."
  },
  "Narciso digital": {
    penitence: "Publicar una tostada normal (sin aguacate) y aceptar el silencio del algoritmo."
  },
  "Terrorista del WhatsApp": {
    penitence: "Solo puedes enviar mensajes de texto de máximo 12 palabras durante 24h."
  }
}

const QUESTIONS_TO_SHOW = 10

const questionsContainer = document.querySelector("#questions")
const startBtn = document.querySelector("#startBtn")
const submitBtn = document.querySelector("#submitBtn")
const quizSection = document.querySelector("#quiz")
const resultSection = document.querySelector("#resultSection")
const resultNode = document.querySelector("#result")
const penitenceNode = document.querySelector("#penitence")

let selectedQuestions = []
let answersByIndex = new Map()
let totalScore = 0
let quizLocked = false
let currentResult = null

// Fisher-Yates: mezcla aleatoria in-place.
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

function pickRandomQuestions(count = QUESTIONS_TO_SHOW) {
  const limit = Math.min(count, QUESTION_BANK.length)
  const copy = [...QUESTION_BANK]
  shuffleArray(copy)
  return copy.slice(0, limit)
}

function resetQuizState() {
  selectedQuestions = pickRandomQuestions()
  answersByIndex = new Map()
  totalScore = 0
  quizLocked = false
  currentResult = null
  questionsContainer.innerHTML = ""
}

function renderQuestions() {
  selectedQuestions.forEach((questionText, questionIndex) => {
    const card = document.createElement("article")
    card.className = "question"
    card.dataset.index = String(questionIndex)

    const title = document.createElement("p")
    title.textContent = `${questionIndex + 1}. ${questionText}`

    const answersWrapper = document.createElement("div")
    answersWrapper.className = "answers"

    ANSWERS.forEach(({ label, points }) => {
      const button = document.createElement("button")
      button.type = "button"
      button.className = "answer-btn"
      button.textContent = label
      button.addEventListener("click", () => handleAnswer(questionIndex, questionText, points, button))
      answersWrapper.appendChild(button)
    })

    card.appendChild(title)
    card.appendChild(answersWrapper)
    questionsContainer.appendChild(card)
  })

  updateSubmitButton()
}

function updateSubmitButton() {
  submitBtn.disabled = quizLocked || answersByIndex.size !== selectedQuestions.length
}

function disableRemainingQuestions() {
  const allAnswerButtons = document.querySelectorAll(".answer-btn")
  allAnswerButtons.forEach((button) => {
    button.disabled = true
  })
}

function handleAnswer(questionIndex, questionText, points, clickedButton) {
  if (quizLocked) return

  const previousPoints = answersByIndex.has(questionIndex) ? answersByIndex.get(questionIndex) : null
  if (previousPoints !== null) {
    totalScore -= previousPoints
  }

  answersByIndex.set(questionIndex, points)
  totalScore += points

  const card = clickedButton.closest(".question")
  card.classList.add("answered")
  card.querySelectorAll(".answer-btn").forEach((btn) => btn.classList.remove("selected"))
  clickedButton.classList.add("selected")

  // Detección inmediata de preguntas especiales con respuesta YES.
  if (points === 10 && SPECIAL_TRIGGERS[questionText]) {
    finishQuiz(SPECIAL_TRIGGERS[questionText], true)
    return
  }

  updateSubmitButton()
}

function calculateResultByScore(score) {
  if (score <= 20) return "Humano sospechosamente normal"
  if (score <= 40) return "Anómalo social"
  if (score <= 60) return "Inadaptado funcional"
  if (score <= 80) return "Anarquista de la convivencia"
  return "Maestro del caos social"
}

function getShareMessage() {
  if (!currentResult) return ""

  return `Según el Test Científico de Maldad Humana soy: ${currentResult.title}.\nPenitencia impuesta: ${currentResult.penitence}`
}

function shareWhatsApp() {
  const text = encodeURIComponent(getShareMessage())
  window.open(`https://wa.me/?text=${text}`, "_blank")
}

function shareFacebook() {
  const text = encodeURIComponent(getShareMessage())
  window.open(`https://www.facebook.com/sharer/sharer.php?u=&quote=${text}`, "_blank")
}

function shareInstagram() {
  alert("Instagram no permite compartir texto directamente por enlace. Copia el resultado y súbelo en una historia.")
}

function ensureModal() {
  let modal = document.querySelector("#resultModal")
  if (modal) return modal

  modal = document.createElement("div")
  modal.id = "resultModal"
  modal.style.cssText = "position:fixed;inset:0;background:rgba(0,0,0,.6);display:none;align-items:center;justify-content:center;padding:20px;z-index:9999;"

  modal.innerHTML = `
    <div style="background:white;max-width:560px;width:100%;border-radius:14px;padding:20px;box-shadow:0 15px 45px rgba(0,0,0,.25);">
      <h2 id="modalResultTitle" style="margin-top:0;">Resultado</h2>
      <p id="modalPenitence" style="line-height:1.5;"></p>
      <div style="display:flex;gap:10px;flex-wrap:wrap;">
        <button id="modalShareWhatsApp" type="button">WhatsApp</button>
        <button id="modalShareFacebook" type="button">Facebook</button>
        <button id="modalShareInstagram" type="button">Instagram</button>
        <button id="closeModalBtn" type="button">Cerrar</button>
      </div>
    </div>
  `

  document.body.appendChild(modal)

  modal.querySelector("#modalShareWhatsApp").addEventListener("click", shareWhatsApp)
  modal.querySelector("#modalShareFacebook").addEventListener("click", shareFacebook)
  modal.querySelector("#modalShareInstagram").addEventListener("click", shareInstagram)
  modal.querySelector("#closeModalBtn").addEventListener("click", () => {
    modal.style.display = "none"
  })

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none"
    }
  })

  return modal
}

function showResultModal() {
  const modal = ensureModal()
  modal.querySelector("#modalResultTitle").textContent = currentResult.title
  modal.querySelector("#modalPenitence").textContent = currentResult.penitence
  modal.style.display = "flex"
}

function finishQuiz(forcedResultTitle = null, isSpecial = false) {
  quizLocked = true
  disableRemainingQuestions()
  updateSubmitButton()

  const resultTitle = forcedResultTitle || calculateResultByScore(totalScore)
  const resultData = RESULTS[resultTitle]

  currentResult = {
    title: resultTitle,
    penitence: resultData.penitence,
    isSpecial,
    score: totalScore
  }

  resultNode.textContent = isSpecial
    ? `Resultado especial activado: ${resultTitle}`
    : `Tu puntuación final es ${totalScore}. Resultado: ${resultTitle}`

  penitenceNode.textContent = resultData.penitence
  resultSection.classList.remove("hidden")

  // Botones de compartir del layout principal.
  document.querySelector("#shareWhatsapp").onclick = shareWhatsApp
  document.querySelector("#shareFacebook").onclick = shareFacebook
  document.querySelector("#shareInstagram").onclick = shareInstagram

  showResultModal()
}

startBtn.addEventListener("click", () => {
  startBtn.style.display = "none"
  quizSection.classList.remove("hidden")
  resultSection.classList.add("hidden")
  resetQuizState()
  renderQuestions()
})

submitBtn.addEventListener("click", () => {
  if (answersByIndex.size !== selectedQuestions.length) {
    alert(`Responde las ${selectedQuestions.length} preguntas para terminar el test.`)
    return
  }

  finishQuiz()
})
