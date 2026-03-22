// Banco completo de preguntas del test satírico.
const QUESTIONS = [
  // Preguntas de ego, protagonismo y necesidad de validación
  "¿Has interrumpido a alguien para contar tu propia historia?",
  "¿Has exagerado una historia para que parezca mejor?",
  "¿Has fingido que sabías algo que en realidad no tenías ni idea?",
  "¿Has soltado un “yo ya lo dije” después de que algo saliera mal?",
  "¿Has dicho “solo una cosa rápida” y luego hablaste diez minutos?",
  "¿Has contado una historia exagerando tu papel heroico?",
  "¿Has omitido un detalle importante para parecer más listo?",
  "¿Has subido una story triste esperando mensajes de “¿qué te pasa?”?",
  "¿Has mirado quién dio like antes de decidir si darlo tú también?",
  "¿Has corregido algo en Google solo para tener razón?",
  "¿Has respondido tarde a propósito para parecer más importante?",
  "¿Has contado algo esperando impresionar?",
  "¿Has pensado que alguien hablaba demasiado mientras tú hacías lo mismo?",
  "¿Has dicho 'no soy experto pero…' antes de opinar con seguridad?",
  "¿Has hecho una pregunta solo para poder hablar tú después?",
  "¿Publicas selfies haciendo morritos?",
  "¿Publicas en Instagram tu tostada de aguacate?",

  // Preguntas de evasión, pasivo-agresividad y caos digital por chat
  "¿Has mirado el móvil para evitar una conversación incómoda?",
  "¿Has respondido con un meme para evitar una conversación seria?",
  "¿Has dicho “salgo ya” cuando aún estabas en pijama?",
  "¿Has enviado “perdón por contestar tarde” mientras estabas en línea todo el día?",
  "¿Has enviado un 'ok' seco para cerrar una conversación incómoda?",
  "¿Has dejado una conversación grupal cuando se volvió incómoda?",
  "¿Has soltado una bomba en un chat y luego lo silenciaste?",
  "¿Has dejado de responder esperando que el problema desaparezca?",
  "¿Has respondido con un GIF para no pensar una respuesta?",
  "¿Has visto un mensaje importante y decidiste contestar 'luego'… y nunca llegó?",
  "¿Has silenciado a alguien para no tener que interactuar con él?",
  "¿Has entrado en línea para otra cosa pero evitaste responder a alguien?",

  // Preguntas de torpeza, incomodidad y desastre social cotidiano
  "¿Has cruzado la calle para evitar una conversación incómoda?",
  "¿Has saludado a alguien que no te estaba saludando a ti?",
  "¿Has intentado salir de una conversación y te quedaste atrapado más tiempo?",
  "¿Has hecho contacto visual incómodo demasiado tiempo?",
  "¿Has dicho algo y te arrepentiste justo después de decirlo?",
  "¿Has fingido que entendías un chiste y remataste con una risa fuera de tiempo?",
  "¿Has respondido “igualmente” cuando te dijeron “buen provecho” o “feliz cumpleaños”?",
  "¿Has intentado dar dos besos, la otra persona una mano y acabaste haciendo coreografía social?",
  "¿Has abierto una puerta empujando cuando ponía claramente “tirar” y alguien te estaba mirando?",
  "¿Has llamado “mamá” o “profe” a alguien que claramente no era tu madre ni tu profesor?",
  "¿Has dicho “tú también” cuando el camarero te dijo “que disfrutes la comida”?",

  // Preguntas de convivencia, espacio compartido y pequeñas anarquías
  "¿Has ocupado más espacio del necesario en transporte público?",
  "¿Has intentado colarte sutilmente en una fila?",
  "¿Has usado “solo es un momento” para justificar algo molesto?",
  "¿Has ocupado dos asientos en transporte público con tu mochila?",
  "¿Has abierto la nevera ajena y has opinado sin que te preguntaran?",
  "¿Has dejado una puerta abierta sabiendo que molestaba a alguien?",
  "¿Has ocupado un sitio “reservado” pensando que nadie lo usaría?",
  "¿Has dejado basura en un sitio público “porque ya estaba sucio”?",
  "¿Has hablado por teléfono en voz alta sin importar quién escuchaba?",

  // Preguntas de indirectas, pullas y comunicación pasivo-agresiva
  "¿Has respondido “qué pena” sin sentir ninguna pena?",
  "¿Has hecho un comentario sarcástico que alguien no entendió?",
  "¿Has hecho un comentario pasivo-agresivo?",
  "¿Has enviado un mensaje ambiguo para que otro lo interprete?",
  "¿Has dicho “qué ilusión verte” cuando no te hacía ninguna ilusión?",
  "¿Has dicho “no pasa nada” esperando claramente que sí pase algo?",
  "¿Has respondido “haz lo que quieras” esperando que no lo hagan?",
  "¿Has hecho una broma pasivo-agresiva que parecía un cumplido?",
  "¿Has dicho “qué raro…” insinuando que alguien hizo algo mal?",
  "¿Has dicho “todo el mundo dice que…” cuando no era cierto?",
  "¿Has dicho “te queda genial” cuando claramente no era así?",
  "¿Has soltado una indirecta esperando que alguien la entienda?",
  "¿Has dicho “no era por ti” justo después de lanzar una indirecta nuclear?",
  "¿Has fingido reír para cortar un chiste?",
  "¿Has dicho 'era sarcasmo' cuando no lo era?",
  "¿Has usado 'te lo digo por tu bien' antes de criticar?",

  // Preguntas de conveniencia, escaqueo y ventaja estratégica
  "¿Has dicho “te aviso” sabiendo que nunca avisarías?",
  "¿Has devuelto una llamada solo porque necesitabas algo?",
  "¿Has asentido fingiendo interés en una historia aburrida?",
  "¿Has cogido la última porción diciendo “si nadie la quiere…”?",
  "¿Has criticado algo que en realidad te gusta?",
  "¿Has culpado al tráfico aunque saliste tarde de casa?",
  "¿Has prometido algo que sabías que no cumplirías?",
  "¿Has puesto cara de inocente después de causar un pequeño caos?",
  "¿Has dejado que otro pague una cuenta que podríais haber dividido?",
  "¿Has aceptado comida gratis sin ofrecer pagar?",
  "¿Has fingido estar ocupado para evitar ayudar?",
  "¿Has cambiado de tema para evitar admitir un error?",
  "¿Has dicho “yo invito la próxima” esperando que nadie lo recuerde?",
  "¿Has visto una serie con alguien y luego seguiste viéndola sin esa persona?",
  "¿Has dicho “sí, claro” esperando que no te pidan hacerlo?",
  "¿Has pedido “una prueba” del postre y terminaste comiéndote medio plato?",
  "¿Has usado el cargador de alguien sin decir nada?",
  "¿Has dicho “yo me encargo” y luego desapareciste?",
  "¿Has respondido 'ya lo miraré' sabiendo que no lo harías?",
  "¿Has dejado que otro se lleve la culpa por algo tuyo?",

  // Preguntas de provocación, chisme y disfrute del caos ajeno
  "¿Has dicho “no me gusta la polémica” justo antes de crear una?",
  "¿Has hecho una broma a costa de alguien presente?",
  "¿Has repetido un chisme empezando por “no debería decir esto…”?",
  "¿Has soltado un spoiler sin avisar?",
  "¿Has dicho “no soy cotilla pero…” justo antes de cotillear?",
  "¿Has escuchado un chisme con mucho interés aunque fingías lo contrario?",
  "¿Has contado un secreto que te pidieron no contar?",
  "¿Has reenviado un pantallazo privado para reírte con otro grupo?",
  "¿Has disfrutado viendo discusiones absurdas en internet?",
  "¿Has seguido un drama online solo por morbo?",
  "¿Has metido cizaña entre dos personas y luego fingido sorpresa?",
  "¿Has disfrutado viendo cómo explotaba un drama ajeno?",
  "¿Has seguido mirando algo sabiendo que acabaría mal?",

]
const TRAITS = {
  NAR: "Narcisista compulsivo",
  WSP: "Terrorista del WhatsApp",
  DSC: "Desastre social certificado",
  ANC: "Anarquista de la convivencia",
  PAP: "Pasivo-agresivo profesional",
  RTS: "Rata estratégica",
  TRL: "Troll doméstico"
}

