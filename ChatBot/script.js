const projetos = [
  {
    nome: "Lâmpada",
    tags: ["lampada", "lâmpada", "01"],
    desc: "Projeto de ligar e desligar uma lâmpada usando JavaScript e manipulação do DOM."
  },
  {
    nome: "Mario Jump",
    tags: ["mario", "mario jump", "02"],
    desc: "Jogo estilo plataforma com colisão e animações em JavaScript."
  },
  {
    nome: "Semáforo",
    tags: ["semaforo", "03"],
    desc: "Simulador de semáforo com controle de tempo em JavaScript."
  },
  {
    nome: "Relógio Analógico",
    tags: ["relogio analogico", "ra", "04"],
    desc: "Relógio analógico atualizado com JavaScript."
  },
  {
    nome: "Calculadora",
    tags: ["calculadora", "05"],
    desc: "Calculadora simples feita com JavaScript puro."
  },
  {
    nome: "Portal",
    tags: ["portal", "06"],
    desc: "Portal com links e navegação dinâmica em JavaScript."
  },
  {
    nome: "Conversor Binário",
    tags: ["binario", "conversor binario", "07"],
    desc: "Conversor de números binários para decimal e vice-versa."
  },
  {
    nome: "IMC",
    tags: ["imc", "08"],
    desc: "Calculadora de IMC usando JavaScript."
  },
  {
    nome: "Jogo da Velha",
    tags: ["jogo da velha", "velha", "09"],
    desc: "Jogo da velha com lógica de vitória em JavaScript."
  },
  {
    nome: "Snake Game",
    tags: ["snake", "cobrinha", "10"],
    desc: "Jogo da cobrinha com colisão e canvas."
  },
  {
    nome: "SlideShow",
    tags: ["slideshow", "11"],
    desc: "Apresentação de imagens automática em JavaScript."
  },
  {
    nome: "Relógio Digital",
    tags: ["relogio digital", "12"],
    desc: "Relógio digital atualizado em tempo real."
  },
  {
    nome: "Cronômetro",
    tags: ["cronometro", "13"],
    desc: "Cronômetro com start, pause e reset."
  },
  {
    nome: "Pixel Art",
    tags: ["pixel art", "14"],
    desc: "Criador de pixel art interativo."
  },
  {
    nome: "Paint",
    tags: ["paint", "15"],
    desc: "Mini Paint feito com JavaScript."
  },
  {
    nome: "Login Frontend",
    tags: ["login", "16"],
    desc: "Tela de login apenas com front-end."
  },
  {
    nome: "PacMan",
    tags: ["pacman", "17"],
    desc: "Jogo estilo Pac-Man em JavaScript."
  },
  {
    nome: "Jogo da Memória",
    tags: ["memoria", "memory", "18"],
    desc: "Jogo da memória com cartas."
  },
  {
    nome: "To-Do List",
    tags: ["todo", "tarefas", "19"],
    desc: "Lista de tarefas com localStorage."
  },
  {
    nome: "Conversor de Moedas",
    tags: ["moedas", "20"],
    desc: "Conversor de moedas com API externa."
  },
  {
    nome: "Pokédex",
    tags: ["pokedex", "pokemon", "21"],
    desc: "Pokédex usando API do Pokémon."
  },
  {
    nome: "Harry Potter API",
    tags: ["harry potter", "22"],
    desc: "Site com dados da API de Harry Potter."
  },
  {
    nome: "Países Interativos",
    tags: ["paises", "countries", "23"],
    desc: "Informações de países via API."
  },
  {
    nome: "Site de Jogos",
    tags: ["games", "24"],
    desc: "Portal de jogos com API."
  },
  {
    nome: "Imposto de Renda",
    tags: ["imposto", "25"],
    desc: "Calculadora de imposto de renda."
  },
  {
    nome: "QR Code",
    tags: ["qr", "26"],
    desc: "Gerador de QR Code."
  },
  {
    nome: "Piano",
    tags: ["piano", "27"],
    desc: "Piano virtual interativo."
  },
  {
    nome: "Gradient",
    tags: ["gradient", "28"],
    desc: "Gerador de gradiente de cores."
  },
  {
    nome: "Sistema Solar",
    tags: ["sistema solar", "29"],
    desc: "Simulação do sistema solar em JavaScript."
  },
  {
    nome: "Cubo Mágico 3D",
    tags: ["cubo magico", "rubik", "30"],
    desc: "Cubo mágico 3D interativo."
  },
  {
    nome: "Imagem 360°",
    tags: ["360", "imagem 360", "31"],
    desc: "Visualização de imagem em 360 graus."
  },
  {
    nome: "Gerador de Senha",
    tags: ["senha", "password", "32"],
    desc: "Gerador de senhas seguras."
  },
  {
    nome: "Box Shadow",
    tags: ["shadow", "box shadow", "33"],
    desc: "Gerador de sombras CSS."
  },
  {
    nome: "Paleta de Cores",
    tags: ["cores", "34"],
    desc: "Ferramenta de paleta de cores."
  },
  {
    nome: "Forca",
    tags: ["forca", "35"],
    desc: "Jogo da forca em JavaScript."
  },
  {
    nome: "Campo Minado",
    tags: ["campo minado", "36"],
    desc: "Jogo campo minado simples."
  },
  {
    nome: "Tabela Periódica",
    tags: ["tabela", "periodica", "quimica", "tp", "37"],
    desc: "Tabela periódica interativa em JavaScript."
  },
  {
    nome: "Login Planilha",
    tags: ["planilha", "sheet", "38"],
    desc: "Login que envia dados para Google Sheets."
  },
  {
    nome: "Mapa Interativo",
    tags: ["mapa", "39"],
    desc: "Mapa mundial interativo."
  },
  {
    nome: "Wikipedia",
    tags: ["wikipedia", "40"],
    desc: "Buscador de artigos da Wikipedia."
  },
  {
    nome: "GitHub Finder",
    tags: ["github", "41"],
    desc: "Busca de perfis no GitHub."
  },
  {
    nome: "Maps",
    tags: ["maps", "42"],
    desc: "Integração com Google Maps."
  },
  {
    nome: "Tradutor",
    tags: ["tradutor", "43"],
    desc: "Tradutor usando API."
  },
  {
    nome: "Python Compiler",
    tags: ["python", "44"],
    desc: "Compilador Python online."
  },
  {
    nome: "Java Compiler",
    tags: ["java", "45"],
    desc: "Compilador Java online."
  },
  {
    nome: "C Compiler",
    tags: ["c", "46"],
    desc: "Compilador de linguagem C."
  },
  {
    nome: "C# Compiler",
    tags: ["c#", "47"],
    desc: "Compilador C# online."
  },
  {
    nome: "C++ Compiler",
    tags: ["c++", "48"],
    desc: "Compilador C++ online."
  },
  {
    nome: "Go Compiler",
    tags: ["go", "49"],
    desc: "Compilador GoLang online."
  },
  {
    nome: "PHP Compiler",
    tags: ["php", "50"],
    desc: "Compilador PHP online."
  },
  {
    nome: "Ruby Compiler",
    tags: ["ruby", "51"],
    desc: "Compilador Ruby online."
  },
  {
    nome: "Rust Compiler",
    tags: ["rust", "52"],
    desc: "Compilador Rust online."
  },
  {
    nome: "Sudoku",
    tags: ["sudoku", "53"],
    desc: "Jogo Sudoku em JavaScript."
  },
  {
    nome: "Xadrez",
    tags: ["xadrez", "54"],
    desc: "Jogo de xadrez simples em JavaScript."
  }
];

