document.addEventListener("DOMContentLoaded", function () {
    const botaoIniciar = document.querySelector(".botao-iniciar");
    const secaoInicial = document.querySelector("#inicio");
    const novoConteudo = document.querySelector("#novo-conteudo");

    botaoIniciar.addEventListener("click", function (e) {
        e.preventDefault();
        secaoInicial.classList.add("esconder-secao");
        novoConteudo.classList.remove("escondido");
        novoConteudo.classList.add("mostrar-conteudo");
    });
});