const ANSWERS = [
  { label: "Sí", multiplier: 1 },
  { label: "A veces", multiplier: 0.5 },
  { label: "No", multiplier: 0 }
]

// ------------------------------
// Pesos iniciales de cada pregunta
// ------------------------------

const RAW_QUESTION_TRAITS = {
  // Preguntas de ego, protagonismo y necesidad de validación
  "¿Has interrumpido a alguien para contar tu propia historia?": { NAR:4, DSC:3, RTS:2, TRL:1 },
  "¿Has exagerado una historia para que parezca mejor?": { NAR:4, PAP:3, RTS:2, TRL:1 },
  "¿Has fingido que sabías algo que en realidad no tenías ni idea?": { NAR:4, PAP:3, RTS:2, DSC:1 },
  "¿Has soltado un “yo ya lo dije” después de que algo saliera mal?": { NAR:4, PAP:3, RTS:2, TRL:1 },
  "¿Has dicho “solo una cosa rápida” y luego hablaste diez minutos?": { NAR:4, PAP:3, DSC:2, RTS:1 },
  "¿Has contado una historia exagerando tu papel heroico?": { NAR:4, PAP:3, RTS:2, TRL:1 },
  "¿Has omitido un detalle importante para parecer más listo?": { NAR:4, RTS:3, PAP:2, DSC:1 },
  "¿Has subido una story triste esperando mensajes de “¿qué te pasa?”?": { NAR:4, RTS:3, WSP:2, PAP:1 },
  "¿Has mirado quién dio like antes de decidir si darlo tú también?": { NAR:4, PAP:3, RTS:2, DSC:1 },
  "¿Has corregido algo en Google solo para tener razón?": { NAR:4, PAP:3, DSC:2, TRL:1 },
  "¿Has respondido tarde a propósito para parecer más importante?": { NAR:4, WSP:3, PAP:2, RTS:1 },
  "¿Has contado algo esperando impresionar?": { NAR:4, PAP:3, RTS:2, TRL:1 },
  "¿Has pensado que alguien hablaba demasiado mientras tú hacías lo mismo?": { NAR:4, DSC:3, PAP:2, TRL:1 },
  "¿Has dicho 'no soy experto pero…' antes de opinar con seguridad?": { NAR:4, PAP:3, DSC:2, RTS:1 },
  "¿Has hecho una pregunta solo para poder hablar tú después?": { NAR:4, PAP:3, DSC:2, TRL:1 },
  "¿Publicas selfies haciendo morritos?": { NAR:4, DSC:3, PAP:2, TRL:1 },
  "¿Publicas en Instagram tu tostada de aguacate?": { NAR:4, PAP:3, DSC:2, TRL:1 },

  // Preguntas de evasión, pasivo-agresividad y caos digital por chat
  "¿Has mirado el móvil para evitar una conversación incómoda?": { WSP:4, DSC:3, PAP:2, NAR:1 },
  "¿Has respondido con un meme para evitar una conversación seria?": { WSP:4, PAP:3, TRL:2, NAR:1 },
  "¿Has dicho “salgo ya” cuando aún estabas en pijama?": { WSP:4, RTS:3, PAP:2, NAR:1 },
  "¿Has enviado “perdón por contestar tarde” mientras estabas en línea todo el día?": { WSP:4, RTS:3, PAP:2, NAR:1 },
  "¿Has enviado un 'ok' seco para cerrar una conversación incómoda?": { WSP:4, PAP:3, DSC:2, RTS:1 },
  "¿Has dejado una conversación grupal cuando se volvió incómoda?": { WSP:4, DSC:3, PAP:2, NAR:1 },
  "¿Has soltado una bomba en un chat y luego lo silenciaste?": { WSP:4, TRL:3, RTS:2, PAP:1 },
  "¿Has dejado de responder esperando que el problema desaparezca?": { WSP:4, RTS:3, PAP:2, DSC:1 },
  "¿Has respondido con un GIF para no pensar una respuesta?": { WSP:4, PAP:3, DSC:2, TRL:1 },
  "¿Has visto un mensaje importante y decidiste contestar 'luego'… y nunca llegó?": { WSP:4, RTS:3, NAR:2, PAP:1 },
  "¿Has silenciado a alguien para no tener que interactuar con él?": { WSP:4, DSC:3, PAP:2, NAR:1 },
  "¿Has entrado en línea para otra cosa pero evitaste responder a alguien?": { WSP:4, RTS:3, PAP:2, NAR:1 },

  // Preguntas de torpeza, incomodidad y desastre social cotidiano
  "¿Has cruzado la calle para evitar una conversación incómoda?": { DSC:4, RTS:3, NAR:2, PAP:1 },
  "¿Has saludado a alguien que no te estaba saludando a ti?": { DSC:4, PAP:3, NAR:2, TRL:1 },
  "¿Has intentado salir de una conversación y te quedaste atrapado más tiempo?": { DSC:4, WSP:3, PAP:2, NAR:1 },
  "¿Has hecho contacto visual incómodo demasiado tiempo?": { DSC:4, PAP:3, NAR:2, RTS:1 },
  "¿Has dicho algo y te arrepentiste justo después de decirlo?": { DSC:4, PAP:3, RTS:2, NAR:1 },
  "¿Has fingido que entendías un chiste y remataste con una risa fuera de tiempo?": { DSC:4, PAP:3, TRL:2, NAR:1 },
  "¿Has respondido “igualmente” cuando te dijeron “buen provecho” o “feliz cumpleaños”?": { DSC:4, PAP:3, NAR:2, TRL:1 },
  "¿Has intentado dar dos besos, la otra persona una mano y acabaste haciendo coreografía social?": { DSC:4, PAP:3, ANC:2, NAR:1 },
  "¿Has abierto una puerta empujando cuando ponía claramente “tirar” y alguien te estaba mirando?": { DSC:4, NAR:3, PAP:2, TRL:1 },
  "¿Has llamado “mamá” o “profe” a alguien que claramente no era tu madre ni tu profesor?": { DSC:4, PAP:3, NAR:2, TRL:1 },
  "¿Has dicho “tú también” cuando el camarero te dijo “que disfrutes la comida”?": { DSC:4, PAP:3, NAR:2, RTS:1 },

  // Preguntas de convivencia, espacio compartido y pequeñas anarquías
  "¿Has ocupado más espacio del necesario en transporte público?": { ANC:4, DSC:3, PAP:2, NAR:1 },
  "¿Has intentado colarte sutilmente en una fila?": { ANC:4, RTS:3, DSC:2, TRL:1 },
  "¿Has usado “solo es un momento” para justificar algo molesto?": { ANC:4, RTS:3, PAP:2, DSC:1 },
  "¿Has ocupado dos asientos en transporte público con tu mochila?": { ANC:4, DSC:3, PAP:2, NAR:1 },
  "¿Has abierto la nevera ajena y has opinado sin que te preguntaran?": { ANC:4, NAR:3, DSC:2, TRL:1 },
  "¿Has dejado una puerta abierta sabiendo que molestaba a alguien?": { ANC:4, DSC:3, PAP:2, NAR:1 },
  "¿Has ocupado un sitio “reservado” pensando que nadie lo usaría?": { ANC:4, RTS:3, DSC:2, TRL:1 },
  "¿Has dejado basura en un sitio público “porque ya estaba sucio”?": { ANC:4, RTS:3, PAP:2, DSC:1 },
  "¿Has hablado por teléfono en voz alta sin importar quién escuchaba?": { ANC:4, DSC:3, WSP:2, PAP:1 },

  // Preguntas de indirectas, pullas y comunicación pasivo-agresiva
  "¿Has respondido “qué pena” sin sentir ninguna pena?": { PAP:4, RTS:3, NAR:2, DSC:1 },
  "¿Has hecho un comentario sarcástico que alguien no entendió?": { PAP:4, TRL:3, DSC:2, NAR:1 },
  "¿Has hecho un comentario pasivo-agresivo?": { PAP:4, RTS:3, NAR:2, DSC:1 },
  "¿Has enviado un mensaje ambiguo para que otro lo interprete?": { PAP:4, RTS:3, TRL:2, NAR:1 },
  "¿Has dicho “qué ilusión verte” cuando no te hacía ninguna ilusión?": { PAP:4, RTS:3, NAR:2, DSC:1 },
  "¿Has dicho “no pasa nada” esperando claramente que sí pase algo?": { PAP:4, RTS:3, NAR:2, DSC:1 },
  "¿Has respondido “haz lo que quieras” esperando que no lo hagan?": { PAP:4, RTS:3, NAR:2, DSC:1 },
  "¿Has hecho una broma pasivo-agresiva que parecía un cumplido?": { PAP:4, TRL:3, NAR:2, RTS:1 },
  "¿Has dicho “qué raro…” insinuando que alguien hizo algo mal?": { PAP:4, TRL:3, NAR:2, DSC:1 },
  "¿Has dicho “todo el mundo dice que…” cuando no era cierto?": { PAP:4, RTS:3, NAR:2, DSC:1 },
  "¿Has dicho “te queda genial” cuando claramente no era así?": { PAP:4, TRL:3, NAR:2, RTS:1 },
  "¿Has soltado una indirecta esperando que alguien la entienda?": { PAP:4, RTS:3, NAR:2, DSC:1 },
  "¿Has dicho “no era por ti” justo después de lanzar una indirecta nuclear?": { PAP:4, TRL:3, RTS:2, NAR:1 },
  "¿Has fingido reír para cortar un chiste?": { PAP:4, DSC:3, RTS:2, TRL:1 },
  "¿Has dicho 'era sarcasmo' cuando no lo era?": { PAP:4, TRL:3, RTS:2, NAR:1 },
  "¿Has usado 'te lo digo por tu bien' antes de criticar?": { PAP:4, RTS:3, NAR:2, DSC:1 },

  // Preguntas de conveniencia, escaqueo y ventaja estratégica
  "¿Has dicho “te aviso” sabiendo que nunca avisarías?": { RTS:4, PAP:3, DSC:2, ANC:1 },
  "¿Has devuelto una llamada solo porque necesitabas algo?": { RTS:4, NAR:3, PAP:2, TRL:1 },
  "¿Has asentido fingiendo interés en una historia aburrida?": { RTS:4, DSC:3, PAP:2, NAR:1 },
  "¿Has cogido la última porción diciendo “si nadie la quiere…”?": { RTS:4, DSC:3, NAR:2, ANC:1 },
  "¿Has criticado algo que en realidad te gusta?": { RTS:4, NAR:3, ANC:2, DSC:1 },
  "¿Has culpado al tráfico aunque saliste tarde de casa?": { RTS:4, PAP:3, NAR:2, DSC:1 },
  "¿Has prometido algo que sabías que no cumplirías?": { RTS:4, PAP:3, NAR:2, TRL:1 },
  "¿Has puesto cara de inocente después de causar un pequeño caos?": { RTS:4, TRL:3, PAP:2, NAR:1 },
  "¿Has dejado que otro pague una cuenta que podríais haber dividido?": { RTS:4, DSC:3, PAP:2, NAR:1 },
  "¿Has aceptado comida gratis sin ofrecer pagar?": { RTS:4, DSC:3, NAR:2, PAP:1 },
  "¿Has fingido estar ocupado para evitar ayudar?": { RTS:4, PAP:3, DSC:2, NAR:1 },
  "¿Has cambiado de tema para evitar admitir un error?": { RTS:4, NAR:3, PAP:2, TRL:1 },
  "¿Has dicho “yo invito la próxima” esperando que nadie lo recuerde?": { RTS:4, PAP:3, NAR:2, DSC:1 },
  "¿Has visto una serie con alguien y luego seguiste viéndola sin esa persona?": { RTS:4, NAR:3, PAP:2, TRL:1 },
  "¿Has dicho “sí, claro” esperando que no te pidan hacerlo?": { RTS:4, PAP:3, DSC:2, NAR:1 },
  "¿Has pedido “una prueba” del postre y terminaste comiéndote medio plato?": { RTS:4, ANC:3, DSC:2, TRL:1 },
  "¿Has usado el cargador de alguien sin decir nada?": { RTS:4, DSC:3, ANC:2, NAR:1 },
  "¿Has dicho “yo me encargo” y luego desapareciste?": { RTS:4, WSP:3, DSC:2, PAP:1 },
  "¿Has respondido 'ya lo miraré' sabiendo que no lo harías?": { RTS:4, WSP:3, PAP:2, DSC:1 },
  "¿Has dejado que otro se lleve la culpa por algo tuyo?": { RTS:4, TRL:3, PAP:2, NAR:1 },

  // Preguntas de provocación, chisme y disfrute del caos ajeno
  "¿Has dicho “no me gusta la polémica” justo antes de crear una?": { TRL:4, ANC:3, NAR:2, PAP:1 },
  "¿Has hecho una broma a costa de alguien presente?": { TRL:4, PAP:3, ANC:2, DSC:1 },
  "¿Has repetido un chisme empezando por “no debería decir esto…”?": { TRL:4, PAP:3, DSC:2, ANC:1 },
  "¿Has soltado un spoiler sin avisar?": { TRL:4, PAP:3, DSC:2, ANC:1 },
  "¿Has dicho “no soy cotilla pero…” justo antes de cotillear?": { TRL:4, PAP:3, NAR:2, DSC:1 },
  "¿Has escuchado un chisme con mucho interés aunque fingías lo contrario?": { TRL:4, PAP:3, NAR:2, DSC:1 },
  "¿Has contado un secreto que te pidieron no contar?": { TRL:4, RTS:3, PAP:2, DSC:1 },
  "¿Has reenviado un pantallazo privado para reírte con otro grupo?": { TRL:4, WSP:3, PAP:2, RTS:1 },
  "¿Has disfrutado viendo discusiones absurdas en internet?": { TRL:4, PAP:3, DSC:2, NAR:1 },
  "¿Has seguido un drama online solo por morbo?": { TRL:4, PAP:3, DSC:2, NAR:1 },
  "¿Has metido cizaña entre dos personas y luego fingido sorpresa?": { TRL:4, PAP:3, RTS:2, NAR:1 },
  "¿Has disfrutado viendo cómo explotaba un drama ajeno?": { TRL:4, PAP:3, NAR:2, DSC:1 },
  "¿Has seguido mirando algo sabiendo que acabaría mal?": { TRL:4, PAP:3, DSC:2, NAR:1 },

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

const QUESTION_BANK = QUESTIONS.filter((question, index, allQuestions) => {
  return allQuestions.indexOf(question) === index
})

const TRAIT_PENITENCES = {
  NAR: [
    "Durante 2 horas, cada vez que hables de ti debes añadir: “pero bueno, tampoco soy tan importante” en voz alta.",
    "Graba un audio diciendo: “Hoy voy a intentar no ser el protagonista” y envíaselo a alguien random de tus chats.",
    "Cuenta una anécdota tuya… pero cambiando el protagonista a otra persona ficticia sin avisar."
  ],

  WSP: [
    "Responde a todos tus mensajes durante 1 hora empezando por “HE LEÍDO TU MENSAJE Y HE DECIDIDO RESPONDER” en mayúsculas.",
    "Envía un “sigo vivo” a 3 conversaciones que llevas ignorando días.",
    "Durante 30 minutos, cada respuesta tuya debe tardar EXACTAMENTE 17 segundos (ni uno más, ni uno menos)."
  ],

  DSC: [
    "Mantén contacto visual con alguien 2 segundos más de lo normal… y luego asiente lentamente.",
    "Empieza una conversación con: “No sé muy bien cómo empezar esto, pero aquí voy” y sigue sin explicar nada.",
    "Despídete de alguien… y vuelve a despedirte 10 segundos después como si nada."
  ],

  ANC: [
    "Pulsa el botón del ascensor una sola vez… y luego susurra “confío en ti” mientras lo miras.",
    "Deja pasar a alguien y haz un gesto exageradamente ceremonioso como si fueras un mayordomo.",
    "Si estás en un sitio público, recoloca algo torcido con total seriedad como si fuera una misión crítica."
  ],

  PAP: [
    "Di una frase completamente directa… y luego añade: “esto es raro para mí, lo sé”.",
    "Cuando vayas a lanzar una indirecta, sustitúyela por: “voy a decirlo sin drama:” y dilo.",
    "Responde a algo incómodo con total claridad… y luego quédate en silencio sin suavizarlo."
  ],

  RTS: [
    "Admite un error diciendo: “he intentado hacer ingeniería social… y no ha salido bien”.",
    "Haz un favor sin que te lo pidan… y cuando termines di en voz baja: “equilibrio restaurado”.",
    "Paga algo sin calcular… y murmura: “hoy no soy una rata”."
  ],

  TRL: [
    "Cuando veas un drama interesante, míralo fijamente y di: “no alimentaré esto”… y luego sal del chat.",
    "Si escuchas un chisme, responde: “esta información es demasiado poderosa para mí” y cállate.",
    "Cuando tengas una broma perfecta, sonríe, niega con la cabeza… y no la hagas."
  ]
};

const QUESTIONS_TO_SHOW = 15

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
  if (/(fingido|fingías|fingias|no sabías|no sabias|incomod|evitar saludar|escuchando)/.test(normalized)) add("DSC", 2)
  if (/(pasivo-agresivo|indirecta|no pasa nada|haz lo que quieras|jajaja|qué raro|que raro)/.test(normalized)) add("PAP", 2)
  if (/(colarte|pague|pagar|admitir un error|ambiguo|yo no fui|yo no dije eso|culpado al tráfico|trafico)/.test(normalized)) add("RTS", 2)
  if (/(spoiler|chisme|broma|tropezó|tropezo|caos|malvado|cotilla)/.test(normalized)) add("TRL", 2)

  const fallbackTraits = Object.keys(inferred).length > 0 ? inferred : { DSC: 1 }
  return normalizeQuestionTraitsToFullScale(fallbackTraits)
}

