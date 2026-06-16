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
        "main.php",
        code
    );

    // executa PHP
    exec(

        "php main.php",

        (error, stdout, stderr) => {

            // erro
            if(error){

                return res.json({
                    output: stderr
                });
            }

            // sucesso
            res.json({
                output: stdout
            });
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