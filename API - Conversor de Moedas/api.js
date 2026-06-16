const moeda = document.getElementById("moeda");
const button = document.getElementById("button");
const display = document.getElementById("display");
const convertendo = document.getElementById("convertendo")
const convertido = document.getElementById("convertido")

const converter = async () => {
    const valor = moeda.value
    const convertendoMoeda = convertendo.value
    const convertidoMoeda = convertido.value
    const dado = await fetch(`https://api.frankfurter.app/latest?amount=${valor}&from=${convertendoMoeda}&to=${convertidoMoeda}`)
    
    const resultados = await dado.json()
    
    const valorConvertido = resultados.rates[convertidoMoeda]
    const base = resultados.base
    const data = resultados.date
       
    display.innerText = `${valor} = ${valorConvertido.toFixed(2)}, você converteu ${base} para ${convertidoMoeda}, atualizado no dia ${data}`
}

button.addEventListener("click", converter);