function getQuestionTraits(questionText) {
  return QUESTION_TRAITS[questionText] || inferQuestionTraits(questionText)
}

function getDominantTraitCode(questionText) {
  const questionTraits = getQuestionTraits(questionText)

  return Object.entries(questionTraits).reduce((bestTrait, [traitCode, points]) => {
    if (!bestTrait) return traitCode
    return points > questionTraits[bestTrait] ? traitCode : bestTrait
  }, null)
}

function getBalancedQuestionQuota(count = QUESTIONS_TO_SHOW) {
  const traitCodes = Object.keys(TRAITS)
  const quota = createEmptyTraitScores()
  const basePerTrait = Math.floor(count / traitCodes.length)
  let remaining = count - (basePerTrait * traitCodes.length)

  traitCodes.forEach((traitCode) => {
    quota[traitCode] = basePerTrait
  })

  shuffleArray([...traitCodes]).forEach((traitCode) => {
    if (remaining <= 0) return
    quota[traitCode] += 1
    remaining -= 1
  })

  return quota
}

function calculateTraitScores() {
  const rawScores = createEmptyTraitScores()
  const maxScores = createEmptyTraitScores()

  selectedQuestions.forEach((questionText, questionIndex) => {
    const questionTraits = getQuestionTraits(questionText)

    Object.entries(questionTraits).forEach(([traitCode, points]) => {
      maxScores[traitCode] += points
    })

    const multiplier = answersByIndex.get(questionIndex) || 0
    if (multiplier === 0) return

    Object.entries(questionTraits).forEach(([traitCode, points]) => {
      rawScores[traitCode] += points * multiplier
    })
  })

  const normalizedScores = Object.keys(rawScores).reduce((acc, traitCode) => {
    const ceiling = maxScores[traitCode]
    acc[traitCode] = ceiling > 0 ? (rawScores[traitCode] / ceiling) * 100 : 0
    return acc
  }, {})

  return { rawScores, maxScores, normalizedScores }
}