const API_KEY = "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";

const chatBox = document.getElementById("chat-box");
const input = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.textContent = text;

  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// (mantido, mas não interfere no fluxo)
function encontrarProjeto(texto) {
  texto = texto.toLowerCase();

  for (let projeto of projetos) {
    if (projeto.tags.some(tag => texto.includes(tag))) {
      return projeto.desc;
    }
  }

  return null;
}

async function sendMessage() {
  const userText = input.value.trim();

  if (!userText) return;

  addMessage(userText, "user");
  input.value = "";

  try {
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            {
              role: "system",
              content: `
Você é um assistente integrado a um portfólio de projetos de um desenvolvedor chamado Eric Takeda.

REGRAS:
- Responda SEMPRE em português do Brasil.
- Você deve conhecer e responder dúvidas sobre os projetos listados.
- Se a pergunta for sobre algum projeto, explique como ele funciona, tecnologias usadas e objetivo.
- Se não souber algo específico, diga que não está documentado no portfólio.
              `
            },
            {
              role: "user",
              content: userText
            }
          ],
          temperature: 0.7
        })
      }
    );

    const data = await response.json();

    const botReply =
      data?.choices?.[0]?.message?.content ||
      "Não consegui gerar uma resposta no momento.";

    addMessage(botReply, "bot");

  } catch (error) {
    console.error(error);
    addMessage("Erro ao conectar com a API.", "bot");
  }
}

sendBtn.addEventListener("click", sendMessage);

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendMessage();
  }
});
