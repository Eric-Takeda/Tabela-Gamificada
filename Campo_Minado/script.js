const gameContainer = document.getElementById("game-container"); // Seleciona o contêiner do jogo
const rows = 10; // Define o número de linhas do tabuleiro
const cols = 10; // Define o número de colunas do tabuleiro
const bombCount = 15; // Quantidade de bombas no tabuleiro

// Função para criar o tabuleiro
function createBoard() {
    const cells = []; // Array para armazenar as células
    for (let i = 0; i < rows * cols; i++) {
    const cell = document.createElement("div"); // Cria uma nova célula (div)
    cell.classList.add("cell"); // Adiciona a classe "cell" para estilização
    cell.dataset.id = i; // Adiciona um identificador único para a célula
    gameContainer.appendChild(cell); // Adiciona a célula ao contêiner do jogo
    cells.push(cell); // Armazena a célula no array
    }

    // Distribui bombas aleatoriamente pelo tabuleiro
    let bombsPlaced = 0; // Contador de bombas colocadas
    while (bombsPlaced < bombCount) {
    const randomIndex = Math.floor(Math.random() * cells.length); // Seleciona uma posição aleatória
    if (!cells[randomIndex].classList.contains("bomb")) {
        // Verifica se a posição já tem uma bomba
        cells[randomIndex].classList.add("bomb"); // Adiciona a classe "bomb" para marcar como bomba
        bombsPlaced++; // Incrementa o contador de bombas
    }
    }

    return cells; // Retorna o array de células
}

// Função para lidar com o clique em uma célula
function handleCellClick(event) {
    const cell = event.target; // Obtém a célula clicada
    if (cell.classList.contains("revealed")) return; // Ignora se a célula já foi revelada

    cell.classList.add("revealed"); // Marca a célula como revelada

    if (cell.classList.contains("bomb")) {
    // Se a célula for uma bomba
    cell.innerHTML = "💣"; // Mostra o ícone de bomba
    revealAllBombs(); // Revela todas as bombas
    alert("Game Over!"); // Exibe mensagem de fim de jogo
    } else {
    // Se for uma célula segura
    const adjacentBombs = getAdjacentBombs(cell.dataset.id); // Calcula bombas adjacentes
    cell.innerHTML = adjacentBombs || ""; // Exibe o número de bombas adjacentes ou vazio
    }
}

// Função para revelar todas as bombas no tabuleiro
function revealAllBombs() {
    cells.forEach((cell) => {
    if (cell.classList.contains("bomb")) {
        // Revela todas as células com bombas
        cell.classList.add("revealed");
        cell.innerHTML = "💣";
    }
    });
}

// Função para calcular o número de bombas adjacentes
function getAdjacentBombs(index) {
    const row = Math.floor(index / cols); // Calcula a linha da célula
    const col = index % cols; // Calcula a coluna da célula
    let count = 0; // Inicializa o contador de bombas adjacentes

    // Percorre as células ao redor (3x3)
    for (let r = row - 1; r <= row + 1; r++) {
    for (let c = col - 1; c <= col + 1; c++) {
        // Verifica se a célula está dentro dos limites do tabuleiro
        if (r >= 0 && r < rows && c >= 0 && c < cols) {
        const neighborIndex = r * cols + c; // Calcula o índice da célula vizinha
        if (cells[neighborIndex].classList.contains("bomb")) {
            count++; // Incrementa o contador se a célula vizinha for uma bomba
        }
        }
    }
    }

    return count; // Retorna o número de bombas adjacentes
}

const cells = createBoard(); // Cria o tabuleiro
cells.forEach((cell) => cell.addEventListener("click", handleCellClick)); // Adiciona o evento de clique em cada célula