document.addEventListener('DOMContentLoaded', function () {
    // Initialize CodeMirror with Syntax Highlighting
    const editor = CodeMirror.fromTextArea(document.getElementById("code"), {
        mode: "python",
        theme: "material",
        lineNumbers: true,
        indentUnit: 4,
        smartIndent: true,
        matchBrackets: true,
        autoCloseBrackets: true,
        lineWrapping: true
    });

    // Default Python Code
    editor.setValue("print('Hello, World!')");

    // Function to compile code with dynamic input handling
    async function compileCode() {
        const code = editor.getValue();
        const outputElement = document.getElementById("output");
        outputElement.textContent = "🔄 Rodando...";

        // Check if input() is needed?
        const inputPattern = /input\s*\(\s*(?:['"`](.*?)['"`])?\s*\)/g;
        const inputPrompts = [...code.matchAll(inputPattern)].map(match => match[1]);

        if (inputPrompts.length > 0) {
            // Clear previous content
            outputElement.innerHTML = '<h3>Provide Input:</h3>';

            // Create a container for inputs
            const inputsContainer = document.createElement('div');
            inputsContainer.classList.add('inputs-container');

            inputPrompts.forEach((prompt, index) => {
                const inputGroup = document.createElement('div');
                inputGroup.classList.add('input-group');

                const label = document.createElement('label');
                label.setAttribute('for', `input-${index}`);
                label.textContent = prompt;

                const input = document.createElement('input');
                input.type = 'text';
                input.id = `input-${index}`;
                input.classList.add('user-input');

                // Append label and input to the input group
                inputGroup.appendChild(label);
                inputGroup.appendChild(input);

                // Append input group to the inputs container
                inputsContainer.appendChild(inputGroup);
            });

            // Append inputs container to the output element
            outputElement.appendChild(inputsContainer);

            // Create and append the submit button
            const submitButton = document.createElement('button');
            submitButton.id = 'submit-inputs-btn';
            submitButton.textContent = 'Submit Inputs';
            outputElement.appendChild(submitButton);

            // Attach event listener to the submit button
            submitButton.addEventListener('click', submitInputs);
            return;
        }

        await executeCode(code);
    }

    // Function to Execute Code
    let pyodide;

async function loadPyodideAndPackages() {

    pyodide = await loadPyodide();

    console.log("Pyodide loaded!");
}

loadPyodideAndPackages();

async function executeCode(code, inputs = []) {

    const outputElement =
        document.getElementById("output");

    outputElement.textContent =
        "🔄 Running...";

    try {

        // Simula input()
        let inputIndex = 0;

        pyodide.setStdout({
            batched: (msg) => {
                outputElement.textContent += msg + "\n";
            }
        });

        pyodide.setStdin({
            stdin: () => {
                return inputs[inputIndex++] || "";
            }
        });

        outputElement.textContent = "";

        await pyodide.runPythonAsync(code);

    } catch (error) {

        outputElement.textContent =
            "⚠ Python Error:\n\n" + error;
    }
}

    // Collect inputs and Rerun code
    function submitInputs() {
        const inputs = Array.from(document.querySelectorAll(".user-input")).map(input => input.value);
        const code = editor.getValue();
        executeCode(code, inputs);
    }

    // Add event listener to run code button
    const runButton = document.querySelector(".run-btn");
    runButton.addEventListener('click', compileCode);
});