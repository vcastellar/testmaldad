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

const TRAITS = {
  NAR: "Narcisista compulsivo",
  WSP: "Terrorista del WhatsApp",
  INF: "Inadaptado funcional",
  ANC: "Anarquista de la convivencia",
  PAP: "Pasivo-agresivo profesional",
  MNP: "Manipulador de bolsillo",
  TRL: "Troll doméstico"
}

const ANSWERS = [
  { label: "Sí", multiplier: 1 },
  { label: "A veces", multiplier: 0.5 },
  { label: "No", multiplier: 0 }
]

function normalizeQuestionTraitsToFullScale(traits) {
  const rawToFullScale = {
    0: 1,
    1: 3,
    2: 5,
    3: 7
  }

  return Object.keys(TRAITS).reduce((acc, traitKey) => {
    const rawValue = traits[traitKey] ?? 0
    acc[traitKey] = rawToFullScale[rawValue] ?? 1
    return acc
  }, {})
}

// ------------------------------
// Pesos iniciales de cada pregunta
// ------------------------------

const RAW_QUESTION_TRAITS = {

"¿Has fingido no ver a alguien para evitar saludarlo?": { INF:4, PAP:3, MNP:2, NAR:1 },

"¿Has cruzado la calle para evitar una conversación incómoda?": { INF:4, PAP:3, WSP:2, NAR:1 },

"¿Has dicho “te aviso” sabiendo que nunca avisarías?": { MNP:4, PAP:3, WSP:2, NAR:1 },

"¿Has devuelto una llamada solo porque necesitabas algo?": { MNP:4, NAR:3, PAP:2, WSP:1 },

"¿Has respondido “qué pena” sin sentir ninguna pena?": { PAP:4, MNP:3, NAR:2, INF:1 },

"¿Has dado un consejo que tú mismo no seguirías?": { MNP:4, PAP:3, NAR:2, INF:1 },

"¿Has asentido fingiendo interés en una historia aburrida?": { PAP:4, INF:3, MNP:2, NAR:1 },

"¿Has interrumpido a alguien para contar tu propia historia?": { NAR:4, INF:3, PAP:2, TRL:1 },

"¿Has dicho “no tengo hambre” y luego comido del plato de otro?": { MNP:4, INF:3, NAR:2, ANC:1 },

"¿Has cogido la última porción diciendo “si nadie la quiere…”?": { MNP:4, INF:3, NAR:2, ANC:1 },

"¿Has criticado algo que en realidad te gusta?": { PAP:4, NAR:3, MNP:2, INF:1 },

"¿Has dicho “no me gusta la polémica” justo antes de crear una?": { TRL:4, PAP:3, NAR:2, ANC:1 },

"¿Has leído un mensaje y tardado en responder para parecer ocupado?": { WSP:4, NAR:3, PAP:2, MNP:1 },

"¿Has dejado que alguien se equivoque sin corregirlo?": { MNP:4, PAP:3, TRL:2, INF:1 },

"¿Has corregido a alguien solo para demostrar que tenías razón?": { NAR:4, PAP:3, INF:2, TRL:1 },

"¿Has hecho una pregunta cuya respuesta ya sabías?": { MNP:4, NAR:3, PAP:2, INF:1 },

"¿Has fingido sorpresa ante algo que ya sabías?": { PAP:4, MNP:3, NAR:2, INF:1 },

"¿Has contado un secreto que te pidieron no contar?": { TRL:4, MNP:3, PAP:2, INF:1 },

"¿Has exagerado una historia para que parezca mejor?": { NAR:4, PAP:3, MNP:2, TRL:1 },

"¿Has hecho un comentario sarcástico que alguien no entendió?": { PAP:4, TRL:3, INF:2, NAR:1 },

"¿Has culpado al tráfico aunque saliste tarde de casa?": { MNP:4, PAP:3, NAR:2, INF:1 },

"¿Has dicho “estoy llegando” cuando aún estabas en casa?": { MNP:4, WSP:3, PAP:2, NAR:1 },

"¿Has dicho “cinco minutos” sabiendo que eran quince?": { MNP:4, PAP:3, WSP:2, NAR:1 },

"¿Has prometido algo que sabías que no cumplirías?": { MNP:4, PAP:3, NAR:2, TRL:1 },

"¿Has dicho “luego lo hago” y lo olvidaste convenientemente?": { INF:4, MNP:3, PAP:2, WSP:1 },

"¿Has fingido que no escuchaste algo incómodo?": { PAP:4, MNP:3, INF:2, NAR:1 },

"¿Has mirado el móvil para evitar una conversación?": { WSP:4, INF:3, PAP:2, NAR:1 },

"¿Has hecho una broma a costa de alguien presente?": { TRL:4, PAP:3, ANC:2, INF:1 },

"¿Has repetido un chisme empezando por “no debería decir esto…”?": { TRL:4, PAP:3, INF:2, ANC:1 },

"¿Has soltado un spoiler “sin querer”?": { TRL:4, PAP:3, INF:2, ANC:1 },

"¿Has ocupado más espacio del necesario en transporte público?": { ANC:4, INF:3, PAP:2, NAR:1 },

"¿Has caminado lento bloqueando el paso sin darte cuenta… o sí?": { ANC:4, INF:3, PAP:2, TRL:1 },

"¿Has intentado colarte sutilmente en una fila?": { ANC:4, MNP:3, INF:2, TRL:1 }

}