function getTopTraitCode(traitScores) {
  return Object.keys(traitScores).reduce((bestTrait, traitCode) => {
    if (!bestTrait) return traitCode
    return traitScores[traitCode] > traitScores[bestTrait] ? traitCode : bestTrait
  }, null)
}

function formatTraitBreakdown(traitScores) {
  return Object.entries(traitScores)
    .sort((a, b) => b[1] - a[1])
    .map(([code, score]) => ({
      code,
      label: TRAITS[code],
      score: `${score.toFixed(1)}%`
    }))
}

function renderTraitBreakdown(traitScores) {
  const breakdownItems = formatTraitBreakdown(traitScores)

  return `
    <div class="trait-breakdown-title">Perfil equilibrado por dimensiones:</div>
    <div class="trait-breakdown-lines">
      ${breakdownItems.map(({ label, score }) => `<div class="trait-breakdown-line"><span>${label}</span><strong>${score}</strong></div>`).join("")}
    </div>
  `
}

function renderPenitence(penitenceItems = []) {
  return `
    <div class="penitence-title">Tus tres penitencias oficiales:</div>
    <div class="penitence-lines">
      ${penitenceItems.map((item, index) => `<div class="penitence-line"><span class="penitence-number">${index + 1}.</span><span>${item}</span></div>`).join("")}
    </div>
  `
}

