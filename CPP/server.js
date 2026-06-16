const express = require("express");

const cors = require("cors");

const bodyParser = require("body-parser");

const fs = require("fs");

const { exec } = require("child_process");

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(express.static("public"));

app.post("/run", (req, res) => {

    const code = req.body.code;

    // salva código
    fs.writeFileSync(
        "main.cpp",
        code
    );

    // compila
    exec(

        "g++ main.cpp -o main.exe",

        (compileError, stdout, stderr) => {

            // erro compilação
            if(compileError){

                return res.json({
                    output: stderr
                });
            }

            // executa
            exec(

                "main.exe",

                (runError, runStdout, runStderr) => {

                    // erro execução
                    if(runError){

                        return res.json({
                            output: runStderr
                        });
                    }

                    // sucesso
                    res.json({
                        output: runStdout
                    });
                }
            );
        }
    );
});

app.listen(3000, () => {

    console.log(
        "Servidor rodando em:"
    );

    console.log(
        "http://localhost:3000"
    );
});