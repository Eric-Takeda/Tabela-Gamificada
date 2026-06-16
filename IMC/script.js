const calcular = document.getElementById("calcular"); //Cria um variável inalterável com o valor do Id do HTML

function imc(){ //Criada uma função para calcular o IMC
    const nome = document.getElementById("nome").value; //.value acessar ou define um valor
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;
    const resultado = document.getElementById("resultado");

    if(nome !== "" && altura !== "" && peso !== ""){ //If = Se  !== = Diferente  && = E  Ou seja, Se tal variável for diferente de 0 e...
        
        const valorIMC = (peso/(altura * altura)).toFixed(2); //Variável que calcula o IMC, e arredonda as duas casas decimais

        let classificacao = ""; //Cria uma variável para a classificação do IMC, que pode ser alterada

        if(valorIMC < 18.5){ //Condição, se o IMC for menor que 18.5
            classificacao = "abaixo do peso."; //Será classificado como abaixo do peso
        }else if(valorIMC < 25){ //Senão for, então...
            classificacao = "com seu peso ideal. Parabéns.";
        }else if(valorIMC < 30){
            classificacao = "levemente acima do peso.";
        }else if(valorIMC < 35){
            classificacao = "com obesidade grau I";
        }else if(valorIMC < 40){
            classificacao = "com obesidade grau II";
        }else{
            classificacao = "com obesidade grau III. Cuidado!";
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`; //O que irá ser mostrado após o calculo, a crase permite o conteúdo e variável na mesma frase        
    }else{
        resultado.textContent = "Preencha todos os campos!!!" //Aparecerá caso aperte o botão "Calcular" e não ter preenchido algum dos campos
    }
}

calcular.addEventListener("click", imc); //Adiciona um evento de clique ao calcular