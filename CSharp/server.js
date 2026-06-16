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

    // salva código C#
    fs.writeFileSync(
        "Program.cs",
        code
    );

    // cria projeto console
    exec(

        "dotnet new console -o tempProject --force",

        (projectError) => {

            if(projectError){

                return res.json({
                    output:"Erro criando projeto"
                });
            }

            // substitui Program.cs
            fs.writeFileSync(
                "tempProject/Program.cs",
                code
            );

            // executa
            exec(

                "cd tempProject && dotnet run",

                (runError, stdout, stderr) => {

                    // erro
                    if(runError){

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