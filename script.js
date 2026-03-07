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
"¿Aplaudes cuando aterriza el avión?",
"¿Has visto una serie sin esperar a alguien?",
"¿Dejas el microondas del trabajo sucio?",
"¿Has abierto snacks ruidosamente en el cine?",
"¿Miras el móvil mientras alguien habla contigo?",
"¿Usas contraseñas tipo 123456?",
"¿Envías audios de WhatsApp de más de 2 minutos?",
"¿Corriges la gramática de desconocidos en internet?",
"¿Has dicho 'luego lo miro' sin intención de hacerlo?"
]

let score = 0

const container = document.getElementById("questions")

questions.forEach((q,i)=>{

const div = document.createElement("div")
div.className="question"

div.innerHTML = `
<p>${i+1}. ${q}</p>
<div class="answers">
<button onclick="answer(${i},10)">Sí</button>
<button onclick="answer(${i},5)">A veces</button>
<button onclick="answer(${i},0)">No</button>
</div>
`

container.appendChild(div)

})

function answer(id,points){
score+=points
document.getElementsByClassName("question")[id].style.opacity="0.4"
}

document.getElementById("startBtn").onclick=()=>{
document.getElementById("quiz").classList.remove("hidden")
document.getElementById("startBtn").style.display="none"
}

document.getElementById("submitBtn").onclick=showResult

function showResult(){

document.getElementById("quiz").classList.add("hidden")
document.getElementById("resultSection").classList.remove("hidden")

let category=""
let penitence=""

if(score<=30){
category="😇 Humano Decente"
penitence="Debes vigilar. Nadie es perfecto."
}

else if(score<=60){
category="😈 Pecador Leve"
penitence="Devuelve 1 carrito de supermercado abandonado."
}

else if(score<=100){
category="👿 Villano Cotidiano"
penitence="Escucha un audio de WhatsApp de 3 minutos sin acelerar."
}

else if(score<=150){
category="🧨 Amenaza Social"
penitence="Devuelve 10 carritos del supermercado y deja pasar a alguien en el tráfico."
}

else{
category="💀 Supervillano Absoluto"
penitence="Escucha reguetón durante 30 minutos y pide perdón al microondas de la oficina."
}

const resultText=`Tu puntuación de maldad es ${score}. <br><strong>${category}</strong>`

document.getElementById("result").innerHTML=resultText
document.getElementById("penitence").innerHTML=penitence

setupShare(resultText,penitence)

}

function setupShare(result,penitence){

const text=`Mi nivel de maldad es: ${result}. Penitencia: ${penitence}`

document.getElementById("shareWhatsapp").onclick=()=>{
window.open(`https://wa.me/?text=${encodeURIComponent(text)}`)
}

document.getElementById("shareFacebook").onclick=()=>{
window.open(`https://www.facebook.com/sharer/sharer.php?u=&quote=${encodeURIComponent(text)}`)
}

document.getElementById("shareInstagram").onclick=()=>{
alert("Instagram no permite compartir directamente enlaces. Copia tu resultado y compártelo en una historia 😈")
}

}
