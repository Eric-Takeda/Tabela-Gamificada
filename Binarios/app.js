const botao = document.getElementById("button")
const input = document.getElementById("input")
const display = document.getElementById("display")
function CalculoNumeroBinario(){
    let numeroNatural = Number(input.value)

    if(input.value === ""){
        display.innerText = "Digite um número"
        return
    }

    if(numeroNatural === 0){
        display.innerText = "0"
        return
    }

    let numeroBinario = []
    while(numeroNatural >= 1){

        numeroBinario.unshift(numeroNatural % 2)
        numeroNatural = Math.trunc(numeroNatural / 2)
    }
    const resultado = numeroBinario.join("")
    display.innerText = resultado
}

botao.addEventListener("click", CalculoNumeroBinario)