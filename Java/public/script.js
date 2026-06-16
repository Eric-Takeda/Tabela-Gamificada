const editor = CodeMirror.fromTextArea(
    document.getElementById("code"),
    {
        mode:"text/x-java",
        theme:"material",
        lineNumbers:true
    }
);

editor.setValue(

`public class Main {

    public static void main(String[] args) {

        System.out.println("Ola Java!");

    }

}`
);

document
.getElementById("run-btn")
.addEventListener("click", runCode);

async function runCode(){

    const code = editor.getValue();

    const output =
        document.getElementById("output");

    output.textContent = "Running...";

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

    output.textContent = data.output;
}