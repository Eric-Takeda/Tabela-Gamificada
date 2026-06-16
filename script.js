function abrirProjeto(url) {

    const frame = document.getElementById("frameProjeto");
    frame.style.opacity = "0";
    document.getElementById("modalProjeto").style.display = "flex";
    frame.src = url;
    frame.onload = () => {
        frame.style.opacity = "1";
    };
}

function fecharProjeto() {
    document.getElementById("modalProjeto").style.display = "none";
    document.getElementById("frameProjeto").src = "";
}

const filtros = document.querySelectorAll("footer li");
let categoriaAtiva = null;

filtros.forEach(filtro => {

    filtro.addEventListener("click", () => {

        const categoria = filtro.dataset.categoria;
        const projetos = document.querySelectorAll("#grid-container section");

        if (categoriaAtiva === categoria) {
            categoriaAtiva = null;
            filtros.forEach(li => li.classList.remove("ativo"));
            projetos.forEach(projeto => {
                projeto.classList.remove("oculto");
                projeto.classList.remove("destacado");
            });
            return;
        }
        categoriaAtiva = categoria;
        filtros.forEach(li => li.classList.remove("ativo"));
        filtro.classList.add("ativo");

        projetos.forEach(projeto => {
            if (projeto.classList.contains(categoria)) {
                projeto.classList.remove("oculto");
                projeto.classList.add("destacado");
            } else {
                projeto.classList.remove("destacado");
                projeto.classList.add("oculto");
            }
        });
    });
});

const cards = document.querySelectorAll("section");
const fundo = document.getElementById("background-animado");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{
        const imagem = card.dataset.bg;

        if(imagem){
            fundo.style.backgroundImage = `url(${imagem})`;
            fundo.style.opacity = "0.40";
        }
    });
    card.addEventListener("mouseleave",()=>{
        fundo.style.opacity = "0";
    });
});

const tooltip = document.getElementById("tooltip-projeto");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const descricao = card.dataset.desc;
        if(!descricao) return;

        tooltip.innerHTML = descricao;
        tooltip.style.left = (e.clientX + 20) + "px";
        tooltip.style.top = (e.clientY + 20) + "px";
        tooltip.style.opacity = "1";
        tooltip.style.transform = "translateY(0)";
    });

    card.addEventListener("mouseleave", () => {
        tooltip.style.opacity = "0";
        tooltip.style.transform = "translateY(10px)";
    });

});

const anuncios = document.querySelectorAll(".anuncio");
let anuncioAtual = 0;

setInterval(()=>{

    anuncios[anuncioAtual].classList.remove("ativo");
    anuncioAtual++;
    if(anuncioAtual >= anuncios.length){
        anuncioAtual = 0;
    }

    anuncios[anuncioAtual].classList.add("ativo");
},4000);