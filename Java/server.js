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

    // salva Main.java
    fs.writeFileSync("Main.java", code);

    // compila
    exec("javac Main.java", (compileError, compileStdErr) => {

        if (compileError) {

            return res.json({
                output: compileStdErr
            });
        }

        // executa
        exec("java Main", (runError, stdout, stderr) => {

            if (runError) {

                return res.json({
                    output: stderr
                });
            }

            res.json({
                output: stdout
            });
        });
    });
});

app.listen(3000, () => {

    console.log("Servidor rodando em:");
    console.log("http://localhost:3000");
});