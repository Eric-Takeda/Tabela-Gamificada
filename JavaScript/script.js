document.addEventListener("DOMContentLoaded", function () {

    // CodeMirror setup
    const editor = CodeMirror.fromTextArea(document.getElementById("code"), {
        mode: "javascript",
        theme: "material",
        lineNumbers: true,
        autoCloseBrackets: true,
        matchBrackets: true
    });

    editor.setValue(`const name = input("Seu nome: ");
console.log("Olá", name);`);

    let inputs = [];

    function compileCode() {
        const code = editor.getValue();
        const output = document.getElementById("output");

        output.innerHTML = "🔄 Rodando...";

        // detect input()
        const inputPattern = /input\s*\(\s*(?:['"`](.*?)['"`])?\s*\)/g;
        const inputPrompts = [...code.matchAll(inputPattern)].map(m => m[1]);

        if (inputPrompts.length > 0) {
            showInputs(inputPrompts);
            return;
        }

        executeCode(code, []);
    }

    function showInputs(prompts) {
        const output = document.getElementById("output");
        output.innerHTML = "<h3>Entradas:</h3>";

        const container = document.createElement("div");
        container.className = "inputs-container";

        prompts.forEach((p, i) => {
            const div = document.createElement("div");

            const label = document.createElement("label");
            label.textContent = p || `Input ${i + 1}`;

            const input = document.createElement("input");
            input.className = "user-input";
            input.id = "input-" + i;

            div.appendChild(label);
            div.appendChild(input);
            container.appendChild(div);
        });

        const btn = document.createElement("button");
        btn.textContent = "Executar";
        btn.className = "run-btn";

        btn.onclick = submitInputs;

        output.appendChild(container);
        output.appendChild(btn);
    }

    function submitInputs() {
        const inputsList = [...document.querySelectorAll(".user-input")]
            .map(i => i.value);

        const code = editor.getValue();

        executeCode(code, inputsList);
    }

    function executeCode(code, inputValues = []) {
    const output = document.getElementById("output");
    output.innerHTML = "";

    let index = 0;

    function log(...args) {
        output.innerHTML += args.join(" ") + "\n";
    }

    function input(prompt = "") {
        return inputValues[index++] ?? "";
    }

    try {
        new Function("log", "input", `
            const console = { log };

            ${code}
        `)(log, input);

    } catch (err) {
        output.innerHTML = "⚠ Erro:\n\n" + err;
    }
}

    document.querySelector(".run-btn")
        .addEventListener("click", compileCode);
});