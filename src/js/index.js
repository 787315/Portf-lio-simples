const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');
console.log(projetosInativos);

botaoMostrarProjetos.addEventListener('click', () => {

    MostrarMaisProjetos();
    EsconderBotao();


});

function EsconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

function MostrarMaisProjetos() {
    projetosInativos.forEach(projetosInativo => {
        projetosInativo.classList.add('ativo');

    });
}
    // Passo 3 - adicionar a classe "ativo" nos projetos escondidos