// ------------------------------
// Normalización automática
// ------------------------------

function normalizeQuestionTraitsToFullScale(traits) {

  const maxWeight = Math.max(...Object.values(traits))

  const normalized = {}

  Object.entries(traits).forEach(([trait, weight]) => {
    normalized[trait] = Math.round((weight / maxWeight) * 5)
  })

  return normalized
}


// ------------------------------
// Generar matriz final
// ------------------------------

const QUESTION_TRAITS = Object.fromEntries(
  Object.entries(RAW_QUESTION_TRAITS).map(([question, traits]) => {
    return [question, normalizeQuestionTraitsToFullScale(traits)]
  })
)

const TRAIT_PENITENCES = {
  NAR: "Desinflado de ego controlado: 1) 48 horas sin cámara frontal, 2) sube una foto de una planta sin filtros, 3) felicita a alguien sin mencionar nada de ti.",
  WSP: "Régimen estricto de mensajería: 1) cero audios por 24h, 2) mensajes de máximo 12 palabras, 3) responde en un único texto y sin trilogías.",
  INF: "Reinserción social express: 1) escucha sin mirar el móvil 10 minutos, 2) responde algo útil en 2 frases, 3) evita sarcasmos durante una hora.",
  ANC: "Tratado temporal de convivencia: 1) respeta una fila sin atajos, 2) no invadas espacio ajeno en transporte, 3) deja todo más limpio de como lo encontraste.",
  PAP: "Desintoxicación pasivo-agresiva: 1) di lo que te molesta de forma directa y amable, 2) evita indirectas durante todo el día, 3) cambia un “lo que quieras” por una propuesta clara.",
  MNP: "Plan anti-manipulación de bolsillo: 1) paga tu parte sin teatro, 2) admite un error sin excusas, 3) pide un favor sin chantaje emocional.",
  TRL: "Protocolo anti-troleo doméstico: 1) 24h sin spoilers ni chismes, 2) no remates errores ajenos con ironía, 3) convierte una pulla en un cumplido real."
}

const QUESTIONS_TO_SHOW = 20

const questionsContainer = document.querySelector("#questions")
const startBtn = document.querySelector("#startBtn")
const submitBtn = document.querySelector("#submitBtn")
const quizSection = document.querySelector("#quiz")
const resultSection = document.querySelector("#resultSection")
const resultNode = document.querySelector("#result")
const penitenceNode = document.querySelector("#penitence")
const traitRadarNode = document.querySelector("#traitRadar")
const questionMetaNode = document.querySelector("#questionMeta")
const deviceModeNode = document.querySelector("#deviceMode")

let selectedQuestions = []
let answersByIndex = new Map()
let quizLocked = false
let currentResult = null


function detectDeviceMode() {
  const ua = navigator.userAgent || ""
  const isTouch = navigator.maxTouchPoints > 0
  const byUserAgent = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|Mobile/i.test(ua)
  const byViewport = window.matchMedia("(max-width: 768px)").matches
  return (byUserAgent || (isTouch && byViewport)) ? "mobile" : "desktop"
}

function applyDeviceMode() {
  const mode = detectDeviceMode()
  document.body.classList.toggle("device-mobile", mode === "mobile")
  document.body.classList.toggle("device-desktop", mode === "desktop")

  if (deviceModeNode) {
    deviceModeNode.textContent = mode === "mobile"
      ? "Modo detectado: smartphone. Interfaz compacta activada."
      : "Modo detectado: PC. Interfaz amplia activada."
  }
}

applyDeviceMode()
window.addEventListener("resize", applyDeviceMode)
window.addEventListener("orientationchange", applyDeviceMode)

function createEmptyTraitScores() {
  return Object.keys(TRAITS).reduce((acc, key) => {
    acc[key] = 0
    return acc
  }, {})
}

