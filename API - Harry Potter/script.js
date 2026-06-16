const container = document.getElementById('charactersContainer');
const loading = document.getElementById('loading');
const searchInput = document.getElementById('searchInput');

async function buscarPersonagem() {

    const nome = searchInput.value.trim().toLowerCase();

    loading.classList.remove('hidden');
    container.innerHTML = '';

    try {

        const resposta = await fetch(
            'https://hp-api.onrender.com/api/characters'
        );

        const personagens = await resposta.json();

        let filtrados = personagens;

        if (nome !== '') {

            filtrados = personagens.filter(personagem =>
                personagem.name.toLowerCase().includes(nome)
            );
        }

        mostrarPersonagens(filtrados);

    } catch (erro) {

        container.innerHTML = `
            <div class="character-card">
                <div class="character-content">
                    <h2>Erro</h2>
                    <p>Não foi possível carregar os personagens.</p>
                </div>
            </div>
        `;

        console.error(erro);
    }

    loading.classList.add('hidden');
}

function mostrarPersonagens(personagens) {

    if (personagens.length === 0) {

        container.innerHTML = `
            <div class="character-card">
                <div class="character-content">
                    <h2>Nenhum personagem encontrado</h2>
                    <p>Tente pesquisar outro nome.</p>
                </div>
            </div>
        `;

        return;
    }

    personagens.forEach(personagem => {

        const imagem = personagem.image !== ''
            ? personagem.image
            : 'https://placehold.co/400x500/111827/FFFFFF?text=Sem+Imagem';

        const casa = personagem.house || 'Sem casa';

        container.innerHTML += `
            <div class="character-card">

                <img 
                    src="${imagem}" 
                    alt="${personagem.name}" 
                    class="character-image"
                >

                <div class="character-content">

                    <h2>${personagem.name}</h2>

                    <div class="info">
                        <span>Espécie:</span>
                        ${personagem.species || 'Desconhecida'}
                    </div>

                    <div class="info">
                        <span>Gênero:</span>
                        ${personagem.gender || 'Desconhecido'}
                    </div>

                    <div class="info">
                        <span>Ator:</span>
                        ${personagem.actor || 'Não informado'}
                    </div>

                    <div class="info">
                        <span>Nascimento:</span>
                        ${personagem.yearOfBirth || 'Desconhecido'}
                    </div>

                    <div class="info">
                        <span>Patrono:</span>
                        ${personagem.patronus || 'Nenhum'}
                    </div>

                    <div class="house-badge ${personagem.house}">
                        ${casa}
                    </div>

                </div>
            </div>
        `;
    });
}

buscarPersonagem();

searchInput.addEventListener('keydown', (event) => {

    if (event.key === 'Enter') {
        buscarPersonagem();
    }
});