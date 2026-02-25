// Lista de GIFs para o estábulo
let indiceAtual = 0;

// Função para mudar a tela (esconde uma e mostra outra)
function mudarTela(idAtual, idProxima) {
    document.getElementById(idAtual).classList.add('hidden');
    document.getElementById(idProxima).classList.remove('hidden');
}

// Lógica de Login
function fazerLogin() {
    const user = document.getElementById('usuario').value;
    const pass = document.getElementById('senha').value;

    if (user === "admin" && pass === "123") {
        mudarTela('tela-login', 'tela-verificacao');
    } else {
        document.getElementById('erro-login').innerText = "Usuário ou senha inválidos!";
    }
}

// Seleciona o elemento de áudio
const audioRelincho = document.getElementById('som-relincho');

// Função reutilizável para tocar o som
function tocarRelincho() {
    audioRelincho.currentTime = 0; // Reinicia o som caso ele já esteja tocando
    audioRelincho.play();
}

// ... (Mantenha as outras funções de mudarTela e fazerLogin) ...

function confirmarCavalo(souCavalo) {
    if (souCavalo) {
        tocarRelincho(); // Toca o som ao confirmar!
        mudarTela('tela-verificacao', 'tela-final');
    } else {
        alert("Acesso negado. Apenas equinos permitidos!");
        location.reload();
    }
}

function trocarGif() {
    const imgElement = document.getElementById('gif-cavalo');
    const btn = document.querySelector('.btn-trocar');
    
    // Toca o som a cada troca de imagem
    tocarRelincho();

    // Lógica de rotação de GIFs
    const listaGifs = [
        "https://media.tenor.com/Bj7mc_5PflgAAAAM/horse-cavalo.gif",
        "https://i.pinimg.com/originals/6a/d8/b0/6ad8b00bd2587a60da7194803790042a.gif",
        "https://media.tenor.com/THOKFEGCuCkAAAAM/horse-horse-meme.gif",
        "https://i.makeagif.com/media/6-11-2021/ffB-ZT.gif"
    ];

    btn.classList.remove('animar-botao');
    void btn.offsetWidth; // Reset da animação
    btn.classList.add('animar-botao');    // Adiciona a classe novamente

    btn.classList.remove('botao-click');
    void btn.offsetWidth; // Reset da animação
    btn.classList.add('botao-click');    

    imgElement.classList.remove('animar-pulo'); // Remove a classe antiga
    void imgElement.offsetWidth;               // Truque para "resetar" a animação no navegador
    imgElement.classList.add('animar-pulo');    // Adiciona a classe novamente

    indiceAtual = (indiceAtual + 1) % listaGifs.length;
    imgElement.src = listaGifs[indiceAtual];
}

let festaAtiva = false;
let intervaloFesta;

function alternarModoFesta() {
    const corpo = document.body;
    const botoes = document.querySelectorAll('button');
    const btnFesta = document.getElementById('btn-festa');

    festaAtiva = !festaAtiva; // Inverte o estado (liga/desliga)

    if (festaAtiva) {
        btnFesta.innerText = "DESCAVALAR";
        corpo.classList.add('modo-festa-cor');
        
        // Faz todos os botões girarem
        botoes.forEach(btn => btn.classList.add('botao-girando'));

        // Começa a trocar os GIFs e tocar o som a cada 500ms (0.5s)
        intervaloFesta = setInterval(() => {
            trocarGif(); // Reutiliza sua função que já troca imagem e toca som
        }, 500);

    } else {
        location.reload();
    }
}