function normalizeQuestion(questionText) {
  return questionText.toLowerCase()
}

function inferQuestionTraits(questionText) {
  const normalized = normalizeQuestion(questionText)
  const inferred = {}

  const add = (trait, points) => {
    inferred[trait] = (inferred[trait] || 0) + points
  }

  if (/(selfies|instagram|morritos|heroico|quedar mejor|tenías razón)/.test(normalized)) add("NAR", 2)
  if (/(audio|mensaje|móvil|movil|whatsapp|emoji|meme|responder|te aviso|te escribo)/.test(normalized)) add("WSP", 2)
  if (/(público|publico|transporte|dos asientos|mochila|altavoz|convivencia)/.test(normalized)) add("ANC", 2)
  if (/(fingido|fingías|fingias|no sabías|no sabias|incomod|evitar saludar|escuchando)/.test(normalized)) add("INF", 2)
  if (/(pasivo-agresivo|indirecta|no pasa nada|haz lo que quieras|jajaja|qué raro|que raro)/.test(normalized)) add("PAP", 2)
  if (/(colarte|pague|pagar|admitir un error|ambiguo|yo no fui|yo no dije eso|culpado al tráfico|trafico)/.test(normalized)) add("MNP", 2)
  if (/(spoiler|chisme|broma|tropezó|tropezo|caos|malvado|cotilla)/.test(normalized)) add("TRL", 2)

  const fallbackTraits = Object.keys(inferred).length > 0 ? inferred : { INF: 1 }
  return normalizeQuestionTraitsToFullScale(fallbackTraits)
}

function getQuestionTraits(questionText) {
  return QUESTION_TRAITS[questionText] || inferQuestionTraits(questionText)
}

function calculateTraitScores() {
  const traitScores = createEmptyTraitScores()

  selectedQuestions.forEach((questionText, questionIndex) => {
    const multiplier = answersByIndex.get(questionIndex) || 0
    if (multiplier === 0) return

    const questionTraits = getQuestionTraits(questionText)
    Object.entries(questionTraits).forEach(([traitCode, points]) => {
      traitScores[traitCode] += points * multiplier
    })
  })

  return traitScores
}

function getTopTraitCode(traitScores) {
  return Object.keys(traitScores).reduce((bestTrait, traitCode) => {
    if (!bestTrait) return traitCode
    return traitScores[traitCode] > traitScores[bestTrait] ? traitCode : bestTrait
  }, null)
}

function formatTraitBreakdown(traitScores) {
  const sorted = Object.entries(traitScores)
    .sort((a, b) => b[1] - a[1])
    .map(([code, score]) => `${TRAITS[code]}: ${score.toFixed(1)} pts`)

  return `Perfil por dimensiones: ${sorted.join(" · ")}`
}

function buildRadarPolygonPoints(values, cx, cy, radius, maxValue) {
  return values
    .map((value, index) => {
      const angle = (-Math.PI / 2) + (2 * Math.PI * index) / values.length
      const ratio = maxValue > 0 ? value / maxValue : 0
      const x = cx + Math.cos(angle) * radius * ratio
      const y = cy + Math.sin(angle) * radius * ratio
      return `${x.toFixed(2)},${y.toFixed(2)}`
    })
    .join(" ")
}

function renderTraitRadar(traitScores) {
  if (!traitRadarNode) return

  const entries = Object.entries(traitScores)
  const values = entries.map(([, score]) => score)
  const maxObserved = Math.max(...values, 1)
  const maxValue = Math.ceil(maxObserved / 2) * 2
  const size = 420
  const cx = size / 2
  const cy = size / 2
  const radius = 150
  const levels = 4

  const gridPolygons = Array.from({ length: levels }, (_, i) => {
    const levelRadius = radius * ((i + 1) / levels)
    const points = buildRadarPolygonPoints(new Array(entries.length).fill(maxValue), cx, cy, levelRadius, maxValue)
    return `<polygon class="radar-grid" points="${points}" />`
  }).join("")

  const axes = entries.map((_, index) => {
    const angle = (-Math.PI / 2) + (2 * Math.PI * index) / entries.length
    const x = cx + Math.cos(angle) * radius
    const y = cy + Math.sin(angle) * radius
    return `<line class="radar-axis" x1="${cx}" y1="${cy}" x2="${x.toFixed(2)}" y2="${y.toFixed(2)}" />`
  }).join("")

  const dataPoints = buildRadarPolygonPoints(values, cx, cy, radius, maxValue)

  const labels = entries.map(([code, score], index) => {
    const angle = (-Math.PI / 2) + (2 * Math.PI * index) / entries.length
    const labelRadius = radius + 28
    const x = cx + Math.cos(angle) * labelRadius
    const y = cy + Math.sin(angle) * labelRadius
    const textAnchor = x < cx - 10 ? "end" : x > cx + 10 ? "start" : "middle"

    return `
      <text class="radar-label" x="${x.toFixed(2)}" y="${y.toFixed(2)}" text-anchor="${textAnchor}">${code}</text>
      <text class="radar-score" x="${x.toFixed(2)}" y="${(y + 14).toFixed(2)}" text-anchor="${textAnchor}">${score.toFixed(1)} pts</text>
    `
  }).join("")

  traitRadarNode.innerHTML = `
    <svg viewBox="0 0 ${size} ${size}" role="img" aria-label="Diagrama de estrella con puntuación por dimensión">
      ${gridPolygons}
      ${axes}
      <polygon class="radar-shape" points="${dataPoints}" />
      ${labels}
    </svg>
  `
}

