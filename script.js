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
  "¿Has repetido una foto veinte veces hasta que pareciera un anuncio de ti?",
  "¿Has contado un problema tuyo esperando que te dijeran “eres increíble por aguantar tanto”?",
  "¿Has mirado una foto de grupo y pensado primero “yo salgo bien, perfecto”?",

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
  "¿Has visto un mensaje largo y has decidido que tu yo del futuro cargue con eso?",
  "¿Has respondido “luego te cuento” para no contar absolutamente nada?",
  "¿Has visto una llamada venir y has esperado a que colgara para escribir “¿todo bien?”?",

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
  "¿Has empezado a hablar y te has dado cuenta a mitad de que nadie te estaba escuchando?",
  "¿Has intentado irte de un sitio con naturalidad y casi vuelves a entrar por la puerta equivocada?",
  "¿Has dicho un nombre con total seguridad y era otro completamente distinto?",

  // Preguntas de convivencia, espacio compartido y pequeñas anarquías
  "¿Has intentado colarte sutilmente en una fila?",
  "¿Has usado “solo es un momento” para justificar algo molesto?",
  "¿Has ocupado dos asientos en transporte público con tu mochila?",
  "¿Has abierto la nevera ajena y has opinado sin que te preguntaran?",
  "¿Has dejado una puerta abierta sabiendo que molestaba a alguien?",
  "¿Has ocupado un sitio “reservado” pensando que nadie lo usaría?",
  "¿Has dejado basura en un sitio público “porque ya estaba sucio”?",
  "¿Has hablado por teléfono en voz alta sin importar quién escuchaba?",
  "¿Has cambiado la música de todos sin preguntar porque la tuya era “mejor”?",
  "¿Has puesto el móvil con sonido en un lugar silencioso porque “será un segundo”?",
  "¿Has cogido sitio de más en el sofá como si fueras un emperador romano?",

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
  "¿Has dicho “vale, perfecto” cuando en realidad estabas abriendo una lista mental de agravios?",
  "¿Has soltado un “qué valiente” que sonaba a elogio pero era veneno?",
  "¿Has rematado un mensaje borde con un “😊” para fingir paz diplomática?",

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
  "¿Has ido a comprar con gente y te has esfumado justo al repartir las bolsas?",
  "¿Has dicho “luego te hago Bizum” esperando que la historia muriera ahí?",
  "¿Has ofrecido ayuda cuando ya estaba casi todo hecho?",

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
  "¿Has enseñado un mensaje privado a alguien solo para decir “mira esta joya”?",
  "¿Has preguntado “qué ha pasado” sabiendo que eso iba a reactivar todo el drama?",
  "¿Has enviado un “uff” a un chat solo para que todos preguntaran qué pasaba?",

]
const TRAITS = {
  NAR: "Narcisista compulsivo",
  ADD: "Agente del Desorden Digital",
  DSC: "Desastre social certificado",
  FRC: "Freelance de la convivencia",
  PAP: "Pasivo-agresivo profesional",
  RTS: "Rata estratégica",
  TRL: "Troll doméstico"
}

