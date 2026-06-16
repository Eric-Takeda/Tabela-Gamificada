"use strict"

window.addEventListener("load", function () {

    let btn = document.getElementById("botao");

    btn.addEventListener("click", function () {

        let registro = document.getElementById("v1").value;
        let nome = document.getElementById("v2").value;
        let salario = Number(document.getElementById("v3").value);

        let resultado = 0;
        let percent = 0;

        if (salario >= 4664.68) {
            percent = 0.275;

        } else if (salario >= 3751.06) {
            percent = 0.225;

        } else if (salario >= 2866.66) {
            percent = 0.15;

        } else if (salario >= 2259.21) {
            percent = 0.075;
        }

        resultado = salario * percent;

        document.getElementById("impostoResultado").value =
            `R$ ${resultado.toFixed(2)}`;

        let texto = document.getElementById("texto");

        texto.innerHTML += `
            <div>
                <hr><br>

                Registro: <b>${registro}</b><br>
                Nome: <b>${nome}</b><br>
                Salário: <b>R$ ${salario.toFixed(2)}</b><br>
                Imposto: <b>R$ ${resultado.toFixed(2)}</b><br>
                Alíquota: <b>${percent * 100}%</b>

            </div>
        `;
    });
});