const editor = CodeMirror.fromTextArea(

    document.getElementById("code"),

    {
        mode:"text/x-csrc",

        theme:"material",

        lineNumbers:true,

        lineWrapping:true
    }
);

// código padrão
editor.setValue(

`#include <stdio.h>

int main() {

    printf("Olá C!");

    return 0;
}`
);

document
.getElementById("run-btn")
.addEventListener("click", runCode);

async function runCode(){

    const code = editor.getValue();

    const output =
        document.getElementById("output");

    output.textContent = " Carregando...";

    try{

        const response = await fetch(

            "http://localhost:3000/run",

            {
                method:"POST",

                headers:{
                    "Content-Type":"application/json"
                },

                body:JSON.stringify({
                    code:code
                })
            }
        );

        const data = await response.json();

        output.textContent =
            data.output;

    }catch(error){

        output.textContent =
            "Erro:\n" + error;
    }
}