const TRAIT_PROFILES = {
  NAR: {
    emoji: "🪞",
    shortCode: "NAR",
    title: "Narcisista compulsivo",
    summary: "Eres el protagonista de todas las conversaciones… aunque nadie te haya dado ese papel.",
    description: [
      "No escuchas, esperas tu turno para hablar de ti.",
      "Si algo pasa, tienes una versión mejor, más épica o más tuya.",
      "Tu autoestima depende ligeramente de likes, atención y microvalidaciones constantes.",
      "No manipulas la realidad… la editas para que encaje contigo como personaje principal."
    ],
    characteristics: [
      "Interrumpes con naturalidad quirúrgica.",
      "Exageras sin sentir que exageras.",
      "Necesitas cerrar historias con “yo ya lo dije”."
    ],
    catchphrase: "“No quiero ser el centro de atención… pero…”"
  },
  WSP: {
    emoji: "👻",
    shortCode: "ADD",
    title: "Agente del Desorden Digital",
    summary: "No discutes, no afrontas, no aclaras… gestionas conflictos desapareciendo como un profesional.",
    description: [
      "Tu chat es un campo de minas: entras, no respondes; lees, ignoras; prometes, no cumples.",
      "Tu especialidad es generar ansiedad digital sin decir ni una palabra.",
      "No eres mala persona… pero emocionalmente eres un “ya si eso luego” constante."
    ],
    characteristics: [
      "“Perdón por contestar tarde” (mentira).",
      "Ghosting suave, elegante y sostenido.",
      "Respuestas mínimas para cerrar temas incómodos."
    ],
    catchphrase: "“Acabo de ver esto” (estabas online toda la tarde)"
  },
  DSC: {
    emoji: "🫠",
    shortCode: "DSC",
    title: "Desastre social certificado",
    summary: "Eres la prueba viviente de que interactuar con humanos no es una habilidad garantizada.",
    description: [
      "No generas incomodidad a propósito… pero te sale natural.",
      "Cada interacción es un pequeño experimento social fallido.",
      "No eres torpe… eres consistentemente inoportuno."
    ],
    characteristics: [
      "Dices “igualmente” cuando no toca.",
      "Haces contacto visual raro.",
      "Te quedas atrapado en conversaciones sin saber salir."
    ],
    catchphrase: "“Bueno… jaja… en fin…” (silencio incómodo)"
  },
  FRCC: {
    emoji: "🚧",
    shortCode: "FRC",
    title: "Freelance de la convivencia",
    summary: "No rompes las normas… las ignoras con una confianza admirable.",
    description: [
      "Tu filosofía es: “si puedo hacerlo, lo hago… y ya si eso luego vemos”.",
      "Te cuelas, ocupas espacio de más y tomas libertades que nadie te dio.",
      "No buscas conflicto… pero eres una fuente constante de micro-caos social."
    ],
    characteristics: [
      "“Solo es un momento” (nunca lo es).",
      "Usas cosas ajenas sin preguntar.",
      "Conviertes lo común en ligeramente incómodo."
    ],
    catchphrase: "“Bah, tampoco es para tanto”"
  },
  PAP: {
    emoji: "🐍",
    shortCode: "PAP",
    title: "Pasivo-agresivo profesional",
    summary: "No atacas de frente… disparas con indirectas envueltas en educación.",
    description: [
      "Eres el rey del “no pasa nada” (sí pasa), “haz lo que quieras” (pero haz lo correcto) y “te lo digo por tu bien” (nadie lo pidió).",
      "No dices las cosas claras… pero consigues que el otro se sienta mal igual.",
      "Tu comunicación es ambigua por diseño."
    ],
    characteristics: [
      "Sarcasmo mal disimulado.",
      "Comentarios con doble capa.",
      "Indirectas que luego niegas."
    ],
    catchphrase: "“Yo no digo nada, eh…”"
  },
  RTS: {
    emoji: "🧠",
    shortCode: "RTS",
    title: "Rata estratégica",
    summary: "No eres egoísta… eres eficiente con tus propios intereses.",
    description: [
      "Siempre encuentras la forma de esforzarte menos, salir mejor y pagar menos (o nada).",
      "No engañas… optimizas la situación hasta que deja de ser justa.",
      "Tu moral no es mala… es flexible cuando conviene."
    ],
    characteristics: [
      "Promesas que desaparecen.",
      "Ayudas selectivas.",
      "Excusas perfectamente funcionales."
    ],
    catchphrase: "“Sí sí, yo lo hago luego”"
  },
  TRL: {
    emoji: "🔥",
    shortCode: "TRL",
    title: "Troll doméstico",
    summary: "No generas drama… lo detectas, lo alimentas y lo disfrutas.",
    description: [
      "Eres ese pequeño empujón que convierte tensión en incendio.",
      "Sueltas comentarios “sin querer”, difundes cosas “sin mala intención” y observas el caos con curiosidad científica.",
      "No eres el problema… pero sin ti habría menos espectáculo."
    ],
    characteristics: [
      "“No debería decir esto…” (lo dices).",
      "Te encanta el salseo.",
      "Disfrutas viendo cómo escala algo."
    ],
    catchphrase: "“Yo no quiero lío, pero…”"
  }
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
  // Ego / protagonismo (NAR dominante)
  "¿Has interrumpido a alguien para contar tu propia historia?": { NAR:4, DSC:1 },
  "¿Has exagerado una historia para que parezca mejor?": { NAR:4, PAP:2 },
  "¿Has fingido que sabías algo que en realidad no tenías ni idea?": { NAR:4, PAP:2 },
  "¿Has soltado un “yo ya lo dije” después de que algo saliera mal?": { NAR:4, RTS:2 },
  "¿Has dicho “solo una cosa rápida” y luego hablaste diez minutos?": { NAR:4, DSC:1 },
  "¿Has contado una historia exagerando tu papel heroico?": { NAR:4, PAP:2 },
  "¿Has omitido un detalle importante para parecer más listo?": { NAR:4, RTS:2 },
  "¿Has subido una story triste esperando mensajes de “¿qué te pasa?”?": { NAR:4, WSP:2 },
  "¿Has mirado quién dio like antes de decidir si darlo tú también?": { NAR:4, PAP:1 },
  "¿Has corregido algo en Google solo para tener razón?": { NAR:4 },
  "¿Has respondido tarde a propósito para parecer más importante?": { NAR:4, WSP:2 },
  "¿Has contado algo esperando impresionar?": { NAR:4, PAP:2 },
  "¿Has pensado que alguien hablaba demasiado mientras tú hacías lo mismo?": { NAR:4, DSC:1 },
  "¿Has dicho 'no soy experto pero…' antes de opinar con seguridad?": { NAR:4, PAP:1 },
  "¿Has hecho una pregunta solo para poder hablar tú después?": { NAR:4 },
  "¿Publicas selfies haciendo morritos?": { NAR:4, DSC:1 },
  "¿Publicas en Instagram tu tostada de aguacate?": { NAR:4, PAP:1 },
  "¿Has repetido una foto veinte veces hasta que pareciera un anuncio de ti?": { NAR:4, DSC:1 },
  "¿Has contado un problema tuyo esperando que te dijeran “eres increíble por aguantar tanto”?": { NAR:4, PAP:2 },
  "¿Has mirado una foto de grupo y pensado primero “yo salgo bien, perfecto”?": { NAR:4, DSC:2 },

  // Evasión / ghosting (WSP dominante)
  "¿Has mirado el móvil para evitar una conversación incómoda?": { WSP:4, DSC:1 },
  "¿Has respondido con un meme para evitar una conversación seria?": { WSP:4, PAP:1 },
  "¿Has dicho “salgo ya” cuando aún estabas en pijama?": { WSP:4, RTS:2 },
  "¿Has enviado “perdón por contestar tarde” mientras estabas en línea todo el día?": { WSP:4, RTS:2 },
  "¿Has enviado un 'ok' seco para cerrar una conversación incómoda?": { WSP:4, PAP:2 },
  "¿Has dejado una conversación grupal cuando se volvió incómoda?": { WSP:4, DSC:1 },
  "¿Has soltado una bomba en un chat y luego lo silenciaste?": { WSP:4, TRL:2 },
  "¿Has dejado de responder esperando que el problema desaparezca?": { WSP:4 },
  "¿Has respondido con un GIF para no pensar una respuesta?": { WSP:4, PAP:1 },
  "¿Has visto un mensaje importante y decidiste contestar 'luego'… y nunca llegó?": { WSP:4, RTS:2 },
  "¿Has silenciado a alguien para no tener que interactuar con él?": { WSP:4 },
  "¿Has entrado en línea para otra cosa pero evitaste responder a alguien?": { WSP:4, RTS:1 },
  "¿Has visto un mensaje largo y has decidido que tu yo del futuro cargue con eso?": { WSP:4, PAP:1 },
  "¿Has respondido “luego te cuento” para no contar absolutamente nada?": { WSP:4, PAP:2 },
  "¿Has visto una llamada venir y has esperado a que colgara para escribir “¿todo bien?”?": { WSP:4, DSC:1 },

  // Torpeza social (DSC dominante)
  "¿Has cruzado la calle para evitar una conversación incómoda?": { DSC:4, WSP:2 },
  "¿Has saludado a alguien que no te estaba saludando a ti?": { DSC:4 },
  "¿Has intentado salir de una conversación y te quedaste atrapado más tiempo?": { DSC:4, WSP:2 },
  "¿Has hecho contacto visual incómodo demasiado tiempo?": { DSC:4 },
  "¿Has dicho algo y te arrepentiste justo después de decirlo?": { DSC:4, PAP:1 },
  "¿Has fingido que entendías un chiste y remataste con una risa fuera de tiempo?": { DSC:4 },
  "¿Has respondido “igualmente” cuando no tocaba?": { DSC:4 },
  "¿Has hecho el baile incómodo de saludo (dos besos vs mano)?": { DSC:4 },
  "¿Has empujado una puerta que decía “tirar”?": { DSC:4 },
  "¿Has llamado “mamá” o “profe” a alguien que no lo era?": { DSC:4 },
  "¿Has dicho “tú también” al camarero?": { DSC:4 },
  "¿Has empezado a hablar y te has dado cuenta a mitad de que nadie te estaba escuchando?": { DSC:4 },
  "¿Has intentado irte de un sitio con naturalidad y casi vuelves a entrar por la puerta equivocada?": { DSC:4, NAR:1 },
  "¿Has dicho un nombre con total seguridad y era otro completamente distinto?": { DSC:4, WSP:1 },

  // Convivencia / anarquía (ANC dominante)
  "¿Has intentado colarte sutilmente en una fila?": { ANC:4, RTS:2 },
  "¿Has usado “solo es un momento” para justificar algo molesto?": { ANC:4, RTS:2 },
  "¿Has ocupado dos asientos con tu mochila?": { ANC:4, DSC:1 },
  "¿Has abierto la nevera ajena y opinado?": { ANC:4, NAR:1 },
  "¿Has dejado una puerta abierta sabiendo que molestaba?": { ANC:4 },
  "¿Has ocupado un sitio “reservado”?": { ANC:4, RTS:2 },
  "¿Has dejado basura “porque ya estaba sucio”?": { ANC:4, RTS:2 },
  "¿Has hablado por teléfono en voz alta sin importar?": { ANC:4, NAR:1 },
  "¿Has cambiado la música de todos sin preguntar porque la tuya era “mejor”?": { ANC:4, NAR:2 },
  "¿Has puesto el móvil con sonido en un lugar silencioso porque “será un segundo”?": { ANC:4, RTS:2 },
  "¿Has cogido sitio de más en el sofá como si fueras un emperador romano?": { ANC:4, DSC:1 },

  // Pasivo-agresivo (PAP dominante)
  "¿Has respondido “qué pena” sin sentirlo?": { PAP:4 },
  "¿Has hecho un comentario sarcástico que no se entendió?": { PAP:4, TRL:1 },
  "¿Has hecho un comentario pasivo-agresivo?": { PAP:4 },
  "¿Has enviado un mensaje ambiguo para que otro lo interprete?": { PAP:4, RTS:2 },
  "¿Has dicho “qué ilusión verte” sin sentirlo?": { PAP:4 },
  "¿Has dicho “no pasa nada” esperando que sí pase algo?": { PAP:4, RTS:2 },
  "¿Has dicho “haz lo que quieras” esperando que no lo hagan?": { PAP:4, RTS:2 },
  "¿Has hecho una broma que parecía cumplido pero no lo era?": { PAP:4, TRL:2 },
  "¿Has dicho “qué raro…” insinuando algo?": { PAP:4 },
  "¿Has dicho “todo el mundo dice que…” sin ser verdad?": { PAP:4, RTS:2 },
  "¿Has dicho “te queda genial” sin ser cierto?": { PAP:4 },
  "¿Has soltado una indirecta esperando que la pillen?": { PAP:4 },
  "¿Has dicho “no era por ti” tras una indirecta clara?": { PAP:4, TRL:1 },
  "¿Has fingido reír para cortar un chiste?": { PAP:4 },
  "¿Has dicho 'era sarcasmo' cuando no lo era?": { PAP:4 },
  "¿Has usado 'te lo digo por tu bien' antes de criticar?": { PAP:4, RTS:1 },
  "¿Has dicho “vale, perfecto” cuando en realidad estabas abriendo una lista mental de agravios?": { PAP:4, RTS:1 },
  "¿Has soltado un “qué valiente” que sonaba a elogio pero era veneno?": { PAP:4, TRL:1 },
  "¿Has rematado un mensaje borde con un “😊” para fingir paz diplomática?": { PAP:4, WSP:1 },

  // Conveniencia / egoísmo estratégico (RTS dominante)
  "¿Has dicho “te aviso” sabiendo que no lo harías?": { RTS:4, PAP:2 },
  "¿Has devuelto una llamada solo porque necesitabas algo?": { RTS:4, NAR:2 },
  "¿Has fingido interés en una historia aburrida?": { RTS:4, DSC:1 },
  "¿Has cogido la última porción con excusa?": { RTS:4, ANC:2 },
  "¿Has criticado algo que en realidad te gusta?": { RTS:4, NAR:2 },
  "¿Has culpado al tráfico aunque saliste tarde?": { RTS:4, PAP:2 },
  "¿Has prometido algo que no cumplirías?": { RTS:4, PAP:2 },
  "¿Has puesto cara de inocente tras liarla?": { RTS:4, TRL:1 },
  "¿Has dejado que otro pague sin ofrecer?": { RTS:4 },
  "¿Has aceptado comida gratis sin ofrecer pagar?": { RTS:4 },
  "¿Has fingido estar ocupado para evitar ayudar?": { RTS:4, PAP:2 },
  "¿Has cambiado de tema para no admitir error?": { RTS:4, NAR:2 },
  "¿Has dicho “yo invito la próxima” esperando que se olvide?": { RTS:4, PAP:2 },
  "¿Has seguido una serie sin la persona con la que la veías?": { RTS:4 },
  "¿Has dicho “sí claro” esperando no hacerlo?": { RTS:4, PAP:2 },
  "¿Has pedido “una prueba” y comido medio plato?": { RTS:4, ANC:2 },
  "¿Has usado el cargador de alguien sin decir nada?": { RTS:4, ANC:1 },
  "¿Has dicho “yo me encargo” y desaparecido?": { RTS:4, WSP:2 },
  "¿Has dicho 'ya lo miraré' sabiendo que no lo harías?": { RTS:4, WSP:2 },
  "¿Has dejado que otro cargue con tu culpa?": { RTS:4, TRL:2 },
  "¿Has ido a comprar con gente y te has esfumado justo al repartir las bolsas?": { RTS:4, ANC:1 },
  "¿Has dicho “luego te hago Bizum” esperando que la historia muriera ahí?": { RTS:4, ANC:2 },
  "¿Has ofrecido ayuda cuando ya estaba casi todo hecho?": { RTS:4, PAP:1 },

  // Troll / caos / drama (TRL dominante)
  "¿Has dicho “no me gusta la polémica” justo antes de crear una?": { TRL:4, PAP:1 },
  "¿Has hecho una broma a costa de alguien presente?": { TRL:4, PAP:2 },
  "¿Has repetido un chisme con “no debería decir esto…”?": { TRL:4 },
  "¿Has soltado un spoiler sin avisar?": { TRL:4 },
  "¿Has dicho “no soy cotilla pero…” antes de cotillear?": { TRL:4 },
  "¿Has escuchado un chisme con interés fingiendo lo contrario?": { TRL:4, PAP:1 },
  "¿Has contado un secreto que te pidieron guardar?": { TRL:4, RTS:2 },
  "¿Has reenviado un pantallazo privado?": { TRL:4, WSP:1 },
  "¿Has disfrutado viendo discusiones absurdas online?": { TRL:4 },
  "¿Has seguido un drama solo por morbo?": { TRL:4 },
  "¿Has metido cizaña y luego fingido sorpresa?": { TRL:4, PAP:2 },
  "¿Has disfrutado viendo explotar un drama ajeno?": { TRL:4 },
  "¿Has seguido mirando algo sabiendo que acabaría mal?": { TRL:4 },
  "¿Has enseñado un mensaje privado a alguien solo para decir “mira esta joya”?": { TRL:4, PAP:1 },
  "¿Has preguntado “qué ha pasado” sabiendo que eso iba a reactivar todo el drama?": { TRL:4, PAP:2 },
  "¿Has enviado un “uff” a un chat solo para que todos preguntaran qué pasaba?": { TRL:4, PAP:1 }
};
// ------------------------------
// Normalización conservadora
// ------------------------------

