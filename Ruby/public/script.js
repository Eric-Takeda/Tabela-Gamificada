document.addEventListener(

    "DOMContentLoaded",

    () => {

        // editor
        const editor =
            CodeMirror.fromTextArea(

                document.getElementById("code"),

                {
                    mode:"ruby",

                    theme:"material",

                    lineNumbers:true,

                    autoCloseBrackets:true,

                    matchBrackets:true,

                    indentUnit:4,

                    lineWrapping:true
                }
            );

        // código padrão
        editor.setValue(

`puts "Olá Ruby!"`
        );

        // botão
        document
        .getElementById("run-btn")
        .addEventListener(
            "click",
            runCode
        );

        // executa
        async function runCode(){

            const code =
                editor.getValue();

            const output =
                document.getElementById("output");

            output.textContent =
                "🔄 Running...";

            try{

                const response =
                    await fetch(

                        "http://localhost:3000/run",

                        {
                            method:"POST",

                            headers:{
                                "Content-Type":
                                "application/json"
                            },

                            body:JSON.stringify({
                                code:code
                            })
                        }
                    );

                const data =
                    await response.json();

                output.textContent =
                    data.output;

            }catch(error){

                output.textContent =
                    "⚠ Error:\n\n" + error;
            }
        }
    }
);