function getShareMessage() {
  if (!currentResult) return ""

  return `Según el Test Científico de Maldad Humana soy: ${currentResult.title}.\n${currentResult.breakdown}\nPenitencia impuesta: ${currentResult.penitence}`
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
  if (QUESTION_BANK.length < count) {
    throw new Error(`No hay suficientes preguntas para mostrar ${count} elementos.`)
  }

  const selectedIndexes = new Set()

  while (selectedIndexes.size < count) {
    selectedIndexes.add(Math.floor(Math.random() * QUESTION_BANK.length))
  }

  return Array.from(selectedIndexes, (index) => QUESTION_BANK[index])
}

function resetQuizState() {
  selectedQuestions = pickRandomQuestions(QUESTIONS_TO_SHOW)
  answersByIndex = new Map()
  quizLocked = false
  currentResult = null
  questionsContainer.innerHTML = ""
}

function renderQuestions() {
  if (questionMetaNode) {
    questionMetaNode.textContent = `Mostrando ${selectedQuestions.length} preguntas aleatorias en esta ronda.`
  }

  selectedQuestions.forEach((questionText, questionIndex) => {
    const card = document.createElement("article")
    card.className = "question"
    card.dataset.index = String(questionIndex)

    const title = document.createElement("p")
    title.textContent = `${questionIndex + 1}. ${questionText}`

    const answersWrapper = document.createElement("div")
    answersWrapper.className = "answers"

    ANSWERS.forEach(({ label, multiplier }) => {
      const button = document.createElement("button")
      button.type = "button"
      button.className = "answer-btn"
      button.textContent = label
      button.addEventListener("click", () => handleAnswer(questionIndex, multiplier, button))
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

function handleAnswer(questionIndex, multiplier, clickedButton) {
  if (quizLocked) return

  answersByIndex.set(questionIndex, multiplier)

  const card = clickedButton.closest(".question")
  card.classList.add("answered")
  card.querySelectorAll(".answer-btn").forEach((btn) => btn.classList.remove("selected"))
  clickedButton.classList.add("selected")

  updateSubmitButton()
}

function finishQuiz(trigger = "submit") {
  // Solo permitimos calcular resultados al enviar el cuestionario completo.
  // Esto evita atajos de "resultado inmediato" al responder afirmativamente.
  if (trigger !== "submit") return

  quizLocked = true
  disableRemainingQuestions()
  updateSubmitButton()

  const traitScores = calculateTraitScores()
  const topTraitCode = getTopTraitCode(traitScores)
  const resultTitle = TRAITS[topTraitCode]
  const breakdown = formatTraitBreakdown(traitScores)
  renderTraitRadar(traitScores)

  currentResult = {
    title: resultTitle,
    traitScores,
    breakdown,
    penitence: TRAIT_PENITENCES[topTraitCode]
  }

  resultNode.textContent = `Resultado dominante: ${resultTitle}`
  const breakdownNode = document.querySelector("#traitBreakdown") || document.createElement("div")
  breakdownNode.id = "traitBreakdown"
  breakdownNode.textContent = breakdown
  resultNode.insertAdjacentElement("afterend", breakdownNode)

  penitenceNode.textContent = currentResult.penitence
  resultSection.classList.remove("hidden")

  requestAnimationFrame(() => {
    resultSection.scrollIntoView({ behavior: "smooth", block: "start" })
  })

  document.querySelector("#shareWhatsapp").onclick = shareWhatsApp
  document.querySelector("#shareFacebook").onclick = shareFacebook
  document.querySelector("#shareInstagram").onclick = shareInstagram

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

  finishQuiz("submit")
})
