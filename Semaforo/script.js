const img = document.getElementById("img"); //Cria um variável, que agora vale o Id Img
const buttons = document.getElementById("buttons");
let colorIndex = 0; //Variável que representa a cor selecionada
let intervalId = null; //Variável que guarda o Id do modo automático do semáforo

const trafficLight = (event) =>{ //Função do evento
    stopAutomatic();
    turnOn[event.target.id](); //turnOn, evento ao clicar em determinada cor
}

const nextIndex = () =>{ //Muda o colorIndex, deixando-o em ordem
    if(colorIndex < 2){ //Se for menos que 2, (0 ou 1), entra no colorIndex+=
        colorIndex++ //Soma um ao valor da variável
    }else{ //Se não...
        colorIndex = 0; //Volta ao ciclo
    }
}

const changeColor = () =>{ //Troca das cores
    const cores = ["red", "yellow", "green"]; //Ordem das cores
    const color = cores[colorIndex];    //0 = Red, 1 = Yellow, 2 = Green
    turnOn[color](); //Muda a cor
    nextIndex(); //Faz o loop
}

const stopAutomatic = () =>{
    clearInterval(intervalId); //Para o modo automático do semáforo
}

const turnOn = { //Objeto que contém 3 funções, que ao clicar, executam o evento do semáforo
    "red": () => img.src = "./image/vermelho.png",
    "yellow": () => img.src = "./image/amarelo.png",
    "green": () => img.src = "./image/verde.png",
    "automatic": () => intervalId = setInterval(changeColor, 1000) //Executa o modo automático do semáforo a cada 1 segundo
}

buttons.addEventListener("click", trafficLight); //Adiciona o evento de clique, que ao ouvir, ativará a função trafficLight