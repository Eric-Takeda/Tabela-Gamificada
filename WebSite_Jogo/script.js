const API_KEY = "ae56042477ce452a999ad9d2b24c992b";

const container = document.getElementById("jogosContainer");
const botaoBusca = document.getElementById("botaoBusca");
const campoBusca = document.getElementById("campoBusca");

/* CARREGA JOGOS AUTOMATICAMENTE */

window.addEventListener("load", () => {
    carregarJogosPopulares();
});

/* BUSCAR JOGOS POPULARES */

async function carregarJogosPopulares(){

    container.innerHTML =
        `<p class="loading">Carregando jogos...</p>`;

    const url =
        `https://api.rawg.io/api/games?key=${API_KEY}&page_size=20`;

    try{

        const resposta = await fetch(url);

        const dados = await resposta.json();

        mostrarJogos(dados.results);

    }catch(erro){

        container.innerHTML =
            `<p class="loading">Erro ao carregar jogos.</p>`;

        console.log(erro);

    }

}

/* PESQUISA */

async function buscarJogos(){

    const busca = campoBusca.value;

    if(busca === ""){
        carregarJogosPopulares();
        return;
    }

    container.innerHTML =
        `<p class="loading">Buscando jogos...</p>`;

    const url =
        `https://api.rawg.io/api/games?key=${API_KEY}&search=${busca}`;

    try{

        const resposta = await fetch(url);

        const dados = await resposta.json();

        mostrarJogos(dados.results);

    }catch(erro){

        container.innerHTML =
            `<p class="loading">Erro ao buscar jogos.</p>`;

        console.log(erro);

    }

}

/* MOSTRAR JOGOS */

function mostrarJogos(jogos) {

    container.innerHTML = "";

    /* FILTRAR JOGOS */

    const jogosFiltrados = jogos.filter(jogo => {

        /* sem imagem */
        if (!jogo.background_image) return false;

        /* sem nota */
        if (jogo.rating < 3) return false;

        /* poucos votos */
        if (jogo.ratings_count < 100) return false;

        /* sem data */
        if (!jogo.released) return false;

        /* remover DLCs e expansões */
        const nome = jogo.name.toLowerCase();

        if (
            nome.includes("dlc") ||
            nome.includes("expansion") ||
            nome.includes("pack") ||
            nome.includes("bundle") ||
            nome.includes("soundtrack") ||
            nome.includes("demo")
        ) {
            return false;
        }

        return true;
    });

    /* se não achar */

    if (jogosFiltrados.length === 0) {

        container.innerHTML = `
            <p class="loading">
                Nenhum jogo encontrado.
            </p>
        `;

        return;
    }

    /* mostrar jogos */

    jogosFiltrados.forEach(jogo => {

        const nota =
            (jogo.rating * 2).toFixed(1);

        const card = document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `
            <img
                src="${jogo.background_image}"
                alt="${jogo.name}"
            >

            <div class="card-content">

                <h2>${jogo.name}</h2>

                <p class="data">
                     ${jogo.released}
                </p>

                <span class="nota">
                    ⭐ ${nota}/10
                </span>

            </div>
        `;

        container.appendChild(card);

    });

}

/* EVENTOS */

botaoBusca.addEventListener("click", buscarJogos);

campoBusca.addEventListener("keydown", (event) => {

    if(event.key === "Enter"){
        buscarJogos();
    }

});