function normalizeQuestionTraitsToFullScale(traits) {
  const maxWeight = Math.max(...Object.values(traits))
  const normalized = {}

  if (!Number.isFinite(maxWeight) || maxWeight <= 0) {
    return { ...traits }
  }

  // Si la pregunta ya está definida dentro de una escala razonable, mantenemos
  // los pesos originales para no inflar rasgos secundarios y no suavizar tanto
  // la diferencia entre categorías.
  if (maxWeight <= 5) {
    return { ...traits }
  }

  Object.entries(traits).forEach(([trait, weight]) => {
    normalized[trait] = Math.max(1, Number(((weight / maxWeight) * 5).toFixed(2)))
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

  ADD: [
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

const QUESTIONS_PER_TRAIT_BLOCK = 3
const TRAIT_CODES = Object.keys(TRAITS)
const QUESTIONS_TO_SHOW = TRAIT_CODES.length * QUESTIONS_PER_TRAIT_BLOCK

const questionsContainer = document.querySelector("#questions")
const startBtn = document.querySelector("#startBtn")
const submitBtn = document.querySelector("#submitBtn")
const quizSection = document.querySelector("#quiz")
const resultSection = document.querySelector("#resultSection")
const resultNode = document.querySelector("#result")
const primaryTraitDetailsNode = document.querySelector("#primaryTraitDetails")
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
  return TRAIT_CODES.reduce((acc, key) => {
    acc[key] = 0
    return acc
  }, {})
}

function canonicalizeQuestionText(questionText) {
  return questionText
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/\.\.\./g, "…")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
}

const DEFAULT_QUESTION_TRAITS = { DSC: 1 }
const MAX_AFFIRMATIVE_MULTIPLIER = Math.max(...ANSWERS.map(({ multiplier }) => multiplier))
const CANONICAL_QUESTION_TRAITS = Object.fromEntries(
  Object.entries(QUESTION_TRAITS).map(([questionText, traits]) => [canonicalizeQuestionText(questionText), traits])
)
const INDEX_ALIGNED_QUESTION_TRAITS = Object.fromEntries(
  QUESTIONS.map((questionText, index) => {
    const indexFallbackTraits = Object.values(QUESTION_TRAITS)[index]
    const resolvedTraits = QUESTION_TRAITS[questionText]
      || CANONICAL_QUESTION_TRAITS[canonicalizeQuestionText(questionText)]
      || indexFallbackTraits
      || DEFAULT_QUESTION_TRAITS

    return [questionText, resolvedTraits]
  })
)

function getQuestionTraits(questionText) {
  return QUESTION_TRAITS[questionText]
    || CANONICAL_QUESTION_TRAITS[canonicalizeQuestionText(questionText)]
    || INDEX_ALIGNED_QUESTION_TRAITS[questionText]
    || DEFAULT_QUESTION_TRAITS
}

function getDominantTraitCode(questionText) {
  const questionTraits = getQuestionTraits(questionText)

  return Object.entries(questionTraits).reduce((bestTrait, [traitCode, points]) => {
    if (!bestTrait) return traitCode
    return points > questionTraits[bestTrait] ? traitCode : bestTrait
  }, null)
}

function getTraitQuestionGroups() {
  return QUESTION_BANK.reduce((acc, questionText) => {
    const dominantTraitCode = getDominantTraitCode(questionText)
    acc[dominantTraitCode] = acc[dominantTraitCode] || []
    acc[dominantTraitCode].push(questionText)
    return acc
  }, {})
}

function calculateTraitScores() {
  const rawScores = createEmptyTraitScores()
  const maxScores = createEmptyTraitScores()

  selectedQuestions.forEach((questionText, questionIndex) => {
    const questionTraits = getQuestionTraits(questionText)

    Object.entries(questionTraits).forEach(([traitCode, points]) => {
      maxScores[traitCode] += points * MAX_AFFIRMATIVE_MULTIPLIER
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

function buildTraitBreakdownItems(traitScores) {
  return Object.entries(traitScores)
    .sort((a, b) => b[1] - a[1])
    .map(([code, score]) => ({
      code,
      label: TRAITS[code],
      score: `${score.toFixed(1)}%`
    }))
}

function renderTraitBreakdown(traitScores) {
  const breakdownItems = buildTraitBreakdownItems(traitScores)

  return `
    <div class="trait-breakdown-title">Perfil equilibrado por dimensiones:</div>
    <div class="trait-breakdown-lines">
      ${breakdownItems.map(({ label, score }) => `<div class="trait-breakdown-line"><span>${label}</span><strong>${score}</strong></div>`).join("")}
    </div>
  `
}

function renderPrimaryTraitDetails(traitCode, score) {
  const traitProfile = TRAIT_PROFILES[traitCode]

  if (!traitProfile) return ""

  return `
    <article class="primary-trait-card" aria-label="Características principales del rasgo dominante">
      <div class="primary-trait-header">
        <p class="primary-trait-kicker">Rasgo principal obtenido</p>
        <h3>${traitProfile.emoji} ${traitProfile.shortCode} — ${traitProfile.title}</h3>
        <p class="primary-trait-score">Afinidad estimada: <strong>${score.toFixed(1)}%</strong></p>
      </div>
      <p class="primary-trait-summary">${traitProfile.summary}</p>
      <div class="primary-trait-copy">
        ${traitProfile.description.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      </div>
      <div class="primary-trait-features">
        <div class="primary-trait-features-title">Características principales:</div>
        <ul>
          ${traitProfile.characteristics.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </div>
      <p class="primary-trait-quote"><span>Frase típica:</span> ${traitProfile.catchphrase}</p>
    </article>
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

  const traitProfile = TRAIT_PROFILES[currentResult.topTraitCode]
  const summary = traitProfile?.summary || "Descubre mi rasgo principal en el test."

  return `Mi resultado en el test:
El rasgo principal: *${currentResult.title}*
Perfil del rasgo principal: ${summary}
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

function pickRandomQuestions() {
  const groupedQuestions = getTraitQuestionGroups()
  const selectedQuestionsSet = []

  TRAIT_CODES.forEach((traitCode) => {
    const pool = shuffleArray([...(groupedQuestions[traitCode] || [])])

    if (pool.length < QUESTIONS_PER_TRAIT_BLOCK) {
      throw new Error(`No hay suficientes preguntas para el rasgo ${traitCode}.`)
    }

    selectedQuestionsSet.push(...pool.slice(0, QUESTIONS_PER_TRAIT_BLOCK))
  })

  return shuffleArray(selectedQuestionsSet)
}

function resetQuizState() {
  selectedQuestions = pickRandomQuestions()
  answersByIndex = new Map()
  quizLocked = false
  currentResult = null
  questionsContainer.innerHTML = ""
}

function createQuestionTitle(questionText, questionIndex) {
  const title = document.createElement("p")
  const dominantTraitCode = getDominantTraitCode(questionText)
  title.textContent = `${questionIndex + 1}. [${dominantTraitCode}] ${questionText}`
  return title
}

function createAnswerButton(questionIndex, answer) {
  const button = document.createElement("button")
  button.type = "button"
  button.className = "answer-btn"
  button.textContent = answer.label
  button.addEventListener("click", () => handleAnswer(questionIndex, answer.multiplier, button))
  return button
}

function createQuestionCard(questionText, questionIndex) {
  const card = document.createElement("article")
  card.className = "question"
  card.dataset.index = String(questionIndex)

  const answersWrapper = document.createElement("div")
  answersWrapper.className = "answers"
  ANSWERS.forEach((answer) => {
    answersWrapper.appendChild(createAnswerButton(questionIndex, answer))
  })

  card.appendChild(createQuestionTitle(questionText, questionIndex))
  card.appendChild(answersWrapper)

  return card
}

function renderQuestions() {
  if (questionMetaNode) {
    questionMetaNode.textContent = `Mostrando ${selectedQuestions.length} preguntas: ${QUESTIONS_PER_TRAIT_BLOCK} aleatorias por cada rasgo.`
  }

  const questionCards = selectedQuestions.map((questionText, questionIndex) => createQuestionCard(questionText, questionIndex))
  questionCards.forEach((card) => questionsContainer.appendChild(card))

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

function buildQuizResult(scoreSummary) {
  const { rawScores, maxScores, normalizedScores } = scoreSummary
  const topTraitCode = getTopTraitCode(normalizedScores)
  const resultTitle = TRAITS[topTraitCode]
  const breakdown = buildTraitBreakdownItems(normalizedScores)
  const penitenceItems = TRAIT_PENITENCES[topTraitCode]

  return {
    title: resultTitle,
    topTraitCode,
    rawScores,
    maxScores,
    normalizedScores,
    breakdown,
    breakdownForShare: breakdown.map(({ label, score }) => `${label}: ${score}`).join("\n"),
    penitence: penitenceItems,
    penitenceForShare: formatPenitenceForShare(penitenceItems)
  }
}

function renderResultBreakdown(traitScores) {
  const breakdownNode = document.querySelector("#traitBreakdown") || document.createElement("div")
  breakdownNode.id = "traitBreakdown"
  breakdownNode.innerHTML = renderTraitBreakdown(traitScores)
  resultNode.insertAdjacentElement("afterend", breakdownNode)
}

function setShareHandlers() {
  document.querySelector("#shareWhatsapp").onclick = shareWhatsApp
  document.querySelector("#shareFacebook").onclick = shareFacebook
  document.querySelector("#shareInstagram").onclick = shareInstagram
}

function renderQuizResult() {
  const { topTraitCode, title, normalizedScores, penitence } = currentResult

  resultNode.textContent = `Resultado dominante: ${title} (${normalizedScores[topTraitCode].toFixed(1)}% de afinidad)`

  if (primaryTraitDetailsNode) {
    primaryTraitDetailsNode.innerHTML = renderPrimaryTraitDetails(topTraitCode, normalizedScores[topTraitCode])
  }

  renderResultBreakdown(normalizedScores)
  penitenceNode.innerHTML = renderPenitence(penitence)
  renderTraitRadar(normalizedScores)
  resultSection.classList.remove("hidden")
  setShareHandlers()

  requestAnimationFrame(() => {
    resultSection.scrollIntoView({ behavior: "smooth", block: "start" })
  })
}

function finishQuiz(trigger = "submit") {
  // Solo permitimos calcular resultados al enviar el cuestionario completo.
  // Esto evita atajos de "resultado inmediato" al responder afirmativamente.
  if (trigger !== "submit") return

  quizLocked = true
  disableRemainingQuestions()
  updateSubmitButton()

  currentResult = buildQuizResult(calculateTraitScores())
  renderQuizResult()
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
