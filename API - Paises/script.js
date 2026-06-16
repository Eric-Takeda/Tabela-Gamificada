const container = document.getElementById('countriesContainer');
const loading = document.getElementById('loading');
const searchInput = document.getElementById('searchInput');

async function buscarPais(){

    const nome = searchInput.value.trim();

    loading.classList.remove('hidden');
    container.innerHTML = '';

    try{

        let url = 'https://restcountries.com/v3.1/all';

        if(nome !== ''){
            url = `https://restcountries.com/v3.1/name/${nome}`;
        }

        const resposta = await fetch(url);
        const paises = await resposta.json();

        mostrarPaises(paises);

    }catch(erro){

        container.innerHTML = `
            <div class="country-card">
                <div class="country-content">
                    <h2>Erro</h2>
                    <p>Não foi possível carregar os países.</p>
                </div>
            </div>
        `;

        console.error(erro);
    }

    loading.classList.add('hidden');
}

function mostrarPaises(paises){

    if(!paises || paises.status === 404){

        container.innerHTML = `
            <div class="country-card">
                <div class="country-content">
                    <h2>Nenhum país encontrado</h2>
                    <p>Tente outro nome.</p>
                </div>
            </div>
        `;

        return;
    }

    container.innerHTML = '';

    paises.slice(0, 20).forEach(pais => {

        const moeda = pais.currencies
            ? Object.values(pais.currencies)[0].name
            : 'Não informado';

        const idioma = pais.languages
            ? Object.values(pais.languages).join(', ')
            : 'Não informado';

        container.innerHTML += `
            <div class="country-card">

                <img 
                    src="${pais.flags.png}" 
                    alt="${pais.name.common}"
                    class="flag"
                >

                <div class="country-content">

                    <h2>${pais.name.common}</h2>

                    <div class="info">
                        <span>Capital:</span>
                        ${pais.capital ? pais.capital[0] : 'Não informado'}
                    </div>

                    <div class="info">
                        <span>Continente:</span>
                        ${pais.region}
                    </div>

                    <div class="info">
                        <span>População:</span>
                        ${pais.population.toLocaleString('pt-BR')}
                    </div>

                    <div class="info">
                        <span>Moeda:</span>
                        ${moeda}
                    </div>

                    <div class="info">
                        <span>Idioma:</span>
                        ${idioma}
                    </div>

                </div>
            </div>
        `;
    });
}

buscarPais();

searchInput.addEventListener('keydown', (event) => {

    if(event.key === 'Enter'){
        buscarPais();
    }
});