function formatPenitenceForShare(penitenceItems = []) {
  return penitenceItems.map((item, index) => `${index + 1}) ${item}`).join("\n")
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
      <text class="radar-score" x="${x.toFixed(2)}" y="${(y + 14).toFixed(2)}" text-anchor="${textAnchor}">${score.toFixed(1)}%</text>
    `
  }).join("")

  traitRadarNode.innerHTML = `
    <svg viewBox="0 0 ${size} ${size}" role="img" aria-label="Diagrama de estrella con afinidad equilibrada por dimensión">
      ${gridPolygons}
      ${axes}
      <polygon class="radar-shape" points="${dataPoints}" />
      ${labels}
    </svg>
  `
}

const TEST_URL = "https://vcastellar.github.io/testmaldad/"

function getShareMessage() {
  if (!currentResult) return ""

  return `Rasgo principal: ${currentResult.title}.
Penitencia impuesta:
${currentResult.penitenceForShare}
Haz el test: ${TEST_URL}`
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

  const groupedQuestions = QUESTION_BANK.reduce((acc, questionText) => {
    const dominantTraitCode = getDominantTraitCode(questionText)
    acc[dominantTraitCode] = acc[dominantTraitCode] || []
    acc[dominantTraitCode].push(questionText)
    return acc
  }, {})

  Object.values(groupedQuestions).forEach((questions) => shuffleArray(questions))

  const quota = getBalancedQuestionQuota(count)
  const selectedQuestionsSet = []

  Object.entries(quota).forEach(([traitCode, traitQuota]) => {
    const pool = groupedQuestions[traitCode] || []
    selectedQuestionsSet.push(...pool.slice(0, traitQuota))
  })

  if (selectedQuestionsSet.length < count) {
    const leftovers = Object.values(groupedQuestions)
      .flat()
      .filter((questionText) => !selectedQuestionsSet.includes(questionText))

    shuffleArray(leftovers)
    selectedQuestionsSet.push(...leftovers.slice(0, count - selectedQuestionsSet.length))
  }

  return shuffleArray(selectedQuestionsSet).slice(0, count)
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
    questionMetaNode.textContent = `Mostrando ${selectedQuestions.length} preguntas con reparto equilibrado entre categorías.`
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

  const { rawScores, maxScores, normalizedScores } = calculateTraitScores()
  const topTraitCode = getTopTraitCode(normalizedScores)
  const resultTitle = TRAITS[topTraitCode]
  const breakdown = formatTraitBreakdown(normalizedScores)
  const breakdownForShare = breakdown.map(({ label, score }) => `${label}: ${score}`).join("\n")
  const penitenceItems = TRAIT_PENITENCES[topTraitCode]
  const penitenceForShare = formatPenitenceForShare(penitenceItems)
  renderTraitRadar(normalizedScores)

  currentResult = {
    title: resultTitle,
    rawScores,
    maxScores,
    normalizedScores,
    breakdown,
    breakdownForShare,
    penitence: penitenceItems,
    penitenceForShare
  }

  resultNode.textContent = `Resultado dominante: ${resultTitle} (${normalizedScores[topTraitCode].toFixed(1)}% de afinidad)`
  const breakdownNode = document.querySelector("#traitBreakdown") || document.createElement("div")
  breakdownNode.id = "traitBreakdown"
  breakdownNode.innerHTML = renderTraitBreakdown(normalizedScores)
  resultNode.insertAdjacentElement("afterend", breakdownNode)

  penitenceNode.innerHTML = renderPenitence(currentResult.penitence)
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
